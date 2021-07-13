/* eslint-disable */
import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import OffenderSummary from './OffenderSummary';
import Employment from './Employment';
import Schedule from './Schedule';
import Messaging from './Messaging';
import CaseInformation from './CaseInformation';
import Appointments from './Appointments';
import TimelineLog from './TimelineLog';

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
            lg={6}
            sm={9}
            xl={6}
            xs={18}
          >
            <OffenderSummary />
          </Grid>
          <Grid
            item
            lg={6}
            sm={9}
            xl={6}
            xs={18}
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
            <Employment />
          </Grid>
          <Grid
            item
            lg={8}
            sm={12}
            xl={8}
            xs={22}
          >
            <Appointments />
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
