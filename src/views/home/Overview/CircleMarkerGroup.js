/* eslint-disable */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles
} from '@material-ui/core/styles';
import {
  CircleMarker,
  Tooltip
} from 'react-leaflet';
import { ParticipantContext } from '../../../context/ParticipantContext';
import ConvertLocationStr from '../../../utils/ConvertLocationStr';

const useStyles = makeStyles((theme) => ({
  map: {
    width: '100vw',
    height: '100vh',
    // position: 'absolute',
    overflow: 'unset',
  },
  container: {
    position: 'relative',
  },
  cardContainer: {
    height: '100%',
  },
  participantContainer: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    position: 'absolute',
    width: 'calc(100% - 300px)',
  },
  participantList: {
    height: 240,
    width: 300,
    position: 'absolute',
    top: '20px',
    left: '20px',
    'z-index': theme.zIndex.drawer - 1,
  },
  root: {
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  leafletTooltip: {
    padding: '0px 4px 0px 4px !important',
  },
}));

const CircleMarkerGroup = ({ className, participantData, toggleCircleMarker, selectParticipant, mapFlyTo, ...rest }) => {
  const classes = useStyles();
  const participants = participantData;
  // const [toggleCircleMarker, setToggleCircleMarker] = useState(toggleCircleMarker);

  const colorOption1 = { color: 'blue' };
  const colorOption2 = { color: 'red' };

  var circleMarkerGroup = [];

  // const convertLocationData = (locationStr) => {
  //   // console.log(locationStr);
  //   var res = [];
  //   if (locationStr != null) {
  //     locationStr = locationStr.split("POINT(");
  //     locationStr = locationStr[1].split(" ");

  //     var latitude = locationStr[1].split(")")[0];
  //     var longitude = locationStr[0];

  //     res.push(parseFloat(latitude));
  //     res.push(parseFloat(longitude));
  //   }
  //   return res;
  // }

  // useEffect(() => {
  // console.log("CircleMarkerGroup");
  if (participants != undefined) {
    participants.map((participant) => {
      // if (participant.outOfBattery || participant.placeAlert || participant.heartRate || participant.calendar) {
      if (participant.latestLocation != undefined) {
        var latestLocation = ConvertLocationStr(participant.latestLocation);
        // console.log(latestLocation);
        circleMarkerGroup.push(
          // <div>
          <CircleMarker center={latestLocation} pathOptions={toggleCircleMarker[participant.id] ? colorOption2 : colorOption1} radius={10} opacity={1}>
            <Tooltip direction='bottom' opacity={1} permanent className={classes.leafletTooltip} offset={[0, 7]}>
              {participant.name}
            </Tooltip>
          </CircleMarker>
          // </div>
        );
      }
    });
    // console.log(circleMarkerGroup);
  }

  return (
    <div>
      {circleMarkerGroup}
    </div>
  );
}

CircleMarkerGroup.propTypes = {
  className: PropTypes.string
};

export default CircleMarkerGroup;
