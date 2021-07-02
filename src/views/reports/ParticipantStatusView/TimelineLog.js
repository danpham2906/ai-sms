/* eslint-disable */
import { useState, useRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  colors,
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
  Modal,
  Button,
} from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { format } from "date-fns";
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import timelineLogData from '../../../data/TimelineLogData';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  avatar: {
    cursor: 'pointer',
    backgroundColor: colors.indigo[600],
    height: 25,
    width: 25
  },
  flexColScroll: {
    'flex-grow': 1,
    overflow: 'scroll',
    'min-height': '100%',
    height:'100%',
    'overflow-x': 'hidden',
  },
  flexSection: {
    'flex-grow': 1,
    display: 'flex',
    'flex-direction': 'column',
    'min-height': 0,
    height: 350,
    padding: '20px 10px 20px 10px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  paper: {
    padding: '6px 16px',
  },
  timelineTimeLabel: {
    fontSize: '0.7rem',
  },
  modalPaper: {
    position: 'absolute',
    width: '560px',
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    // boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

const TimelineLog = ({ className, ...rest }) => {
  const classes = useStyles();
  const Theme = createMuiTheme({
    overrides: {
      MuiTimelineItem: {
        missingOppositeContent: {
          "&:before": {
            display: "none"
          }
        }
      }
    }
  });

  const [logs, setLogs] = useState(timelineLogData.logs);
  const [modalTitle, setModalTitle] = useState(null);
  const [modalContent, setModalContent] = useState(null);
  // console.log("logs: " + JSON.stringify(logs));
  const [openModal, setOpenModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date('2021-05-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const addTimelineLog = (event) => {
    event.preventDefault();

    const newLog = {
      id: logs.length + 1,
      title: modalTitle.value,
      time: format(selectedDate, "L/d/y, h:m:s a"),
      content: modalContent.value,
    }

    // console.log("newLog: " + JSON.stringify(newLog));
    const tmp = logs.concat(newLog);

    setLogs(tmp);
    // console.log("tmp: " + JSON.stringify(tmp));

    setOpenModal(false);
  };

  const modalBody = (
    <div className={classes.modalPaper}>
      <form onSubmit={(event) => {addTimelineLog(event)}}>
        {/* <FormControl> */}
        <TextField
          // id="standard-helperText"
          label="Title"
          // defaultValue="Default Value"
          // helperText="Some important text"
          inputRef={ref => { setModalTitle(ref); }}
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="Time picker"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change time',
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        <FormControl fullWidth className={classes.margin}>
          <TextField
            // id="standard-textarea"
            label="Content"
            // placeholder="Placeholder"
            multiline
            inputRef={ref => { setModalContent(ref); }}
          />
        </FormControl>
        {/* </FormControl> */}

        <div style={{ display: "flex" }}>
          <Button
            variant="contained"
            color="primary"
            style={{ marginLeft: "auto", marginTop: '10px' }}
            type="submit"
          >
            Add
          </Button>
        </div>
      </form>
    </div>
  );

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
                TIMELINE &amp; LOG
                </Typography>
            </Grid>
            <Grid item>
            <Avatar className={classes.avatar} onClick={handleOpenModal}>
              <AddIcon />
            </Avatar>
            <Modal
              open={openModal}
              onClose={handleCloseModal}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              {modalBody}
            </Modal>
          </Grid>
        </Grid>
        <Grid container className={classes.flexSection}>
            <Grid
                item
                className={classes.flexColScroll}
            >
              <ThemeProvider theme={Theme}>
                <Timeline align="left">

                  {logs.sort((a, b) => new Date(b.time) - new Date(a.time))
                    .map((log) => {
                      return (
                        <TimelineItem id={log.id}>
                          <TimelineSeparator>
                            {(log.id % 4) == 0 ?
                              <TimelineDot color="secondary"><LaptopMacIcon /></TimelineDot>
                              :
                              (log.id % 4) == 1 ?
                              <TimelineDot color="primary"><LaptopMacIcon /></TimelineDot>
                              :
                              (log.id % 4) == 2 ?
                              <TimelineDot color="secondary" variant="outlined"><LaptopMacIcon /></TimelineDot>
                              :
                              <TimelineDot color="primary"><LaptopMacIcon /></TimelineDot>
                            }
                            <TimelineConnector />
                          </TimelineSeparator>
                          <TimelineContent>
                            <Paper elevation={2} className={classes.paper}>
                              <Typography variant="h6" component="h1">
                                {log.title}
                              </Typography>
                              {(log.id % 2) == 0 ?
                                <Typography color="secondary" variant="subtitle1" className={classes.timelineTimeLabel} >
                                  {`${log.time}`}
                                </Typography>
                                :
                                <Typography color="primary" variant="subtitle1" className={classes.timelineTimeLabel} >
                                  {`${log.time}`}
                                </Typography>
                              }
                              
                              <Typography>
                                {log.content}
                              </Typography>
                            </Paper>
                          </TimelineContent>
                        </TimelineItem>
                      );
                  })}

                </Timeline>
              </ThemeProvider>
            </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

TimelineLog.propTypes = {
  className: PropTypes.string
};

export default TimelineLog;
