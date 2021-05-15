/* eslint-disable */
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import HorizontalBarChart from './HorizontalBarChart';
import seedrandom from 'seedrandom';

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
    height: 410,
  }
}));

const DurationChart = forwardRef (({ className, ...rest }, ref) => {
  const classes = useStyles();
  const horizontalBarRef = useRef();

  useImperativeHandle(ref, () => ({

    switchRange(isSwitched) {
      horizontalBarRef.current.switchRange(isSwitched);
    }

  }));

  const data = [];
  const subData = [];
  const location = [
    "University Pickers", "Walmart Supercenter", "Target", "Pants Store",
    "At Home", "Neighborhooad Store", "Harrison Brothers Hardware",
    "University Furniture Gallery", "Dillard's", "Citi Trends",
    "Southern Growler", "Digineli Industries Inc",
    "Nektar Therapeutics Alabama", "Boeing (JetPlex)", "Arcarithm, Inc",
    "Schrimsher Company", "Pharicode", "Innerspace Brewing Company",
    "Northside Coffee", "Hot Spot Bar & Grill", "Drake's Huntsville",
    "Jefferson Street Pub",
  ];
  for (let i = 0; i < location.length; i++) {
      let rng = seedrandom(location[i]);
      let randomValue = Math.round(rng() * i * 12 + 1);
      let subRandomValue = Math.round(Math.random() * i + 1) % randomValue;
      data.push({
        name: location[i].slice(0,7) + (location[i].length <= 10 ? location[i].slice(7,10) : "..."),
        value: randomValue
      });
      subData.push({
        name: location[i].slice(0,7) + (location[i].length <= 10 ? location[i].slice(7,10) : "..."),
        value: subRandomValue
      });
  }
  // console.log(data);

  // const data = [
  //   {year: 2002, efficiency: 29, sales: 8042000},
  //   {year: 2003, efficiency: 29.5, sales: 7556000},
  //   {year: 2004, efficiency: 29.5, sales: 7483000},
  //   {year: 2005, efficiency: 30.3, sales: 7660000},
  //   {year: 2006, efficiency: 30.1, sales: 7762000},
  //   {year: 2007, efficiency: 31.2, sales: 7562000},
  //   {year: 2008, efficiency: 31.5, sales: 6769000},
  //   {year: 2009, efficiency: 32.9, sales: 5402000},
  //   {year: 2010, efficiency: 33.9, sales: 5636000},
  //   {year: 2011, efficiency: 33.1, sales: 6093000},
  //   {year: 2012, efficiency: 35.3, sales: 7245000},
  //   {year: 2013, efficiency: 36.4, sales: 7586000},
  //   {year: 2014, efficiency: 36.5, sales: 7708000},
  //   {year: 2015, efficiency: 37.2, sales: 7517000},
  //   {year: 2016, efficiency: 37.7, sales: 6873000},
  //   {year: 2017, efficiency: 39.4, sales: 6081000},
  // ]

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
                  VISITED LOCATIONS BY <br></br>DURATION
                </Typography>
            </Grid>
        </Grid>
        <Grid
          container
        //   justify="space-between"
          spacing={3}
          className={classes.chartContainer}
        >
            <HorizontalBarChart
              ref={horizontalBarRef}
              data={data}
              subData={subData}
              width={220}
              height={400}
              color="Turquoise"
            />
        </Grid>
      </CardContent>
    </Card>
  );
});

DurationChart.propTypes = {
  className: PropTypes.string
};

export default DurationChart;
