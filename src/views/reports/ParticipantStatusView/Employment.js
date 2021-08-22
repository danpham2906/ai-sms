/* eslint-disable */
import React, { useContext } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
  makeStyles,
  List, ListItem,
} from '@material-ui/core';
import {
  MapContainer,
  TileLayer,
  Marker,
  // Popup,
  ZoomControl,
  CircleMarker,
  Tooltip
} from 'react-leaflet';
import { ParticipantContext } from '../../../context/ParticipantContext';
// import data from '../../../data/data';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.grey,
    height: 70,
    width: 70,
    margin: '20% 35%',
  },
  avatarContainer: {
    padding: '20px 20px 20px 20px',
  },
  participantName: {
    padding: '27px 20px 0px 20px',
  },
  flexColScroll: {
    'flex-grow': 1,
    overflow: 'scroll',
    'min-height': '100%',
    height: '100%',
    'overflow-x': 'hidden',
  },
  flexSection: {
    'flex-grow': 1,
    display: 'flex',
    'flex-direction': 'column',
    'min-height': 0,
    height: 200,
    padding: '15px 3px 5px 5px',
  },
  columnLeft: {
    float: 'left',
    width: '35%'
  },
  columnRight: {
    float: 'left',
    width: '65%'
  },
  textAlign: {
    // height: '400px',
    position: 'relative',
    display: 'flex',
    flex: 1,
    'justify-content': 'left',
    'align-items': 'left',
  },
  mainContent: {
    flexGrow: 1,
    padding: '0px 0px 10px 0px',
  },
  employerMap: {
    width: '100%',
    height: '200px',
  },
  map: {
    width: '100%',
    height: '100%',
    // position: 'absolute',
    // overflow: 'unset',
  },
}));

const Employment = ({ className, ...rest }) => {
  const classes = useStyles();
  const participant = useContext(ParticipantContext);

  const position = [34.707348637025916, -86.62204035764367];

  const employmentList = [
    'Employer name',
    'Address',
    'Start Date',
    'End Date',
    'Salary',
  ];

  const employmentListInfo = [
    'Radiology Clinic',
    '3907 Harwood Ave SW, Huntsville, AL',
    '06/10/2021',
    '09/10/2021',
    '$10,000',
  ];

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Grid container
        // className={classes.flexSection}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              EMPLOYMENT
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item
            // className={classes.flexColScroll}
            className={classes.mainContent}
          >
            <Typography
              color="textSecondary"
              variant="body1"
            >
              <List>
                {employmentList.map((itemList, id) => (
                  <div className={classes.row}>
                    <div className={classes.columnLeft}>
                      <ListItem><b>{itemList}</b></ListItem>
                    </div>
                    <div className={classes.columnRight}>
                      <ListItem>{employmentListInfo[id]}</ListItem>
                    </div>
                  </div>
                ))}
              </List>
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item
            className={classes.employerMap}
          >
            <MapContainer
              spacing={3}
              center={position}
              zoom={14}
              zoomControl={false}
              scrollWheelZoom={false}
              className={classes.map}
            // whenCreated={setMap}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <ZoomControl position="topright" />

              <Marker position={position} />

            </MapContainer>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

Employment.propTypes = {
  className: PropTypes.string
};

export default Employment;
