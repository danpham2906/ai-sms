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
  textAlign: {
    position: 'relative',
    display: 'flex',
    flex: 1,
    'justify-content': 'left',
    'align-items': 'left',
  },
  pieChart: {
    position: 'relative',
    top: '50%',
    left: '0%',
  },
  pieChartText: {
    position: 'absolute',
    top: '50%',
    transform: 'translate(210%,-50%)',
  },
  mainContent: {
  },
  textCenter: {
    textAlign: 'center!important',
  }
}));

const CourtOrders = ({ className, ...rest }) => {
  const classes = useStyles();
  const participant = useContext(ParticipantContext);

  const courtOrders = [
    'Court Order #',
    'Date of Entry',
    'Report within Days',
    'Referring Court',
    'Length/ Conditions',
    'Program',
    'Case Number #',
    'Status/ Progress',
    'Child/ Children',
    'Comments',
  ];

  const courtOrdersInfo = [
    'N/A',
    'N/A',
    'N/A',
    'N/A',
    'N/A',
    'N/A',
    'N/A',
    'N/A',
    'N/A',
    "-License Suspended until fines/fees paid and supervision completed: " + 
    "Two 12-Step Meeting per week; 1 Community Service activity each month; Must attend in-person case manager meeting and submit drug screen every 8 weeks; " +
    "Cannot be outside of home between the hours of 8PM-6PM; " +
    "Cannot leave Tippacanoe County; " +
    "Cannot be within 150ft of liquor establishment for more than 5 minutes. " +
    "**Need to meet with field officer 2x/month",
  ];

  const courtOrdersLeft = [
    'Court Order #',
    'Date of Entry',
    'Report within Days',
    'Referring Court',
    'Length/ Conditions',
    'Program',
  ];

  const courtOrdersLeftInfo = [
    'N/A',
    'N/A',
    'N/A',
    'N/A',
    'N/A',
    'N/A',
  ];

  const courtOrdersRight = [
    'Case Number #',
    'Status/ Progress',
    'Child/ Children',
    'Comments',
  ];

  const courtOrdersRightInfo = [
    'N/A',
    'N/A',
    'N/A',
    "-License Suspended until fines/fees paid and supervision completed: " + 
    "Two 12-Step Meeting per week; 1 Community Service activity each month; Must attend in-person case manager meeting and submit drug screen every 8 weeks; " +
    "Cannot be outside of home between the hours of 8PM-6PM; " +
    "Cannot leave Tippacanoe County; " +
    "Cannot be within 150ft of liquor establishment for more than 5 minutes. " +
    "**Need to meet with field officer 2x/month",
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
              COURT ORDERS
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
              {/* <List>
                <div className={classes.column}>
                  {courtOrdersLeft.map((itemList, id) => (
                    <div className={classes.row}>
                      <div className={classes.columnLeft}>
                        <ListItem><b>{itemList}</b></ListItem>
                      </div>
                      <div className={classes.columnRight}>
                        <ListItem>{courtOrdersLeftInfo[id]}</ListItem>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={classes.column}>
                  {courtOrdersRight.map((itemList, id) => (
                    <div className={classes.row}>
                      <div className={classes.columnLeft}>
                        <ListItem><b>{itemList}</b></ListItem>
                      </div>
                      <div className={classes.columnRight}>
                        <ListItem>{courtOrdersRightInfo[id]}</ListItem>
                      </div>
                    </div>
                  ))}
                </div>
              </List> */}

              <List>
                  {courtOrders.map((itemList, id) => (
                    <div className={classes.row}>
                      <div className={classes.columnLeft}>
                        <ListItem><b>{itemList}</b></ListItem>
                      </div>
                      <div className={classes.columnRight}>
                        <ListItem>{courtOrdersInfo[id]}</ListItem>
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

CourtOrders.propTypes = {
  className: PropTypes.string
};

export default CourtOrders;
