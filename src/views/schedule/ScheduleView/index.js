/* eslint-disable */
import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';
import Toolbar from './Toolbar';
import data from '../../../data/ScheduleEntryData.json';
// import data from './data';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const currentDate = '2018-11-01';
const schedulerData = [
  { startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Meeting' },
  { startDate: '2018-11-01T12:00', endDate: '2018-11-01T13:30', title: 'Go to a gym' },
];

const ScheduleView = () => {
  const classes = useStyles();
  const [entries] = useState(data.entries);

//   console.log("entries: " + entries);

  return (
    <Page
      className={classes.root}
      title="Schedule"
    >
      <Scheduler
      data={schedulerData}
      >
        <ViewState
            currentDate={currentDate}
        />
        <WeekView
            startDayHour={9}
            endDayHour={14}
        />
        <Appointments />
      </Scheduler>
      <Container maxWidth={false}>
        {/* <Toolbar /> */}
        <Box mt={3}>
          <Results entries={entries} />
        </Box>
      </Container>
    </Page>
  );
};

export default ScheduleView;
