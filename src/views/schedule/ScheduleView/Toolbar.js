import { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  makeStyles,
  Grid,
  Modal,
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import FormControl from '@material-ui/core/FormControl';
import { format } from "date-fns";
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
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
  margin: {
    margin: "10px 0px 10px 0px",
  }
}));

const Toolbar = ({ className, data, onAppointmentListChange, ...rest }) => {
  const classes = useStyles();
  const [appointments, setAppointments] = useState(data);
  const [modalParolee, setModalParolee] = useState(null);
  const [modalParoleeEmail, setModalParoleeEmail] = useState(null);
  const [modalParoleePhone, setModalParoleePhone] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [modalStatus, setModalStatus] = useState(null);
  const [modalComment, setModalComment] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  // const [selectedDate, setSelectedDate] = useState(new Date('2021-05-18T21:11:54'));
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleChangeType = (event) => {
    console.log(event.target.value);
    setModalType(event.target.value);
  };

  const handleChangeStatus = (event) => {
    setModalStatus(event.target.value);
  };

  const addTimelineLog = (event) => {
    event.preventDefault();

    var appointmentType, appointmentStatus;
    if (modalType == null) {
      console.log("modal type null");
      setModalType("In-person");
      appointmentType = "In-person";
      console.log("modal type: " + modalType);
    } else {
      appointmentType = modalType;
    }
    if (modalStatus == null) {
      setModalStatus("Pending");
      appointmentStatus = "Pending";
    } else {
      appointmentStatus = modalStatus;
    }

    const newAppointment = {
      id: appointments.length + 1,
      requestedBy: "Case Worker",
      time: format(selectedDate, "L/d/y, h:m:s a"),
      caseWorker: "John Roe",
      parolee: modalParolee.value,
      paroleeEmail: modalParoleeEmail.value,
      paroleePhone: modalParoleePhone.value,
      type: appointmentType,
      status: appointmentStatus,
      comment: modalComment.value,
      createdAt: format(new Date(), "L/d/y, h:m:s a"),
      updatedAt: format(new Date(), "L/d/y, h:m:s a"),
    }

    // console.log("newAppointment: " + JSON.stringify(newAppointment));
    const tmp = appointments.concat(newAppointment);

    // setAppointments(tmp);
    onAppointmentListChange(tmp);
    // console.log("tmp: " + JSON.stringify(tmp));

    setOpenModal(false);
  };

  const modalBody = (
    <div className={classes.modalPaper}>
      <form onSubmit={(event) => { addTimelineLog(event) }}>
        {/* <FormControl> */}

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

        <TextField
          // id="standard-helperText"
          label="Parolee"
          // defaultValue="Default Value"
          // helperText="Some important text"
          inputRef={ref => { setModalParolee(ref); }}
        />

        <FormControl fullWidth className={classes.margin}>
          <TextField
            // id="standard-textarea"
            label="Parolee Email"
            // placeholder="Placeholder"
            multiline
            inputRef={ref => { setModalParoleeEmail(ref); }}
          />
        </FormControl>

        {/* <FormControl fullWidth className={classes.margin}> */}
        <TextField
          // id="standard-textarea"
          label="Parolee Phone"
          // placeholder="Placeholder"
          multiline
          inputRef={ref => { setModalParoleePhone(ref); }}
        />
        {/* </FormControl> */}

        <FormControl fullWidth className={classes.margin}>
          <InputLabel shrink htmlFor="age-native-label-placeholder">
            Appointment Type
          </InputLabel>
          <NativeSelect
            // value='10'
            onChange={handleChangeType}
            inputProps={{
              name: 'type',
              id: 'age-native-label-placeholder',
            }}
          >
            <option value="">In-person</option>
            <option value="Zoom">Zoom</option>
          </NativeSelect>
          {/* <FormHelperText>Appointment Type</FormHelperText> */}
        </FormControl>

        <FormControl fullWidth className={classes.margin}>
          <InputLabel shrink htmlFor="age-native-label-placeholder">
            Status
          </InputLabel>
          <NativeSelect
            // value='10'
            onChange={handleChangeStatus}
            inputProps={{
              name: 'status',
              id: 'age-native-label-placeholder',
            }}
          >
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Declined">Declined</option>
          </NativeSelect>
          {/* <FormHelperText>Appointment Type</FormHelperText> */}
        </FormControl>

        <FormControl fullWidth className={classes.margin}>
          <TextField
            // id="standard-textarea"
            label="Comment"
            // placeholder="Placeholder"
            multiline
            inputRef={ref => { setModalComment(ref); }}
          />
        </FormControl>
        {/* </FormControl> */}

        <div style={{ display: "flex" }}>
          <Button
            variant="contained"
            color="secondary"
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
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box
        display="flex"
        justifyContent="flex-end"
      >
        {/* <Button className={classes.importButton}>
          Import
        </Button>
        <Button className={classes.exportButton}>
          Export
        </Button> */}
        <Button
          color="secondary"
          variant="contained"
          onClick={handleOpenModal}
        >
          Add appointment
        </Button>
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {modalBody}
        </Modal>
      </Box>
      <Box mt={3}>
        <Card>
          <CardContent>
            <Box maxWidth={500}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon
                        fontSize="small"
                        color="action"
                      >
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Search appointment"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default Toolbar;
