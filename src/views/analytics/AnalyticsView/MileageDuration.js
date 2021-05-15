/* eslint-disable */
import React, { useContext } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Line } from '@reactchartjs/react-chart.js';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import BarChart from './BarChart';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  flexColScroll: {
    'flex-grow': 1,
    overflow: 'scroll',
    'min-height': '100%',
    height:'100%',
    'overflow-x': 'hidden',
    'list-style-type': 'none !important',
  },
  flexSection: {
    'flex-grow': 1,
    display: 'flex',
    'flex-direction': 'column',
    'min-height': 0,
    height: 150,
    padding: '0px 3px 20px 5px',
  },
  chartContainer: {
    padding: '0px 20px 20px 0px',
  }
}));

const MileageDuration = ({ className, updateRange, ...rest }) => {
  const classes = useStyles();

  const onUpdateRange = (newRange) => {
    // console.log("onUpdateRange @ MileageDuration.js | Range: " + newRange);
    updateRange(newRange);
  };

  const data = [
    {year: 1992, efficiency: 29, sales: 8042000},
    {year: 1993, efficiency: 29.5, sales: 7556000},
    {year: 1994, efficiency: 29, sales: 8042000},
    {year: 1995, efficiency: 29.5, sales: 7556000},
    {year: 1996, efficiency: 29.5, sales: 7483000},
    {year: 1997, efficiency: 30.3, sales: 7660000},
    {year: 1998, efficiency: 30.1, sales: 7762000},
    {year: 1999, efficiency: 31.2, sales: 7562000},
    {year: 2000, efficiency: 31.5, sales: 6769000},
    {year: 2001, efficiency: 32.9, sales: 5402000},
    {year: 2002, efficiency: 29, sales: 8042000},
    {year: 2003, efficiency: 29.5, sales: 7556000},
    {year: 2004, efficiency: 29.5, sales: 7483000},
    {year: 2005, efficiency: 30.3, sales: 7660000},
    {year: 2006, efficiency: 30.1, sales: 7762000},
    {year: 2007, efficiency: 31.2, sales: 7562000},
    {year: 2008, efficiency: 31.5, sales: 6769000},
    {year: 2009, efficiency: 32.9, sales: 5402000},
    {year: 2010, efficiency: 33.9, sales: 5636000},
    {year: 2011, efficiency: 33.1, sales: 6093000},
    {year: 2012, efficiency: 35.3, sales: 7245000},
    {year: 2013, efficiency: 36.4, sales: 7586000},
    {year: 2014, efficiency: 36.5, sales: 7708000},
    {year: 2015, efficiency: 37.2, sales: 7517000},
    {year: 2016, efficiency: 37.7, sales: 6873000},
    {year: 2017, efficiency: 39.4, sales: 6081000},
    {year: 2018, efficiency: 37.2, sales: 7517000},
    {year: 2019, efficiency: 37.7, sales: 6873000},
    {year: 2020, efficiency: 39.4, sales: 6081000},
  ]

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Grid
            container
            justify="space-between"
            spacing={3}
        >
            <Grid item>
                <Typography
                color="textSecondary"
                gutterBottom
                variant="h6"
                >
                    MILEAGE &amp; DURATION
                </Typography>
            </Grid>
        </Grid>
        <Grid
          container
        //   justify="space-between"
          spacing={3}
          className={classes.chartContainer}
        >
            <BarChart
              data={data}
              updateRange={onUpdateRange}
            />
        </Grid>
      </CardContent>
    </Card>
  );
};

MileageDuration.propTypes = {
  className: PropTypes.string
};

export default MileageDuration;
