/* eslint-disable */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles
} from '@material-ui/core/styles';
import {
  Polygon,
} from 'react-leaflet';
import Axios from 'axios';
import ConvertRestrictedLocation from '../../../utils/ConvertRestrictedLocation';

const useStyles = makeStyles((theme) => ({
  map: {
    width: '100vw',
    height: '100vh',
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
  const participants = participantData;
  const [restrictedLocation, setRestrictedLocation] = useState([]);

  const redOption = { color: 'red' };

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
        setRestrictedLocation(res.data[0].restrictLocation.coordinates[0]);
        setRestrictedLocationIndex(ConvertRestrictedLocation(res.data[0].restrictLocation.coordinates[0]));
      })
      .catch(() => {
      });
  }

  var restrictedZone;
  useEffect(() => {
    restrictedZone = [];
    if (restrictedLocation != []) {
      restrictedZone.push(
        <Polygon
          pathOptions={redOption}
          positions={ConvertRestrictedLocation(restrictedLocation)}
        />
      );
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
