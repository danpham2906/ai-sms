/* eslint-disable */
import React, { useContext } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';

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
    // 'overflow-y': 'hidden'
  },
  flexSection: {
    'flex-grow': 1,
    display: 'flex',
    'flex-direction': 'column',
    'min-height': 0,
    height: 370,
    padding: '20px 10px 20px 10px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const TimelineLog = ({ className, ...rest }) => {
  const classes = useStyles();
  const Theme = createMuiTheme({
    overrides: {
      MuiTimelineItem: {
        missingOppositeContent: {
          "&:before": {
            display: "none"
          }
        }
      }
    }
  });

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
                TIMELINE &amp; LOG
                </Typography>
            </Grid>
        </Grid>
        <Grid container className={classes.flexSection}>
            <Grid
                item
                className={classes.flexColScroll}
            >
              <ThemeProvider theme={Theme}>
                <Timeline align="left">
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot>
                        <FastfoodIcon />
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      {/* <Paper elevation={3} className={classes.paper}> */}
                        <Typography variant="h6" component="h1">
                          Note Added
                        </Typography>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                      {/* </Paper> */}
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot color="primary">
                        <LaptopMacIcon />
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                          Code
                        </Typography>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                      </Paper>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot color="primary" variant="outlined">
                        <HotelIcon />
                      </TimelineDot>
                      <TimelineConnector className={classes.secondaryTail} />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                          Sleep
                        </Typography>
                        <Typography>Because you need rest</Typography>
                      </Paper>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot color="secondary">
                        <RepeatIcon />
                      </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent>
                      <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                          Repeat
                        </Typography>
                        <Typography>Because this is the life you love!</Typography>
                      </Paper>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot>
                        <FastfoodIcon />
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                          Eat
                        </Typography>
                        <Typography>Because you need strength</Typography>
                      </Paper>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot color="primary">
                        <LaptopMacIcon />
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                          Code
                        </Typography>
                        <Typography>Because it&apos;s awesome!</Typography>
                      </Paper>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot color="primary" variant="outlined">
                        <HotelIcon />
                      </TimelineDot>
                      <TimelineConnector className={classes.secondaryTail} />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                          Sleep
                        </Typography>
                        <Typography>Because you need rest</Typography>
                      </Paper>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot color="secondary">
                        <RepeatIcon />
                      </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent>
                      <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                          Repeat
                        </Typography>
                        <Typography>Because this is the life you love!</Typography>
                      </Paper>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </ThemeProvider>
            </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

TimelineLog.propTypes = {
  className: PropTypes.string
};

export default TimelineLog;
