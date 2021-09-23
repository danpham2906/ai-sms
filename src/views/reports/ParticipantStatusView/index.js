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
            lg={6}
            sm={9}
            xl={6}
            xs={17}
          >
            <CourtOrders />
          </Grid>
          <Grid
            item
            lg={6}
            sm={9}
            xl={6}
            xs={17}
          >
            <TimelineLog />
          </Grid>

          <Grid
            item
            lg={8}
            sm={11}
            xl={8}
            xs={23}
          >
            <Messaging />
          </Grid>
          <Grid
            item
            lg={4}
            sm={7}
            xl={4}
            xs={13}
          >
            <Schedule />
          </Grid>

          <Grid
            item
            lg={12}
            sm={18}
            xl={12}
            xs={36}
          >
            <Financial />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Overview;
