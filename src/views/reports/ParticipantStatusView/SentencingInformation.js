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
    margin: '20% 35%',
  },
  avatarContainer: {
    padding: '20px 20px 20px 20px',
  },
  participantName: {
    padding: '27px 20px 0px 20px',
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
    height: 200,
    padding: '15px 3px 5px 5px',
  },
  column: {
    float: 'left',
    width: '50%'
  },
  textAlign: {
    height: '400px',
    position: 'relative',
    display: 'flex',
    flex: 1,
    'justify-content': 'center',
    'align-items': 'center',
  }
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
        <Grid container
          // className={classes.flexSection}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              {/* BRACELET STATUS */}
              SENTENCING INFORMATION
            </Typography>
          </Grid>
          <Grid item
              // className={classes.flexColScroll}
              // className={classes.textAlign}
          >
              <Typography
                  color="textSecondary"
                  variant="body1"
              >
                {/* <b>Sentencing Information</b><br/> */}
                <br/>
                Class: 3<br/>
                Count: 1<br/>
                Offense: Fenon Pose/Use Weapon/FireArm<br/>
                Custody Date: 03/22/2020<br/>
                Sentence: 30 months<br/>
                County: Cook<br/>
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
