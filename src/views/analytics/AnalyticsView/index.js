/* eslint-disable */
import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Map from './Map';
import DurationChart from './DurationChart';
import FrequencyChart from './FrequencyChart';
import MileageDuration from './MileageDuration';
import HeartRateVariability from './HeartRateVariability';
import BraceletBatteryLifeHistory from './BraceletBatteryLifeHistory';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  firstRow: {
    height: '300px',
  }
}));

const AppTaskView = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="AppTask"
    >
      {/* <GridList maxWidth={false} cols={3}> */}
      <Container maxWidth={false}>
        <Grid
          container
          spacing={1}
          // direction="row"
        >
          <Grid
            item
            lg={8}
            sm={6}
            xl={8}
            xs={12}
          >
            <Map />
          </Grid>
          <Grid
            item
            lg={2}
            sm={6}
            xl={2}
            xs={12}
          >
            <DurationChart />
          </Grid>
          <Grid
            item
            lg={2}
            sm={6}
            xl={2}
            xs={12}
          >
            <FrequencyChart />
          </Grid>

          <Grid
            item
            lg={12}
            sm={6}
            xl={12}
            xs={12}
          >
            <MileageDuration />
          </Grid>
          <Grid
            item
            lg={12}
            sm={6}
            xl={12}
            xs={12}
          >
            <HeartRateVariability />
          </Grid>
          <Grid
            item
            lg={12}
            sm={6}
            xl={12}
            xs={12}
          >
            <BraceletBatteryLifeHistory />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default AppTaskView;
