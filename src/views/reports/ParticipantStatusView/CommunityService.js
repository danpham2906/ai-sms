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
  List, ListItem, Divider,
} from '@material-ui/core';
import { ParticipantContext } from '../../../context/ParticipantContext';
// import data from '../../../data/data';
import PieChart from '../../../charts/PieChart';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  container: {
    padding: '0px 20px 0px 20px',
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

const CommunityService = ({ className, ...rest }) => {
  const classes = useStyles();
  const participant = useContext(ParticipantContext);

  const status = [
    'Status',
  ];

  const statusInfo = [
    'Active',
  ];

  const dataLine = [];
  var randomDate = new Date('2020-01-29');
  for (let i = 0; i < 2; i++) {
    randomDate.setDate(randomDate.getDate() + Math.round(Math.random()) + 1);
    var randomDateStr = randomDate.getUTCFullYear() + "-";
    randomDateStr = randomDateStr + (randomDate.getUTCMonth() + 1) + "-";
    randomDateStr = randomDateStr + randomDate.getUTCDate();
    if (i == 0) {
      dataLine.push({
        date: randomDateStr,
        value: 26
      });
    } else {
      var randomValue = Math.random() * i * 10;
      dataLine.push({
        date: randomDateStr,
        value: 7
      });
    }
  }

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
          >
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              COMMUNITY SERVICE
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          className={classes.container}
        >
          <Grid item lg={12}>
            <Typography
              color="textSecondary"
              variant="body1"
            >
              <List>
                  {status.map((itemList, id) => (
                    <div className={classes.row}>
                      <div className={classes.columnLeft}>
                        <ListItem><b>{itemList}</b></ListItem>
                      </div>
                      <div className={classes.columnRight}>
                        <ListItem>{statusInfo[id]}</ListItem>
                      </div>
                    </div>
                  ))}
              </List>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card >
  );
};

CommunityService.propTypes = {
  className: PropTypes.string
};

export default CommunityService;
