/* eslint-disable */
import React, { useContext } from 'react';
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
import { ParticipantContext } from '../../../context/ParticipantContext';
// import data from '../../../data/data';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.grey,
    height: 70,
    width: 70,
    margin: '12% 35%',
  },
  avatarContainer: {
    padding: '0px 20px 0px 20px',
  },
  participantName: {
    padding: '18px 20px 15px 20px',
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
    // height: 200,
    padding: '5px 15px 0px 15px',
  },
  column: {
    float: 'left',
    width: '50%'
  },
  title: {
    width: '100%',
    flex: 1,
    margin: '0px 10px',
  },
}));

const PersonalInformation = ({ className, ...rest }) => {
  const classes = useStyles();
  const participant = useContext(ParticipantContext);

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Grid
          container
          // spacing={6}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              // gutterBottom
              variant="h6"
              // className={classes.title}
            >
              OFFENDER SUMMARY
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          className={classes.avatarContainer}
        >
          <Grid item lg={4}>
            <Avatar className={classes.avatar} src='/static/images/avatars/avatar01.png' />
          </Grid>
          <Grid item lg={8}>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h4"
              className={classes.participantName}
            >
              {participant.name}<br></br>
              {participant.street}<br></br>
              {participant.city}, {participant.state}<br></br>
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          className={classes.flexSection}
        >
            <Grid
                item
                // className={classes.flexColScroll}
            >
                <Typography
                    color="textSecondary"
                    variant="body1"
                >
                  <div className={classes.row}>
                    <div className={classes.column}>
                      <b>Physical Profile</b><br/>
                      Date of Birth: 02/05/1986<br/>
                      Sex: 230 lbs.<br/>
                      Race: Brown<br/>
                      Height: Male<br/>
                      Weight: 6 ft. 03 in.<br/>
                      Alerts and Warnings: Brown
                    </div>
                    <div className={classes.column}>
                      <b>Parole Info</b><br/>
                      Admission Date: 04/27/2020<br/>
                      Parole Date: 01/10/2021<br/>
                      Last Paroled Date:<br/>
                      Discharge Date: 01/10/2022
                    </div>
                  </div>
                </Typography>
            </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

PersonalInformation.propTypes = {
  className: PropTypes.string
};

export default PersonalInformation;
