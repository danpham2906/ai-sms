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
import PieChart from '../../../charts/PieChart';

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
    // height: 290,
    padding: '0px 3px 0px 5px',
  },
  column: {
    float: 'left',
    width: '50%'
  },
  textAlign: {
    position: 'relative',
    display: 'flex',
    flex: 1,
    'justify-content': 'left',
    'align-items': 'left',
  },
  pieChart: {
    padding: '10px 0px 0px 10px',
    position: 'relative',
    top: '50%',
    left: '0%',
  },
  pieChartText: {
    position: 'absolute',
    top: '50%',
    // left: '50%',
    transform: 'translate(210%,-50%)'
  },
  mainContent: {
    padding: '10px 5px 5px 10px',
  },
  textCenter: {
    textAlign: 'center!important',
  }
}));

const CaseInformation = ({ className, ...rest }) => {
  const classes = useStyles();
  const participant = useContext(ParticipantContext);

  const dataLine = [];
  var randomDate = new Date('2020-01-29');
  for (let i = 0; i < 3; i++) {
    var randomValue = Math.random() * i * 10;
    randomDate.setDate(randomDate.getDate() + Math.round(Math.random()) + 1);
    var randomDateStr = randomDate.getUTCFullYear() + "-";
    randomDateStr = randomDateStr + (randomDate.getUTCMonth() + 1) + "-";
    randomDateStr = randomDateStr + randomDate.getUTCDate();
    // console.log(randomDateStr);
    // console.log(randomValue);
    dataLine.push({
      date: randomDateStr,
      value: randomValue
    });
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
            // className={classes.flexColScroll}
            className={classes.mainContent}
            lg={24}
          >
            <Typography
              color="textSecondary"
              variant="body1"
            >
              <div className={classes.row}>
                <div className={classes.column}>
                  Case Status Date: <br />
                  Case Type: <br />
                  Supervision: <br />
                  <div className={classes.pieChart}>
                    <PieChart
                      data={dataLine}
                      width={200}
                      height={200}
                    />
                    <div className={classes.pieChartText}>
                      <div className={classes.textCenter}><b>HIGH</b></div>
                      <div className={classes.textCenter}>{`${Math.ceil(dataLine[1].value)}`}</div>
                    </div>
                  </div>
                </div>
                <div className={classes.column}>
                  Received Code: <br />
                  Status: <br />
                  Charges and Sentence: <br />
                  * IC Code/Charge:<br />
                  * Sentencing Date:<br />
                  * Sentence Length:<br />
                  * Executed Time:<br />
                  * Executed Comm. Corr.:<br />
                  * Suspended Time:<br />
                  * Probation Time:<br />
                  * Offense Level:<br />
                </div>
              </div>
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
