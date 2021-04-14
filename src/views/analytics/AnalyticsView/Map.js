/* eslint-disable */
import React, { useContext, useState } from 'react';
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
  makeStyles
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
    height:'100%',
    'overflow-x': 'hidden',
  },
  flexSection: {
    'flex-grow': 1,
    display: 'flex',
    'flex-direction': 'column',
    'min-height': 0,
    height: 200,
    padding: '20px 3px 5px 5px',
  },
  map: {
    width: '100%',
    height: '100%',
    // position: 'absolute',
    overflow: 'unset',
  }
}));

const Map = ({ className, ...rest }) => {
  const classes = useStyles();
  const [map, setMap] = useState(null);
  const participant = useContext(ParticipantContext);

  const position = [34.73, -86.60];

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <MapContainer spacing={3} center={position} zoom={14} zoomControl={false} scrollWheelZoom={false} className={classes.map} whenCreated={setMap}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <ZoomControl position="topright" />

      </MapContainer>
    </Card>
  );
};

Map.propTypes = {
  className: PropTypes.string
};

export default Map;
