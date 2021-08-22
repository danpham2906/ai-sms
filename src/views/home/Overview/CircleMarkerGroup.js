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
  selectParticipantCircle: {
    'z-index': 201,
  }
}));

const CircleMarkerGroup = ({ className, participantData, toggleCircleMarker, ...rest }) => {
  const classes = useStyles();
  const participants = participantData;
  // const [toggleCircleMarker, setToggleCircleMarker] = useState(toggleCircleMarker);

  const colorOption1 = { color: 'blue' };
  const colorOption2 = { color: 'red' };

  var circleMarkerGroup = [];
  if (participants != undefined) {
    participants.map((participant) => {
      // if (participant.outOfBattery || participant.placeAlert || participant.heartRate || participant.calendar) {
      if (participant.latestLocation != undefined) {
        var latestLocation = ConvertLocationStr(participant.latestLocation);
        if (!toggleCircleMarker[participant.id]) {
          circleMarkerGroup.push(
            <CircleMarker
              center={latestLocation}
              pathOptions={colorOption1}
              pane={"overlayPane"}
              radius={10}
              opacity={1}
            >
              <Tooltip
                direction='bottom'
                opacity={1}
                permanent
                className={classes.leafletTooltip}
                offset={[0, 7]}
                pane={"tooltipPane"}
              >
                {participant.name}
              </Tooltip>
            </CircleMarker>
          );
        }
      }
    });
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
