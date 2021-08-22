/* eslint-disable */
import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles,
  withStyles
} from '@material-ui/core';
import {
  darken,
  fade,
  lighten
} from "@material-ui/core/styles/colorManipulator";
import Page from 'src/components/Page';
import Results from './Results';
import ListToolbar from './Toolbar';
// import data from './data';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
  DateNavigator,
  Toolbar,
  TodayButton,
  Resources,
} from '@devexpress/dx-react-scheduler-material-ui';
import { string } from 'prop-types';
import data from '../../../data/ScheduleEntryData.json';
import { statuses } from './tasks';

const resources = [
  {
    fieldName: "status",
    title: "Status",
    instances: statuses
  }
];

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  title: {
    fontWeight: "bold",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    'font-size': '0.9rem',
  },
  text: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    'font-size': '0.85rem',
  },
  statusText: {
    fontWeight: "bold",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    'font-size': '0.85rem',
  },
  appointment: {
    borderRadius: '10px',
    '&:hover': {
      opacity: 0.6,
    },
  },
  appointmentList: {
    paddingTop: "20px",
  },
});

// const CellBase = React.memo(
//   ({
//     classes,
//     startDate,
//     formatDate,
//     otherMonth
//     // #FOLD_BLOCK
//   }) => {
//     const iconId = Math.abs(Math.floor(Math.sin(startDate.getDate()) * 10) % 3);
//     const isFirstMonthDay = startDate.getDate() === 1;
//     const formatOptions = isFirstMonthDay
//       ? { day: "numeric", month: "long" }
//       : { day: "numeric" };
//     return (
//       <TableCell
//         tabIndex={0}
//         className={classNames({
//           [classes.cell]: true,
//           [classes.rainBack]: iconId === 0,
//           [classes.sunBack]: iconId === 1,
//           [classes.cloudBack]: iconId === 2,
//           [classes.opacity]: otherMonth
//         })}
//       >
//         <div className={classes.content}>
//           <WeatherIcon classes={classes} id={iconId} />
//         </div>
//         <div className={classes.text}>
//           {formatDate(startDate, formatOptions)}
//         </div>
//       </TableCell>
//     );
//   }
// );

const AppointmentContent = withStyles(styles, { name: 'AppointmentContent' })(({
  classes, data, formatDate, ...restProps
}) => (
  <Appointments.AppointmentContent {...restProps} formatDate={formatDate} data={data}>
    <div className={classes.container}>
      <div className={classes.title}>
        {'Parolee: ' + data.parolee}
      </div>
      <div className={classes.text}>
        {'Requested by: ' + data.requestedBy}
      </div>
      <div className={classes.textContainer}>
        <div className={classes.time}>
          {'Time: ' + formatDate(data.startDate, { hour: 'numeric', minute: 'numeric' })}
          {/* {formatDate(data.startDate, { hour: 'numeric', minute: 'numeric' }) + ' - ' + formatDate(data.endDate, { hour: 'numeric', minute: 'numeric' })} */}
        </div>
      </div>
      <div className={classes.statusText}>
        {'Status: ' + data.status}
      </div>
    </div>
  </Appointments.AppointmentContent>
));

const initialCurrentDate = '2021-05-06';
// const schedulerData = [
//   { startDate: '2021-05-06T09:45', endDate: '2021-05-06T11:00', title: 'Meeting' },
//   { startDate: '2021-05-06T12:00', endDate: '2021-05-06T13:30', title: 'Go to a gym' },
// ];

class ScheduleView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { entries: data.entries, currentDateInfo: initialCurrentDate };
    this.scheduler = React.createRef();

    this.convertSchedule();

    this.currentDateChange = this.currentDateChange.bind(this);
    this.convertSchedule = this.convertSchedule.bind(this);
    this.handleScheduleChange = this.handleScheduleChange.bind(this);
    this.hoverScheduleHandler = this.hoverScheduleHandler.bind(this);
    this.handleAppointmentListChange = this.handleAppointmentListChange.bind(this);
  }

  convertSchedule() {
    let schedulerContainer = [];
    // console.log(this.state.entries);
    for (var i in this.state.entries) {
      let timeStrStart = this.state.entries[i].time;
      let timeArr = timeStrStart.split(",");
      let timeDate = timeArr[0].split("/");
      timeStrStart = timeDate[2] + "-";
      timeStrStart += (timeDate[0].length == "1" ? "0" : "") + timeDate[0] + "-";
      timeStrStart += (timeDate[1].length == "1" ? "0" : "") + timeDate[1] + "T";
      let timeStrEnd = timeStrStart;

      let timeHour = timeArr[1].split(" ");
      let timeHour2 = timeHour[1].split(":");
      if (timeHour[2] == "PM" && timeHour2[0] != 12) {
        timeHour2[0] = parseInt(timeHour2[0]) + 12;
      }
      timeStrStart += (timeHour2[0].toString().length == "1" ? "0" : "") + timeHour2[0] + ":";
      timeStrStart += timeHour2[1];
      timeHour2[0] = parseInt(timeHour2[0]) + 1;
      timeStrEnd += (timeHour2[0].toString().length == "1" ? "0" : "") + timeHour2[0] + ":";
      timeStrEnd += timeHour2[1];

      schedulerContainer.push({
        startDate: timeStrStart,
        endDate: timeStrEnd,
        requestedBy: this.state.entries[i].requestedBy,
        parolee: this.state.entries[i].parolee,
        status: this.state.entries[i].status,
      });
    }
    this.state.schedulerEntries = schedulerContainer;
  }

  componentDidMount() {
    console.log(this.scheduler.current);
  }

  currentDateChange(currentDate) {
    this.setState({ currentDateInfo: currentDate });
  };

  handleScheduleChange() {
    // console.log("Status changed!");
    // console.log(this.state.entries);
    this.convertSchedule();
    // console.log(this.state.schedulerEntries);
    this.setState({ schedulerEntries: this.state.schedulerEntries });
  }

  hoverScheduleHandler(id) {
    console.log("Hover in Scheduler!! Id = " + id.toString());
    console.log(this.scheduler.current.props.children);
    // this.childIsHover = isHover;
  }

  handleAppointmentListChange(newAppointmentList) {
    this.state.entries = newAppointmentList;
    console.log(this.state.entries);
    this.convertSchedule();
  }

  render() {
    const { classes } = this.props;

    return (
      <Page
        className={classes.root}
        title="Schedule"
      >
        <Scheduler
          data={this.state.schedulerEntries}
          height={800}
        // overlay={this.childIsHover}
        >
          <ViewState
            currentDate={this.state.currentDateInfo}
            onCurrentDateChange={this.currentDateChange}
          />
          <WeekView
            startDayHour={6}
            endDayHour={22}
          />
          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <Appointments
            appointmentContentComponent={AppointmentContent}
            ref={this.scheduler}
          />
          <Resources data={resources} />
        </Scheduler>
        <Container maxWidth={false} className={classes.appointmentList}>
          <ListToolbar
            data={this.state.entries}
            onAppointmentListChange={this.handleAppointmentListChange}
          />
          <Box mt={3}>
            <Results
              entries={this.state.entries}
              onScheduleChange={this.handleScheduleChange}
              onScheduleHover={this.hoverScheduleHandler}
            />
          </Box>
        </Container>
      </Page>
    );
  }

};

export default withStyles(styles, { withTheme: true })(ScheduleView);
