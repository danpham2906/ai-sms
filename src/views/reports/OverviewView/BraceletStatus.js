/* eslint-disable */
import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Doughnut, Line } from '@reactchartjs/react-chart.js';
import {
    Avatar,
    Box,
    Card,
    CardContent,
    Grid,
    Typography,
    colors,
    makeStyles,
    useTheme
} from '@material-ui/core';
import BatteryAlertIcon from '@material-ui/icons/BatteryAlert';
// import BarChart from './BarChart';
import LineChart from '../../../charts/LineChart';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.red[600],
    height: 35,
    width: 35
  },
  differenceIcon: {
    color: colors.red[600]
  },
  differenceValue: {
    color: colors.red[600],
    marginRight: theme.spacing(1)
  },
  donutChartContainer: {
    padding: '0px 0px 0px 10px',
    // flex: 1,
    // flexDirection: 'row',
    alignItems: 'center'
  },
  donutChartText: {
    padding: '10px 0px 20px 0px',
  },
  lineChartContainer: {
    padding: '30px 10px 0px 0px',
    // flex: 1,
    // align: 'center',
    margin: 'auto',
    // height: '300px',
  },
  lineChart: {
    // padding: '0px 10px 10px 0px',
    height: '200px',
    // marginLeft: 'auto',
    // marginRight: 'auto',
  }
}));

const BraceletStatus = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [63, 100-63],
        backgroundColor: [
          colors.indigo[500],
        //   colors.red[600],
        //   colors.orange[600]
        ],
        borderWidth: 8,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white
      }
    ],
    labels: ['Battery', '']
  };

  const options = {
    animation: false,
    cutoutPercentage: 70,
    layout: { padding: '10px 0px 10px 0px' },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: false,
    tooltips: {
      backgroundColor: theme.palette.background.default,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  // const dataLine = {
  //   labels: ['1', '2', '3', '4', '5', '6'],
  //   datasets: [
  //     {
  //       label: '',
  //       data: [7, 4, 3, 5, 2, 3],
  //       fill: false,
  //       backgroundColor: 'rgb(255, 99, 132)',
  //       borderColor: 'rgba(255, 99, 132, 0.2)',
  //     },
  //   ],
  // }
  
  // const optionsLine = {
  //   scales: {
  //     yAxes: [
  //       {
  //         ticks: {
  //           beginAtZero: true,
  //         },
  //       },
  //     ],
  //   },
  // }

  const dataLine = [];
  var randomDate = new Date('2020-01-29');
  for (let i = 0; i < 20; i++) {
      var randomValue = Math.random() * i * 10;
      randomDate.setDate(randomDate.getDate() + Math.round(Math.random()) + 1);
      var randomDateStr = randomDate.getUTCFullYear() + "-";
      randomDateStr = randomDateStr + (randomDate.getUTCMonth()+1) + "-";
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
        <Grid
          container
          justify="space-between"
          spacing={3}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              BRACELET STATUS
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <BatteryAlertIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Grid
          container
          justify="space-between"
          spacing={3}
          className={classes.donutChartContainer}
        >
          <Grid item>
            <Typography
                color="textSecondary"
                // gutterBottom
                align="center"
                variant="h5"
                className={classes.donutChartText}
            >
                Bracelet Battery
            </Typography>
            <Doughnut
                data={data}
                options={options}
                width={230}
                height={180}
            />
        </Grid>
        <div className={classes.lineChartContainer}>
            {/* <Grid item> */}
                {/* <Line data={dataLine} options={optionsLine}/> */}
                <LineChart
                  data={dataLine}
                  width={320}
                  height={250}
                  className={classes.lineChart}
                  color="LightCoral"
                  tickLength={75}
                />
            {/* </Grid> */}
        </div>
        </Grid>
      </CardContent>
    </Card>
  );
};

BraceletStatus.propTypes = {
  className: PropTypes.string
};

export default BraceletStatus;
