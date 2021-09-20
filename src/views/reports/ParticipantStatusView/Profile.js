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
    height: 100,
    width: 100,
    margin: '8% auto',
  },
  container: {
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
  },
  column: {
    float: 'left',
    width: '50%',
    "& li": {
      overflowWrap: 'break-word',
      display: 'block',
    },
  },
  columnLeft: {
    float: 'left',
    width: '40%',
    "& li": {
      overflowWrap: 'break-word',
      display: 'block',
    },
  },
  columnRight: {
    float: 'left',
    width: '60%',
    "& li": {
      overflowWrap: 'break-word',
      display: 'block',
    },
  },
  row: {
    display: 'flex',
  },
  sectionTitle: {
    color: theme.palette.text.sectionTitle,
  },
}));

const Profile = ({ className, ...rest }) => {
  const classes = useStyles();
  const participant = useContext(ParticipantContext);

  const demographic = [
    'Client ID #',
    'First Name',
    'Last Name',
    'Date of Birth',
    'Gender',
    'Race',
    'Probation Officer',
    'Case Manager',
    'Other Details',
  ];

  const demographicInfo = [
    '08252021',
    'David',
    'Smith',
    '02/05/1986',
    'Male',
    'White',
    'N/A',
    'Steve Pepper',
    'Exclusion Zone: Not within 150ft of any establishment whose primary business is sales of alcohol & tobacco (liquor store) for than 5 minutes.',
  ];

  const address = [
    'Address',
    'Consent to Search',
    'Residential Property',
    'Neighborhood Issues',
    'Travel Limitations',
  ];

  const addressInfo = [
    'Spring Garden Apartments: 350 Teal Rd, Lafayette, IN 47909',
    'Yes',
    'Rent',
    'N/A',
    'Cannot leave the county without prior clearance from Case Manager, must be home between the hours of 8PM-6AM EST',
  ];

  const education = [
    'Education Level',
  ];

  const educationInfo = [
    'GED Obtained',
  ];

  const automobile = [
    'License Status',
  ];

  const automobileInfo = [
    'Suspended both requirements are met — fulfill supervision length & payment of all state/county fees & fines',
  ]

  const employment = [
    'Job Title/ Ocupation',
    'Staffing Agency',
    'Employer Name',
    'Employment Status',
    'Shift',
    'Travel Time',
    'Length',
    'Terminated',
    'Date',
    'Hourly Wages',
    'Annual Salary',
  ];

  const employmentInfo = [
    'Line Cook/Service',
    'None',
    'Dairy Queen',
    'Full-time',
    'Day',
    '15 minute walk',
    '1 year',
    'No',
    '09/15/2021',
    '$10',
    '$22,000',
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
              variant="h6"
            >
              PROFILE
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          className={classes.container}
        >
          <Grid item lg={4}>
            <Avatar className={classes.avatar} src='/static/images/avatars/avatar01.png' />
            <Typography
              color="textSecondary"
              variant="body1"
            >
              <List>
                <ListItem className={classes.sectionTitle}><b>DEMOGRAPHIC</b></ListItem>
                <Divider />
                {demographic.map((itemList, id) => (
                  <div className={classes.row}>
                    <div className={classes.columnLeft}>
                      <ListItem><b>{itemList}</b></ListItem>
                    </div>
                    <div className={classes.columnRight}>
                      <ListItem>{demographicInfo[id]}</ListItem>
                    </div>
                  </div>
                ))}
              </List>
            </Typography>
          </Grid>

          <Grid item lg={5}>
            <Typography
              color="textSecondary"
              variant="body1"
            >
              <List>
                <ListItem className={classes.sectionTitle}><b>ADDRESS</b></ListItem>
                <Divider />
                {address.map((itemList, id) => (
                  <div className={classes.row}>
                    <div className={classes.columnLeft}>
                      <ListItem><b>{itemList}</b></ListItem>
                    </div>
                    <div className={classes.columnRight}>
                      <ListItem>{addressInfo[id]}</ListItem>
                    </div>
                  </div>
                ))}
              </List>

              <List className={classes.list}>
                <ListItem className={classes.sectionTitle}><b>EDUCATION</b></ListItem>
                <Divider />
                {education.map((itemList, id) => (
                  <div className={classes.row}>
                    <div className={classes.columnLeft}>
                      <ListItem><b>{itemList}</b></ListItem>
                    </div>
                    <div className={classes.columnRight}>
                      <ListItem>{educationInfo[id]}</ListItem>
                    </div>
                  </div>
                ))}
              </List>

              <List className={classes.list}>
                <ListItem className={classes.sectionTitle}><b>AUTOMOBILE</b></ListItem>
                <Divider />
                {automobile.map((itemList, id) => (
                  <div className={classes.row}>
                    <div className={classes.columnLeft}>
                      <ListItem><b>{itemList}</b></ListItem>
                    </div>
                    <div className={classes.columnRight}>
                      <ListItem>{automobileInfo[id]}</ListItem>
                    </div>
                  </div>
                ))}
              </List>
            </Typography>
          </Grid>

          <Grid item lg={3}>
            <Typography
              color="textSecondary"
              variant="body1"
            >
              <List>
                <ListItem className={classes.sectionTitle}><b>EMPLOYMENT</b></ListItem>
                <Divider />
                {employment.map((itemList, id) => (
                  <div className={classes.row}>
                    <div className={classes.columnLeft}>
                      <ListItem><b>{itemList}</b></ListItem>
                    </div>
                    <div className={classes.columnRight}>
                      <ListItem>{employmentInfo[id]}</ListItem>
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

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;
