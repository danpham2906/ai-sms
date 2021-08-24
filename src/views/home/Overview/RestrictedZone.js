/* eslint-disable */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles
} from '@material-ui/core/styles';
import {
  Polygon,
  Tooltip
} from 'react-leaflet';
import Axios from 'axios';
import ConvertRestrictedLocation from '../../../utils/ConvertRestrictedLocation';

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

const RestrictedZone = ({ className, participantData, selectedParticipantId, setRestrictedLocationIndex, ...rest }) => {
  const classes = useStyles();
  const participants = participantData;
  const [restrictedLocation, setRestrictedLocation] = useState([]);

  const blueOption = { color: 'blue' };
  const greenOption = { color: 'green' };

  const polygon = [
    [40.5091508, -86.8251592],
    [40.5090733, -86.8252128],
    [40.5089836, -86.8252236],
  ]

  useEffect(() => {
    if (participants != undefined) {
      participants.map((participant) => {
        if (participant.id == selectedParticipantId) {
          GetRestrictedZoneLocation(participant.gpslogId);
        }
      });
    }
  }, [participants, selectedParticipantId]);

  const GetRestrictedZoneLocation = async (gpslogId) => {
    const restrictedLocation = await Axios.get('http://128.186.151.67:8080/api/nij/ai-sms/location/violation-check?gpslogId=' + gpslogId)
      .then(res => {
        // console.log(res.data[0].restrictLocation.coordinates);
        setRestrictedLocation(res.data[0].restrictLocation.coordinates[0]);
        setRestrictedLocationIndex(ConvertRestrictedLocation(res.data[0].restrictLocation.coordinates[0]));
      })
      .catch(() => {
        // console.log('error')
      });
  }

  var restrictedZone;
  useEffect(() => {
    // console.log(restrictedLocation);
    restrictedZone = [];
    if (restrictedLocation != []) {
      restrictedZone.push(
        <Polygon
          pathOptions={greenOption}
          positions={ConvertRestrictedLocation(restrictedLocation)}
          // pane={"selectedCircle"}
        />
      );
      // console.log(restrictedZone);
    };
  }, [restrictedLocation]);

  return (
    <div>
      {restrictedZone}
    </div>
  );
}

RestrictedZone.propTypes = {
  className: PropTypes.string
};

export default RestrictedZone;
