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
import seedrandom from 'seedrandom';
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
  // console.log("HeartRateVariability | range = " + JSON.stringify(range));

  useEffect(() => {
    // console.log("useEffect | range: " + range);
    setNewRange(range);
    // console.log("useEffect | newRange: " + newRange);
  }, null);

  // const data = [];
  // let randomDate = new Date('2020-01-29');
  // for (let i = 0; i < 100; i++) {
  //     let rng = seedrandom(randomDate.toLocaleString());
  //     // console.log("HeartRateVariability: " + rng());
  //     var randomValue = rng() * i * 10;
  //     randomDate.setDate(randomDate.getDate() + Math.round(rng()) + 1);
  //     var randomDateStr = randomDate.getUTCFullYear() + "-";
  //     randomDateStr = randomDateStr + (randomDate.getUTCMonth()+1) + "-";
  //     randomDateStr = randomDateStr + randomDate.getUTCDate();
  //     // console.log(randomDateStr);
  //     // console.log(randomValue);
  //     data.push({
  //       date: randomDateStr,
  //       value: randomValue
  //     });
  // }

  // const data = [
  //   {date: '2007-04-23', value: 56.78},
  //   {date: '2007-04-24', value: 57.48},
  //   {date: '2007-04-25', value: 57.96},
  //   {date: '2007-04-26', value: 58.45},
  //   {date: '2007-04-29', value: 57.91},
  //   {date: '2007-05-01', value: 59.15},
  //   {date: '2007-05-02', value: 70.24},
  //   {date: '2007-05-03', value: 64.58},
  //   {date: '2007-05-04', value: 62.45},
  //   {date: '2007-05-07', value: 112.57},
  //   {date: '2007-05-08', value: 105.06},
  //   {date: '2007-05-09', value: 106.88},
  //   {date: '2007-05-09', value: 107.34},
  //   {date: '2007-05-10', value: 108.74},
  //   {date: '2007-05-13', value: 109.36},
  //   {date: '2007-05-14', value: 94.56},
  //   {date: '2007-05-15', value: 84.56},
  //   {date: '2007-05-16', value: 45.6},
  //   {date: '2007-05-17', value: 78.5},
  //   {date: '2007-05-20', value: 111.98},
  //   {date: '2007-05-21', value: 70.24},
  //   {date: '2007-05-22', value: 65.48},
  //   {date: '2007-05-24', value: 75.98},
  //   {date: '2007-05-26', value: 90.75},
  //   {date: '2007-05-28', value: 111.98},
  //   {date: '2007-06-01', value: 99.47},
  //   {date: '2007-06-02', value: 70.24},
  //   {date: '2007-06-03', value: 100.4},
  //   {date: '2007-06-04', value: 100.81},
  //   {date: '2007-06-07', value: 112.57},
  //   {date: '2007-06-08', value: 105.06},
  //   {date: '2007-06-09', value: 106.88},
  //   {date: '2007-06-09', value: 107.34},
  //   {date: '2007-06-10', value: 108.74},
  //   {date: '2007-06-13', value: 109.36},
  //   {date: '2007-06-14', value: 107.52},
  //   {date: '2007-06-15', value: 107.34},
  //   {date: '2007-06-16', value: 45.6},
  //   {date: '2007-06-17', value: 78.5},
  //   {date: '2007-06-20', value: 75.56},
  //   {date: '2007-06-21', value: 70.24},
  //   {date: '2007-06-22', value: 35.48},
  //   {date: '2007-06-24', value: 75.98},
  //   {date: '2007-06-26', value: 90.75},
  //   {date: '2007-06-28', value: 111.98},
  //   {date: '2007-06-29', value: 93.24},
  //   {date: '2007-07-01', value: 99.47},
  //   {date: '2007-07-02', value: 70.24},
  //   {date: '2007-07-03', value: 100.4},
  //   {date: '2007-07-04', value: 100.81},
  //   {date: '2007-07-07', value: 112.57},
  //   {date: '2007-07-08', value: 105.06},
  //   {date: '2007-07-09', value: 106.88},
  //   {date: '2007-07-09', value: 107.34},
  //   {date: '2007-07-10', value: 108.74},
  //   {date: '2007-07-13', value: 109.36},
  //   {date: '2007-07-14', value: 107.52},
  //   {date: '2007-07-15', value: 107.34},
  //   {date: '2007-07-16', value: 45.6},
  //   {date: '2007-07-17', value: 78.5},
  //   {date: '2007-07-20', value: 111.98},
  //   {date: '2007-07-21', value: 70.24},
  //   {date: '2007-07-22', value: 35.48},
  //   {date: '2007-07-24', value: 75.98},
  //   {date: '2007-07-26', value: 90.75},
  //   {date: '2007-07-28', value: 111.98},
  //   {date: '2007-08-01', value: 99.47},
  //   {date: '2007-08-02', value: 70.24},
  //   {date: '2007-08-03', value: 71.56},
  //   {date: '2007-08-04', value: 72.84},
  //   {date: '2007-08-07', value: 75.15},
  //   {date: '2007-08-08', value: 72.56},
  //   {date: '2007-08-09', value: 77.45},
  //   {date: '2007-08-09', value: 81.56},
  //   {date: '2007-08-10', value: 76.45},
  //   {date: '2007-08-13', value: 94.56},
  //   {date: '2007-08-14', value: 107.52},
  //   {date: '2007-08-15', value: 107.34},
  //   {date: '2007-08-16', value: 45.6},
  //   {date: '2007-08-17', value: 78.5},
  //   {date: '2007-08-20', value: 111.98},
  //   {date: '2007-08-21', value: 70.24},
  //   {date: '2007-08-22', value: 35.48},
  //   {date: '2007-08-24', value: 75.98},
  //   {date: '2007-08-26', value: 90.75},
  //   {date: '2007-08-28', value: 111.98},
  // ];

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
