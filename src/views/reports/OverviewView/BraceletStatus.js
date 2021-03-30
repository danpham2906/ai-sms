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
    padding: '0px 10px 10px 10px',
  },
  lineChartContainer: {
    padding: '50px 10px 20px 0px',
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
    cutoutPercentage: 80,
    layout: { padding: '20px 0px 20px 0px' },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
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

  const dataLine = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: '',
        data: [7, 4, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  }
  
  const optionsLine = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
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
                gutterBottom
                align="center"
                variant="h5"
                >
                Bracelet Battery
            </Typography>
            <Doughnut
                data={data}
                options={options}
                width='250px'
            />
        </Grid>
        <div className={classes.lineChartContainer}>
            <Grid item>
                <Line data={dataLine} options={optionsLine}/>
            </Grid>
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
