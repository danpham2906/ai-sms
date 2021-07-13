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
    height: 200,
    padding: '15px 3px 5px 5px',
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
  mainContent: {
    flexGrow: 1,
  }
}));

const Employment = ({ className, ...rest }) => {
  const classes = useStyles();
  const participant = useContext(ParticipantContext);

  const employmentList = [
    'Employer name: ',
    'Address: ',
    'Start Date: ',
    'End Date: ',
    'Salary: ',
  ];

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
              EMPLOYMENT
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item
          // className={classes.flexColScroll}
            className={classes.mainContent}
          >
            <Typography
              color="textSecondary"
              variant="body1"
            >
              <List
              >
                {employmentList.map((itemList, id) => (
                  <ListItem divider>{itemList}</ListItem>
                ))}
              </List>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

Employment.propTypes = {
  className: PropTypes.string
};

export default Employment;
