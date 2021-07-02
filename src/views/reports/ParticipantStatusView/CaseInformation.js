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
    height: 290,
    padding: '0px 3px 0px 5px',
  },
  column: {
    float: 'left',
    width: '50%'
  },
  textAlign: {
    // height: '400px',
    position: 'relative',
    display: 'flex',
    flex: 1,
    'justify-content': 'left',
    'align-items': 'left',
  }
}));

const CaseInformation = ({ className, ...rest }) => {
  const classes = useStyles();
  const participant = useContext(ParticipantContext);

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Grid container
        >
          <Grid
            item
            lg={24}
            // className={classes.title}
          >
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              CASE INFORMATION
            </Typography>
          </Grid>
        </Grid>
        <Grid container
          className={classes.flexSection}
        >
          <Grid item
            className={classes.flexColScroll}
            //   className={classes.textAlign}
            lg={24}
          >
              <Typography
                  color="textSecondary"
                  variant="body1"
              >
                {/* <b>Sentencing Information</b><br/> */}
                <br/>
                Case Status Date: 3<br/>
                Case Type: 1<br/>
                Supervision: Fenon Pose/Use Weapon/FireArm<br/>
                Received Code: 03/22/2020<br/>
                Status: 30 months<br/>
                Charges and Sentence: 30 months<br/>
                * IC Code/Charge:<br/>
                * Sentencing Date:<br/>
                * Sentence Length:<br/>
                * Executed Time:<br/>
                * Executed Comm. Corr.:<br/>
                * Suspended Time:<br/>
                * Probation Time:<br/>
                * Offense Level:<br/>
              </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

CaseInformation.propTypes = {
  className: PropTypes.string
};

export default CaseInformation;
