/* eslint-disable */
import React, { useContext } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import LineChart from './LineChart';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  flexColScroll: {
    'flex-grow': 1,
    overflow: 'scroll',
    'min-height': '100%',
    height:'100%',
    'overflow-x': 'hidden',
    'list-style-type': 'none !important',
  },
  flexSection: {
    'flex-grow': 1,
    display: 'flex',
    'flex-direction': 'column',
    'min-height': 0,
    height: 150,
    padding: '0px 3px 20px 5px',
  },
  chartContainer: {
    padding: '0px 20px 20px 0px',
  },
  lineChart: {
    padding: '0px 20px 20px 0px',
  }
}));

const BraceletBatteryLifeHistory = ({ className, ...rest }) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const data = [];
  for (let i = 0; i < 20; i++) {
      const value = Math.floor(Math.random() * i + 3);
      data.push({
        label: i,
        value,
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
                  BRACELET BATTERY LIFE HISTORY
                </Typography>
            </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          className={classes.chartContainer}
        >
            <LineChart data={data} width={1500} height={120} className={classes.lineChart} color="Turquoise"/>
        </Grid>
      </CardContent>
    </Card>
  );
};

BraceletBatteryLifeHistory.propTypes = {
  className: PropTypes.string
};

export default BraceletBatteryLifeHistory;
