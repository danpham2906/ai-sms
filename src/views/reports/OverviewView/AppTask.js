/* eslint-disable */
import React, { useContext } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Line } from '@reactchartjs/react-chart.js';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
  makeStyles,
  TextField,
  Button
} from '@material-ui/core';

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
    padding: '0px 10px 20px 10px',
  }
}));

const AppTask = ({ className, ...rest }) => {
  const classes = useStyles();

  const dataLine = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: '',
        data: [7, 4, 3, 5, 2, 3],
        fill: 'start',
        backgroundColor: 'rgb(51, 204, 255, 0.3)',
        borderColor: 'rgba(51, 204, 255, 0.7)',
      },
    ],
  }
  
  const optionsLine = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
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
                APP &amp; TASK
                </Typography>
            </Grid>
        </Grid>
        <Grid
          container
        //   justify="space-between"
          spacing={3}
          className={classes.chartContainer}
        >
            <Grid item>
                <Typography
                    color="textSecondary"
                    gutterBottom
                    align="center"
                    variant="h5"
                    >
                    Score
                </Typography>
                <Grid item>
                    <Line data={dataLine} options={optionsLine} height="150px"/>
                </Grid>
            </Grid>
        </Grid>
        <Grid container className={classes.flexSection}>
            <Grid
                item
                className={classes.flexColScroll}
            >
                <Typography
                    color="textSecondary"
                    variant="body1"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
            </Grid>
        </Grid>
        <Typography
            color="textSecondary"
            variant="body2"
            align="right"
        >
            Assign Tasks &gt;
        </Typography>
      </CardContent>
    </Card>
  );
};

AppTask.propTypes = {
  className: PropTypes.string
};

export default AppTask;
