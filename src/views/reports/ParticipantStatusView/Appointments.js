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
    height: 150,
    padding: '0px 3px 5px 5px',
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
  },
  title: {
    // width: '100%',
    flex: 1,
    margin: '0px 10px',
  },
}));

const Appointments = ({ className, ...rest }) => {
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
              APPOINTMENTS
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
                CASE NOTE<br/>
                Date and Time: 3<br/>
                Note Type: 1<br/>
                Status: Fenon Pose/Use Weapon/FireArm<br/>
                Officer: 03/22/2020<br/>
                Case Management: 30 months<br/>
                Intake Note: 30 months<br/>
                IRAS:<br/>
                Administrative Hearing:<br/>
                Administrative Assigned Officer:<br/>
                Case Condition Complete:<br/>
                Case Status:<br/>
                Case Supervision Level:<br/>
                Case Type:<br/>
                Court Fact:<br/>
                Drug Test:<br/>
                Email:<br/>
                Field-Employment, Other, Residence:<br/>
                Incarceration:<br/>
                Jail Visit:<br/>
                Mail:<br/>
                Other:<br/>
                Out Of Home Placement:<br/>
                Pre-trial Assessment:<br/>
                Sanction/Incentive/Intervention:<br/>
                Staff Note:<br/>
                Telephone:<br/>
                Text Notification:<br/>
                Violation:<br/>
                Violation Created:<br/>
                Work Release Note:<br/>
              </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

Appointments.propTypes = {
  className: PropTypes.string
};

export default Appointments;
