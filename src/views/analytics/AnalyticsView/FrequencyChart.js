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

const FrequencyChart = forwardRef (({ className, ...rest }, ref) => {
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
    let randomValue = Math.round(rng() * i + 1);
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
                  VISITED LOCATIONS BY FREQUENCY
                </Typography>
            </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          className={classes.chartContainer}
        >
            <HorizontalBarChart
              ref={horizontalBarRef}
              data={data}
              subData={subData}
              width={220}
              height={400}
              color="OliveDrab"
            />
        </Grid>
      </CardContent>
    </Card>
  );
});

FrequencyChart.propTypes = {
  className: PropTypes.string
};

export default FrequencyChart;
