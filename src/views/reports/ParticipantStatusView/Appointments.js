/* eslint-disable */
import React, { useContext, createRef, useState, useEffect } from 'react';
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
  TextField,
  Button,
  List, ListItem,
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
    height: '100%',
    'overflow-x': 'hidden',
  },
  flexSection: {
    'flex-grow': 1,
    display: 'flex',
    'flex-direction': 'column',
    'min-height': 0,
    height: 360,
    padding: '10px 3px 5px 5px',
  },
  column: {
    float: 'left',
    width: '50%'
  },
  columnLeft: {
    float: 'left',
    width: '35%'
  },
  columnRight: {
    float: 'left',
    width: '65%'
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
  textFieldContainer: {
    'flex-grow': 1,
    padding: '20px 20px 20px 20px',
    margin: '0px 10px 0px 10px',
  },
  textField: {
    width: '100%'
  },
  buttonContainer: {
    'flex-grow': 1,
    margin: '1% 0%',
  },
  buttonSearch: {
    'top': '50%',
    'left': '50%',
    '- ms - transform': 'translate(- 50%, -50%)',
    'transform': 'translate(-50%, -50%)',
  },
}));

const Appointments = ({ className, ...rest }) => {
  const classes = useStyles();
  const participant = useContext(ParticipantContext);

  // const appointmentList = [
  //   { id: 1, name: 'Date and Time:' },
  //   { id: 2, name: 'Note Type:' },
  //   { id: 3, name: 'Status:' },
  // ];

  const appointmentList = [
    'Date and Time',
    'Note Type',
    'Status',
    'Officer',
    'Administrative Hearing',
    'Administrative Assigned Officer',
    'Case Condition Complete',
    'Case Status',
    'Case Supervision Level',
    'Case Type',
    'Court Fact',
    'Drug Test',
    'Email',
    'Field - Employment, Other, Residence',
    'Incarceration',
    'Jail Visit',
    'Mail',
    'Other',
    'Out Of Home Placement',
    'Pre - trial Assessment',
    'Sanction / Incentive / Intervention',
    'Staff Note',
    'Telephone',
    'Text Notification',
    'Violation',
    'Violation Created',
    'Work Release Note',
  ];

  const appointmentListInfo = [
    '07/24/2021',
    'IRAS',
    'Pending',
    'John Roe',
    'Presly Alday',
    'Evalynn Duhart',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
  ];

  const arrLength = appointmentList.length;
  const [appointmentRefs, setAppointmentRefs] = React.useState([]);

  useEffect(() => {
    // console.log("REF");
    setAppointmentRefs(appointmentRefs => (
      Array(arrLength).fill().map((_, i) => appointmentRefs[i] || createRef())
    ));
  }, [arrLength]);

  const handleChangeSearchInput = (event) => {
    console.log(event.target.value);

    var idScroll = -1;
    var prefix = event.target.value;
    appointmentList.map((itemList, id) => {
      if (itemList.startsWith(prefix) && idScroll == -1) {
        idScroll = id;
        console.log(idScroll + " " + itemList);
      }
    });

    if (appointmentRefs[idScroll] != undefined) {
      if (appointmentRefs[idScroll].current != null) {
        console.log("Scroll to " + idScroll);
        if (idScroll > -1 && idScroll < arrLength) {
          appointmentRefs[idScroll].current.scrollIntoView();
        }
      }
    } else {
      appointmentRefs[0].current.scrollIntoView();
    }
  };

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
        <Grid
          container
          spacing={2}
        >
          <Grid item className={classes.textFieldContainer}>
            <TextField
              id="search-input"
              placeholder="Search"
              variant="outlined"
              className={classes.textField}
              onChange={event => handleChangeSearchInput(event)}
            />
          </Grid>
          {/* <Grid item lg={2} className={classes.buttonContainer}>
            <Button variant="contained" color="secondary" className={classes.buttonSearch}>
              SEARCH
            </Button>
          </Grid> */}
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
              <List>
                {appointmentList.map((itemList, id) => (
                  <div className={classes.row}>
                    <div className={classes.columnLeft}>
                      <ListItem ref={appointmentRefs[id]} divider><b>{itemList}</b></ListItem>
                    </div>
                    <div className={classes.columnRight}>
                      <ListItem divider>{appointmentListInfo[id]}</ListItem>
                    </div>
                  </div>
                ))}
              </List>
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
