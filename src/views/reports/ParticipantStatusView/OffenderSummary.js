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
  makeStyles,
  List, ListItem,
  Divider,
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
    height: '100%',
    'overflow-x': 'hidden',
  },
  flexSection: {
    'flex-grow': 1,
    display: 'flex',
    'flex-direction': 'column',
    'min-height': 0,
    // height: 200,
    // padding: '5px 15px 0px 15px',
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

  const offenderSummaryLeft = [
    'Date of Birth',
    'Sex',
    'Race',
    'Height',
    'Weight',
  ];

  const offenderSummaryLeftInfo = [
    '02/05/1986',
    'Male',
    'White',
    '6 ft. 03 in.',
    '230 lbs.',
  ];

  const offenderSummaryRight = [
    'Admission Date',
    'Parole Date',
    'Last Paroled Date',
    'Discharge Date',
    'Alert and Warnings',
  ];

  const offenderSummaryRightInfo = [
    '04/27/2020',
    '01/10/2021',
    '01/10/2021',
    '01/10/2022',
    'Violent offender',
  ];

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
              {participant.name}<br/>3223 Maple Lane<br/>Huntsville, Alabama
            </Typography>
          </Grid>
        </Grid>
        <Grid
          // container
          className={classes.flexSection}
        >
          {/* <Grid
            item
          // className={classes.flexColScroll}
          > */}
          <Typography
            color="textSecondary"
            variant="body1"
          >
            <div className={classes.row}>
              <div className={classes.column}>
                <List>
                  <ListItem><b>PHYSICAL PROFILE</b></ListItem>
                  <Divider />
                  {offenderSummaryLeft.map((itemList, id) => (
                    <div className={classes.row}>
                      <div className={classes.column}>
                        <ListItem><b>{itemList}</b></ListItem>
                      </div>
                      <div className={classes.column}>
                        <ListItem>{offenderSummaryLeftInfo[id]}</ListItem>
                      </div>
                    </div>
                  ))}
                </List>
              </div>
              <div className={classes.column}>
                <List>
                  <ListItem><b>PAROLE INFO</b></ListItem>
                  <Divider />
                  {offenderSummaryRight.map((itemList, id) => (
                    <div className={classes.row}>
                      <div className={classes.column}>
                        <ListItem><b>{itemList}</b></ListItem>
                      </div>
                      <div className={classes.column}>
                        <ListItem>{offenderSummaryRightInfo[id]}</ListItem>
                      </div>
                    </div>
                  ))}
                </List>
              </div>
            </div>
          </Typography>
          {/* </Grid> */}
        </Grid>
      </CardContent>
    </Card>
  );
};

PersonalInformation.propTypes = {
  className: PropTypes.string
};

export default PersonalInformation;
