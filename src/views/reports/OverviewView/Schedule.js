/* eslint-disable */
import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
    Avatar,
    Box,
    Card,
    CardContent,
    Grid,
    Typography,
    colors,
    makeStyles
} from '@material-ui/core';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.green[600],
    height: 56,
    width: 56
  },
  differenceIcon: {
    color: colors.green[900]
  },
  differenceValue: {
    color: colors.green[900],
    marginRight: theme.spacing(1)
  },
  dayPicker: {
    padding: '5px 10px 10px 50px',
    fontFamily: 'Roboto',
  }
}));

const Schedule = ({ className, ...rest }) => {
  const classes = useStyles();

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
              SCHEDULE AND DEADLINES
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          className={classes.dayPicker}
        >
          <DayPicker />
        </Grid>
        <Typography
          color="textSecondary"
          variant="body2"
          align="right"
        >
          Schedule Details &amp; Edit &gt;
        </Typography>
      </CardContent>
    </Card>
  );
};

Schedule.propTypes = {
  className: PropTypes.string
};

export default Schedule;
