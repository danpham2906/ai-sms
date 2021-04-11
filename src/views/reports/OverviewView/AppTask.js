/* eslint-disable */
import React, { useContext } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Line } from '@reactchartjs/react-chart.js';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';

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
    padding: '0px 10px 20px 10px',
  }
}));

const AppTask = ({ className, ...rest }) => {
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

  const dataLine = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: '',
        data: [7, 4, 3, 5, 2, 3],
        fill: 'start',
        backgroundColor: 'rgb(51, 204, 255, 0.3)',
        borderColor: 'rgba(51, 204, 255, 0.7)',
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
                APP &amp; TASK
                </Typography>
            </Grid>
        </Grid>
        <Grid
          container
        //   justify="space-between"
          spacing={3}
          className={classes.chartContainer}
        >
            <Grid item>
                <Typography
                    color="textSecondary"
                    gutterBottom
                    align="center"
                    variant="h5"
                    >
                    Score
                </Typography>
                <Grid item>
                    <Line data={dataLine} options={optionsLine} height="150px"/>
                </Grid>
            </Grid>
        </Grid>
        <Grid container className={classes.flexSection}>
            <Grid
                item
                className={classes.flexColScroll}
            >
                {[0, 1, 2, 3].map((value) => {
                  const labelId = `checkbox-list-label-${value}`;

                  return (
                    <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={checked.indexOf(value) !== -1}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </ListItemIcon>
                      <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                      {/* <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="comments">
                          <CommentIcon />
                        </IconButton>
                      </ListItemSecondaryAction> */}
                    </ListItem>
                  );
                })}
            </Grid>
        </Grid>
        <Typography
            color="textSecondary"
            variant="body2"
            align="right"
        >
            Assign Tasks &gt;
        </Typography>
      </CardContent>
    </Card>
  );
};

AppTask.propTypes = {
  className: PropTypes.string
};

export default AppTask;
