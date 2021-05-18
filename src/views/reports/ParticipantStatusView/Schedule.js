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
import CalendarView from './CalendarView';
// import DayPicker from 'react-day-picker';
// import 'react-day-picker/lib/style.css';

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
    padding: '5px 0px 5px 0px',
    // fontFamily: 'Roboto',
    'justify-content': 'center',
    'align-items': 'center',
  }
}));

const Schedule = ({ className, ...rest }) => {
  const classes = useStyles();
  const [value, onChange] = useState(new Date());

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
          <CalendarView />
        </Grid>
        <Box 
          // display="flex"
          // flexWrap="wrap"
          alignContent="flex-end"
          paddingLeft={1}
          paddingRight={1}
          paddingTop={1}
          // m={1}
        >
          <Typography
            color="textSecondary"
            variant="body2"
            align="right"
          >
            Schedule Details &amp; Edit &gt;
          </Typography>
        </Box>
        
      </CardContent>
    </Card>
  );
};

Schedule.propTypes = {
  className: PropTypes.string
};

export default Schedule;
