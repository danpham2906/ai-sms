/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles
} from '@material-ui/core/styles';
import {
  CircleMarker,
  Tooltip
} from 'react-leaflet';

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

const colorOption1 = { color: 'blue' };
const colorOption2 = { color: 'red' };

const CircleMarkerGroup = ({ className, participantData, toggleCircleMarkerData, selectParticipant, ...rest }) => {
  const classes = useStyles();
  const participants = participantData;
  const [toggleCircleMarker, setToggleCircleMarker] = useState(toggleCircleMarkerData);

  const circleMarkerGroup = [];

  participants.map((participant) => {
    // if (participant.outOfBattery || participant.placeAlert || participant.heartRate || participant.calendar) {
        circleMarkerGroup.push(
          <div>
            <CircleMarker center={participant.location} pathOptions={toggleCircleMarker[participant.id] ? colorOption2 : colorOption1} radius={10} opacity={1}>
              <Tooltip direction='bottom' opacity={1} permanent className={classes.leafletTooltip} offset={[0, 7]}>
                {participant.name}
              </Tooltip>
            </CircleMarker>
            {/* <Marker
              position={participant.location}
              icon={MarkerIcon}
              // riseOnHover
              // riseOffset={700}
            >
              <Tooltip direction='bottom' opacity={1} permanent className={classes.leafletTooltip} offset={[0, 7]}>
                  {participant.name}
              </Tooltip>
            </Marker>

            {participant.outOfBattery ? (
            <Marker
              position={participant.location}
              icon={MarkerOutOfBatteryIcon}
            >
            </Marker>)
            : '' }

            {participant.placeAlert ? (
            <Marker
              position={participant.location}
              icon={MarkerPlaceAlertIcon}
            >
            </Marker>)
            : '' }

            {participant.heartRate ? (
            <Marker
              position={participant.location}
              icon={MarkerHeartRateIcon}
            >
            </Marker>)
            : '' }

            {participant.calendar ? (
            <Marker
              position={participant.location}
              icon={MarkerCalendarIcon}
            >
            </Marker>)
            : '' } */}
            
          </div>
        );
    // } else {
    //   circleMarkerGroup.push(
    //     <Marker
    //       position={participant.location}
    //       icon={MarkerEmptyIcon}
    //     >
    //       <Tooltip direction='bottom' opacity={1} permanent className={classes.leafletTooltip} offset={[0, 7]}>
    //           {participant.name}
    //           {/* &apos;s Exclusion Zone. */}
    //       </Tooltip>
    //     </Marker>
    //     // <CircleMarker center={participant.location} pathOptions={toggleCircleMarker[participant.id] ? colorOption2 : colorOption1} radius={10} opacity={1}>
    //     //   <Tooltip direction='bottom' opacity={1} permanent className={classes.leafletTooltip} offset={[0, 7]}>
    //     //       {participant.name}
    //     //   </Tooltip>
    //     // </CircleMarker>
    //   );
    // }
    // }
  });

  // console.log(`CircleMarkerGroup: ${CircleMarkerGroup}`);

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
  