/* eslint-disable */
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import LineChart from './LineChart';
import data from '../../../data/heartdata.csv';

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
    padding: '10px 20px 20px 0px',
    height: '270px',
  },
  lineChart: {
    padding: '0px 20px 20px 0px',
  }
}));

const HeartRateVariability = ({ className, range, ...rest }) => {
  const classes = useStyles();
  const [newRange, setNewRange] = useState(range);

  useEffect(() => {
    setNewRange(range);
  }, null);

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
                  HEART RATE VARIABILITY
                </Typography>
            </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          className={classes.chartContainer}
        >
            <LineChart
              dataCSV={data}
              range={newRange}
              width={1600}
              height={250}
              className={classes.lineChart}
              color="LightCoral"
            />
        </Grid>
      </CardContent>
    </Card>
  );
};

HeartRateVariability.propTypes = {
  className: PropTypes.string
};

export default HeartRateVariability;
