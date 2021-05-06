/* eslint-disable */
import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  makeStyles,
  Menu,
  MenuItem
} from '@material-ui/core';
import getInitials from 'src/utils/getInitials';
import StatusButton from './StatusButton';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Results = ({ className, entries, onScheduleChange, ...rest }) => {
  const classes = useStyles();
  const [selectedEntryIds, setSelectedEntryIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [scheduleEntries, setScheduleEntries] = useState(entries);

  const handleSelectAll = (event) => {
    let newSelectedEntryIds;

    if (event.target.checked) {
      newSelectedEntryIds = scheduleEntries.map((entry) => entry.id);
    } else {
      newSelectedEntryIds = [];
    }

    setSelectedEntryIds(newSelectedEntryIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedEntryIds.indexOf(id);
    let newSelectedEntryIds = [];

    if (selectedIndex === -1) {
      newSelectedEntryIds = newSelectedEntryIds.concat(selectedEntryIds, id);
    } else if (selectedIndex === 0) {
      newSelectedEntryIds = newSelectedEntryIds.concat(selectedEntryIds.slice(1));
    } else if (selectedIndex === selectedEntryIds.length - 1) {
      newSelectedEntryIds = newSelectedEntryIds.concat(selectedEntryIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedEntryIds = newSelectedEntryIds.concat(
        selectedEntryIds.slice(0, selectedIndex),
        selectedEntryIds.slice(selectedIndex + 1)
      );
    }

    setSelectedEntryIds(newSelectedEntryIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  function printObj(obj) {
    for (var i in obj) {
        console.log(i + " - " + obj[i]);
    }
  }

  function handleStatusChange(newStatus, id) {
    // props.onChange(event.target.value);
    // console.log("Child buttonClick");
    // console.log(id);
    // console.log(newStatus);
    // console.log(scheduleEntries.find(item => item.id === id).status);
    scheduleEntries.find(item => item.id === id).status = newStatus;
    // console.log(scheduleEntries.find(item => item.id === id).status);
    onScheduleChange();
    // console.log(props.entries);
  }

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedEntryIds.length === scheduleEntries.length}
                    color="primary"
                    indeterminate={
                      selectedEntryIds.length > 0
                      && selectedEntryIds.length < scheduleEntries.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Requested By
                </TableCell>
                <TableCell>
                  Time
                </TableCell>
                {/* <TableCell>
                  Parolee Photo
                </TableCell> */}
                <TableCell>
                  Parolee
                </TableCell>
                <TableCell>
                  Parolee Email
                </TableCell>
                <TableCell>
                  Parolee Phone Number
                </TableCell>
                <TableCell>
                  Type
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
                <TableCell>
                  Comment
                </TableCell>
                <TableCell>
                  Created At
                </TableCell>
                <TableCell>
                  Updated At
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {scheduleEntries.slice(0, limit).map((entry) => (
                <TableRow
                  hover
                  key={entry.id}
                  selected={selectedEntryIds.indexOf(entry.id) !== -1}
                >
                  <TableCell padding="checkbox" width="5%">
                    <Checkbox
                      checked={selectedEntryIds.indexOf(entry.id) !== -1}
                      onChange={(event) => handleSelectOne(event, entry.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell width="10%">
                    <Box
                      alignItems="center"
                      display="flex"
                    >
                      {entry.requestedBy}
                    </Box>
                  </TableCell>
                  <TableCell width="10%">
                    {entry.time}
                  </TableCell>
                  {/* <TableCell width="10%">
                    <Avatar
                      className={classes.avatar}
                      src={entry.paroleePhoto}
                    >
                      {getInitials(entry.parolee)}
                    </Avatar>
                  </TableCell> */}
                  <TableCell width="10%">
                    {entry.parolee}
                  </TableCell>
                  <TableCell width="13%">
                    {entry.paroleeEmail}
                  </TableCell>
                  <TableCell width="15%">
                    {entry.paroleePhone}
                  </TableCell>
                  <TableCell width="7%">
                    {entry.type}
                  </TableCell>
                  <TableCell width="5%">
                    <StatusButton
                      status={entry.status}
                      onChange={(event) => handleStatusChange(event, entry.id)}
                    />
                  </TableCell>
                  <TableCell width="30%">
                    {entry.comment}
                  </TableCell>
                  <TableCell width="10%">
                    {entry.createdAt}
                  </TableCell>
                  <TableCell width="10%">
                    {entry.updatedAt}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={scheduleEntries.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  scheduleEntries: PropTypes.array.isRequired
};

export default Results;
