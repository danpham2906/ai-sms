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
  exclusionZoneTooltip: {
    padding: '0px 4px 0px 4px !important',
    color: 'red',
  },
}));

const colorOption1 = { color: 'blue' };
const colorOption2 = { color: 'red' };

const ExclusionZone = ({ className, exclusionZones, participantName, ...rest }) => {
  const classes = useStyles();

  return (
    <div>
      {
        exclusionZones.map((zone) => {
          return (
            <div>
              <CircleMarker center={zone.center} pathOptions={colorOption2} radius={zone.radius / 10} opacity={1}>
                <Tooltip direction='bottom' opacity={1} className={classes.exclusionZoneTooltip} offset={[0, 7]}>
                  {participantName}&apos;s Exclusion Zones
              </Tooltip>
              </CircleMarker>
            </div>
          )
        })
      }
    </div>
  );
}

ExclusionZone.propTypes = {
  className: PropTypes.string
};

export default ExclusionZone;
