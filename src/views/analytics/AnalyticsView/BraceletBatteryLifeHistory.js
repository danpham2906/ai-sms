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
import LineChart from './LineChartDemo';
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
    height: 200,
  },
  lineChart: {
    padding: '0px 20px 20px 0px',
  }
}));

const BraceletBatteryLifeHistory = ({ className, range, ...rest }) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);
  const [newRange, setNewRange] = useState(range);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  useEffect(() => {
    setNewRange(range);
  }, null);

  const data = [];
  let randomDate = new Date('2020-01-29');
  let nextRandomDate = new Date('2020-01-30');
  for (let i = 0; i < 100; i++) {
      let rng = seedrandom(nextRandomDate.toLocaleString());
      // console.log("BraceletBatteryLifeHistory: " + rng());
      var randomValue = rng() * i;
      randomDate.setDate(randomDate.getDate() + Math.round(rng()) + 1);
      nextRandomDate.setDate(nextRandomDate.getDate() + Math.round(rng()) + 1);
      var randomDateStr = randomDate.getUTCFullYear() + "-";
      randomDateStr = randomDateStr + (randomDate.getUTCMonth()+1) + "-";
      randomDateStr = randomDateStr + randomDate.getUTCDate();
      // console.log(randomDateStr);
      // console.log(randomValue);
      data.push({
        date: randomDateStr,
        value: randomValue
      });
  }

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
                  BRACELET BATTERY LIFE HISTORY
                </Typography>
            </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          className={classes.chartContainer}
        >
            <LineChart
              data={data}
              range={newRange}
              width={1600}
              height={170}
              className={classes.lineChart}
              color="Turquoise"/>
        </Grid>
      </CardContent>
    </Card>
  );
};

BraceletBatteryLifeHistory.propTypes = {
  className: PropTypes.string
};

export default BraceletBatteryLifeHistory;
