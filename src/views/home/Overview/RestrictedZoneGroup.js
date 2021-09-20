/* eslint-disable */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles
} from '@material-ui/core/styles';
import {
  Polygon,
  CircleMarker,
} from 'react-leaflet';
import restrictedzoneDataCSV from '../../../data/Bars_Schools_Playgrounds.csv';
import * as d3 from 'd3';

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

const RestrictedZoneGroup = ({ setZoneGroup, ...rest }) => {
  const [restrictedzoneData, setRestrictedzoneData] = useState([]);

  const zoneColor = { color: 'MediumOrchid' };
  const zoneColor1 = { color: 'Magenta' };

  useEffect(() => {
    d3.csv(restrictedzoneDataCSV).then((d) => {
      setRestrictedzoneData(d);
    });
  }, []);

  var restrictedzoneGroup;
  useEffect(() => {
    restrictedzoneGroup = [];
    if (restrictedzoneData.length != 0) {
      restrictedzoneData.map((zone) => {
        var restrictedZone = [];
        if (zone.geometry == "Polygon") {
          var zoneCoordinates = zone.coordinates.split(',');
          var pairPoint;
          zoneCoordinates.map((point, index) => {
            if (index % 2 == 0) {
              pairPoint = [];
              pairPoint.push(parseFloat(point));
            } else {
              pairPoint.unshift(parseFloat(point));
              restrictedZone.push(pairPoint);
            }
          });
          restrictedzoneGroup.push(
            <Polygon
              pathOptions={zoneColor}
              positions={restrictedZone}
            />
          );
        } else {
          restrictedZone.push(zone.latitude);
          restrictedZone.push(zone.longitude);
          restrictedzoneGroup.push(
            <CircleMarker
              center={restrictedZone}
              pathOptions={zoneColor1}
              radius={2}
              fillOpacity={1}
              opacity={1}
            />
          );
        }
      });
      setZoneGroup(restrictedzoneGroup);
    }
  }, [restrictedzoneData]);

  return (
    <div>
    </div>
  );
}

RestrictedZoneGroup.propTypes = {
  className: PropTypes.string
};

export default RestrictedZoneGroup;
