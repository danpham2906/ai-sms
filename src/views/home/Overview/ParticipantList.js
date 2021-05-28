/* eslint-disable */
import React, {
  useState,
  useContext,
  useEffect
} from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles
} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import {
  Typography,
} from '@material-ui/core';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BatteryAlertIcon from '@material-ui/icons/BatteryAlert';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { ParticipantContext } from '../../../context/ParticipantContext';

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

const valueCircleMarker = [];
const valueCircleMarker1 = [];

const ParticipantList = ({ className, participantData, toggleCircleMarkerData, selectParticipant, ...rest }) => {
  const classes = useStyles();
  const participants = participantData;
  const [toggleCircleMarker, setToggleCircleMarker] = useState(toggleCircleMarkerData);
  const [toggleCMState, setToggleCMState] = useState(true);
  const participantContext = useContext(ParticipantContext);

  useEffect(() => {
    handleParticipantSelection(participantContext.name);
  }, participantContext);

  function handleParticipantSelection (participantName) {
    var id;
    participants.map((participant) => {
      if (participant.name == participantName) {
        id = participant.id;
      }
    });

    for (let i = 1; i < participants.length + 1; i++) {
      valueCircleMarker[i] = false;
    }
    valueCircleMarker[id] = true;

    setToggleCMState(!toggleCMState);
    if (toggleCMState) {
      setToggleCircleMarker(valueCircleMarker);
    } else {
      for (let i = 1; i < participants.length + 1; i++) {
        valueCircleMarker1[i] = valueCircleMarker[i];
      }
      setToggleCircleMarker(valueCircleMarker1);
    }

    selectParticipant(participantName);
  }

  return (
    <List dense className={classes.root}>
      {participants.map((participant) => {
        const labelId = `checkbox-list-secondary-label-${participant.id}`;
        return (
          // <ListItem key={value} button>
          <ListItem key={participant.id} button onClick={() => handleParticipantSelection(participant.name)} >
            {toggleCircleMarker[participant.id] ? 
              <ListItemText id={labelId} disableTypography primary={<Typography style={{ color: 'LightSeaGreen', 'font-weight': 'bold' }}>{`${participant.name}`}</Typography>}/>
              : 
              <ListItemText id={labelId} primary={<Typography>{`${participant.name}`}</Typography>}/>
            }
            <div>
              <ListItemSecondaryAction>
                  {participant.outOfBattery === true ? (<BatteryAlertIcon style={{ color: 'DarkGray' }} />) : ''}
                  {participant.placeAlert === true ? (<AnnouncementIcon style={{ color: 'DarkTurquoise' }}/>) : ''}
                  {participant.heartRate === true ? (<FavoriteIcon style={{ color: 'LightCoral' }}/>) : ''}
                  {participant.calendar === true ? (<DateRangeIcon style={{ color: 'DarkSlateBlue' }}/>) : ''}
              </ListItemSecondaryAction>
            </div>
          </ListItem>
        );
      })}
    </List>
  );
}

ParticipantList.propTypes = {
  className: PropTypes.string
};

export default ParticipantList;
