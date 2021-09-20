/* eslint-disable */
import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Profile from './Profile';
import OffenderSummary from './OffenderSummary';
import Employment from './Employment';
import Schedule from './Schedule';
import Messaging from './Messaging';
import CaseInformation from './CaseInformation';
import Appointments from './Appointments';
import TimelineLog from './TimelineLog';
import DrugScreens from './DrugScreens';
import Treatment from './Treatment';
import Assessment from './Assessment';
import Tracking from './Tracking';
import CommunityService from './CommunityService';
import Financial from './Financial';
import CourtOrders from './CourtOrders';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Overview = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Overview"
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={12}
            sm={18}
            xl={12}
            xs={36}
          >
            <Profile />
          </Grid>
          <Grid
            item
            lg={12}
            sm={18}
            xl={12}
            xs={36}
          >
            <CaseInformation />
          </Grid>

          <Grid
            item
            lg={4}
            sm={6}
            xl={4}
            xs={14}
          >
            <DrugScreens />
          </Grid>
          <Grid
            item
            lg={8}
            sm={12}
            xl={8}
            xs={22}
          >
            <Treatment />
          </Grid>

          <Grid
            item
            lg={4}
            sm={6}
            xl={4}
            xs={14}
          >
            <Assessment />
          </Grid>
          <Grid
            item
            lg={4}
            sm={6}
            xl={4}
            xs={14}
          >
            <Tracking />
          </Grid>
          <Grid
            item
            lg={4}
            sm={6}
            xl={4}
            xs={14}
          >
            <CommunityService />
          </Grid>

          <Grid
            item
            lg={8}
            sm={12}
            xl={8}
            xs={22}
          >
            <Financial />
          </Grid>
          <Grid
            item
            lg={4}
            sm={6}
            xl={4}
            xs={12}
          >
            <CourtOrders />
          </Grid>

          <Grid
            item
            lg={4}
            sm={6}
            xl={4}
            xs={12}
          >
            <Messaging />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Schedule />
          </Grid>
          <Grid
            item
            lg={5}
            sm={6}
            xl={5}
            xs={12}
          >
            <TimelineLog />
          </Grid>

          {/* <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Sales />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <TrafficByDevice />
          </Grid> */}
          {/* <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestProducts />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <LatestOrders />
          </Grid> */}
        </Grid>
      </Container>
    </Page>
  );
};

export default Overview;
