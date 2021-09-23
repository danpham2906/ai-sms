/* eslint-disable */
import React, { useContext, useState } from 'react';
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
  Collapse,
  Button,
} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
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
  },
}));

const Financial = ({ className, ...rest }) => {
  const classes = useStyles();
  const participant = useContext(ParticipantContext);
  const [open, setOpen] = useState(false);

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

  const handleClick = () => {
    setOpen(!open);
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
            justify="start"
            lg={24}
            style={{ width: '100%' }}
          >
            <Button
              style={{ width: '100%' }}
              onClick={handleClick}
            >
              <Typography
                color="textSecondary"
                variant="h6"
                style={{ display: "flex", width: "6vw" }}
              >
                FINANCIAL
              </Typography>

              <div style={{ justifyContent: "flex-end", width: "80vw", }}></div>

              {open ? <ExpandMore className={classes.collapseButton} /> : <ExpandLess className={classes.collapseButton} />}
            </Button>
          </Grid>
        </Grid>


        <Collapse in={open} timeout="auto" unmountOnExit>
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
                  <ListItem className={classes.sectionTitle}><b>CASE #07072021</b></ListItem>
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
        </Collapse>
      </CardContent>
    </Card >
  );
};

Financial.propTypes = {
  className: PropTypes.string
};

export default Financial;
