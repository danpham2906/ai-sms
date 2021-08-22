/* eslint-disable */
import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';
// import Toolbar from './Toolbar';
import data from '../../../data/ScheduleEntryData.json';
// import data from './data';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
  DateNavigator,
  Toolbar,
  TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
}));

const initialCurrentDate = '2021-05-06';
const schedulerData = [
  { startDate: '2021-05-06T09:45', endDate: '2021-05-06T11:00', title: 'Meeting' },
  { startDate: '2021-05-06T12:00', endDate: '2021-05-06T13:30', title: 'Go to a gym' },
];

const ScheduleView = () => {
  const classes = useStyles();
  const [entries] = useState(data.entries);
  const [schedulerEntries, setSchedulerEntries] = useState(schedulerData);
  const [currentDateInfo, setCurrentDateInfo] = useState(initialCurrentDate);

  const currentDateChange = (currentDate) => {
    setCurrentDateInfo(currentDate);
    console.log(currentDate);
  };

  function ConvertSchedulerEntries() {
    for (var i in entries) {
      console.log(i + " - " + JSON.stringify(entries[i]));
    }

    const schedulerContainer = [];
    for (var i in entries) {
      schedulerContainer.push({ startDate: '2021-05-06T09:45', endDate: '2021-05-06T11:00', title: 'Meeting' });
    }

    setSchedulerEntries(schedulerContainer);

    return(
      <div></div>
    );
  }

  return (
    <Page
      className={classes.root}
      title="Schedule"
    >
      <Scheduler
        data={schedulerEntries}
        // height={800}
      >
        <ViewState
            currentDate={currentDateInfo}
            onCurrentDateChange={currentDateChange}
        />
        <WeekView
            startDayHour={6}
            endDayHour={22}
        />
        <Toolbar />
        <DateNavigator />
        <TodayButton/>
        <Appointments />
      </Scheduler>
      <Container maxWidth={false}>
        {/* <Toolbar /> */}
        <Box mt={3}>
          <Results entries={entries} />
        </Box>
        <ConvertSchedulerEntries />
      </Container>
    </Page>
  );
};

export default ScheduleView;
