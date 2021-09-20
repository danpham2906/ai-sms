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
    width: '35%',
    "& li": {
      overflowWrap: 'break-word',
      display: 'block',
    },
  },
  columnRight: {
    float: 'left',
    width: '65%',
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

const Financial = ({ className, ...rest }) => {
  const classes = useStyles();
  const participant = useContext(ParticipantContext);

  const chargeSummaryLeft = [
    'Begin DT',
    'End DT',
    'Case Number',
    'Charge Type',
    'Frequency',
    'Amount',
    'Total',
    'Paid',
  ];

  const chargeSummaryLeftInfo = [
    'N/A',
    'N/A',
    'N/A',
    'N/A',
    'N/A',
    'N/A',
    'N/A',
    'N/A',
  ];

  const chargeSummaryRight = [
    'Total Balance',
    'Current Balance',
    'Pay',
    'Payment Amount',
    'Status',
    'UNC',
    'Memo',
  ];

  const chargeSummaryRightInfo = [
    'N/A',
    'N/A',
    'N/A',
    'N/A',
    'N/A',
    'N/A',
    'Total Balance: $0 until supervision begins (09/01/2021). $25 per week for supervision. Every 8 weeks additional $20 for drug screening cost. Total Balance cannot exceed $225.00',
  ];

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
              FINANCIAL
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
                <ListItem className={classes.sectionTitle}><b>CASE #09202021</b></ListItem>
                <Divider />
                <div className={classes.columnLeft}>
                  {chargeSummaryLeft.map((itemList, id) => (
                    <div className={classes.row}>
                      <div className={classes.column}>
                        <ListItem><b>{itemList}</b></ListItem>
                      </div>
                      <div className={classes.column}>
                        <ListItem>{chargeSummaryLeftInfo[id]}</ListItem>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={classes.columnRight}>
                  {chargeSummaryRight.map((itemList, id) => (
                    <div className={classes.row}>
                      <div className={classes.columnLeft}>
                        <ListItem><b>{itemList}</b></ListItem>
                      </div>
                      <div className={classes.columnRight}>
                        <ListItem>{chargeSummaryRightInfo[id]}</ListItem>
                      </div>
                    </div>
                  ))}
                </div>
              </List>
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
                <ListItem className={classes.sectionTitle}><b>CASE #08242021</b></ListItem>
                <Divider />
                <div className={classes.columnLeft}>
                  {chargeSummaryLeft.map((itemList, id) => (
                    <div className={classes.row}>
                      <div className={classes.column}>
                        <ListItem><b>{itemList}</b></ListItem>
                      </div>
                      <div className={classes.column}>
                        <ListItem>{chargeSummaryLeftInfo[id]}</ListItem>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={classes.columnRight}>
                  {chargeSummaryRight.map((itemList, id) => (
                    <div className={classes.row}>
                      <div className={classes.columnLeft}>
                        <ListItem><b>{itemList}</b></ListItem>
                      </div>
                      <div className={classes.columnRight}>
                        <ListItem>{chargeSummaryRightInfo[id]}</ListItem>
                      </div>
                    </div>
                  ))}
                </div>
              </List>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card >
  );
};

Financial.propTypes = {
  className: PropTypes.string
};

export default Financial;
