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
  exclusiveZoneTooltip: {
    padding: '0px 4px 0px 4px !important',
    color: 'red',
  },
}));

const colorOption1 = { color: 'blue' };
const colorOption2 = { color: 'red' };

const ExclusiveZone = ({ className, exclusiveZones, participantName, ...rest }) => {
  const classes = useStyles();

  console.log("exclusiveZones @ExclusiveZone.js 1: " + exclusiveZones);
  console.log("exclusiveZones @ExclusiveZone.js 2: " + JSON.stringify(exclusiveZones));

  return (
    <div>
      {
        exclusiveZones.map((zone) => {
          return (
            <div>
              {/* {console.log(zone)} */}
              <CircleMarker center={zone.center} pathOptions={colorOption2} radius={zone.radius / 10} opacity={1}>
                <Tooltip direction='bottom' opacity={1} className={classes.exclusiveZoneTooltip} offset={[0, 7]}>
                  {participantName}&apos;s Exclusive Zones
              </Tooltip>
              </CircleMarker>
            </div>
          )
        })
      }
    </div>
  );
}

ExclusiveZone.propTypes = {
  className: PropTypes.string
};

export default ExclusiveZone;
