/* eslint-disable */
import {
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
  TextField,
  Card,
  CardContent,
} from '@material-ui/core';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BatteryAlertIcon from '@material-ui/icons/BatteryAlert';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { ParticipantContext } from '../../../context/ParticipantContext';
import ConvertLocationStr from '../../../utils/ConvertLocationStr';

import geolocation_warning from '../../../img/geolocation_warning_32px.png';

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
    padding: '6px',
    "&:last-child": {
      paddingBottom: '6px',
    },
  },
  participantContainer: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    position: 'absolute',
    width: 'calc(100% - 300px)',
  },
  participantList: {
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    maxHeight: 368,
    overflow: 'auto',
    marginTop: '5px',
  },
  leafletTooltip: {
    padding: '0px 4px 0px 4px !important',
  },
  textField: {
    width: '100%'
  },
}));

const valueCircleMarker = [];
const valueCircleMarker1 = [];

const ParticipantList = ({ className, participantData, toggleCircleMarkerData, selectParticipant, mapSetCenter, ...rest }) => {
  const classes = useStyles();
  const [toggleCircleMarker, setToggleCircleMarker] = useState(toggleCircleMarkerData);
  const [toggleCMState, setToggleCMState] = useState(true);
  const [participants, setParticipants] = useState([]);
  const [firstParticipantSelected, setFirstParticipantSelected] = useState(false);
  const participantContext = useContext(ParticipantContext);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (searchValue == "") {
      if (participantContext != undefined) {
        if (participantContext.list.length != 0) {
          setParticipants(participantContext.list);
        }
      }
      if (participants.length != 0 && firstParticipantSelected == false && participantContext.id == 0) {
        setFirstParticipantSelected(true);
        var firstParticipant = participants[0];
        handleParticipantSelection(firstParticipant.id);
        mapSetCenter(ConvertLocationStr(firstParticipant.latestLocation));
      }
    }
  }, [participantContext]);

  const handleParticipantSelection = (participantId) => {
    var id;
    participants.map((participant) => {
      if (participant.id == participantId) {
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

    selectParticipant(participantId);
  }

  const handleChangeSearchInput = (event) => {

    var prefix = event.target.value;
    setSearchValue(prefix);
    var tmpList = [];
    participantContext.list.map((participant, id) => {
      var name1 = participant.name.toLowerCase();
      var name2 = prefix.toLowerCase();
      if (name1.startsWith(name2)) {
        tmpList.push(participant);
      }
    });

    setParticipants(tmpList);
  };

  return (
    <Card
      {...rest}
    >
      <CardContent className={classes.cardContainer}>
        <TextField
          id="search-input"
          placeholder="Search"
          variant="outlined"
          className={classes.textField}
          onChange={event => handleChangeSearchInput(event)}
        />

        <List dense className={classes.participantList}>
          {participants.length ? participants.map((participant) => {
            const labelId = `checkbox-list-secondary-label-${participant.id}`;
            return (
              <ListItem key={participant.id} button onClick={() => handleParticipantSelection(participant.id)} >
                {participant.id == participantContext.id ?
                  <ListItemText id={labelId} disableTypography primary={<Typography style={{ color: 'LightSeaGreen', 'font-weight': 'bold' }}>{`${participant.name}`}</Typography>} />
                  :
                  <ListItemText id={labelId} primary={<Typography>{`${participant.name}`}</Typography>} />
                }
                <div>
                  <ListItemSecondaryAction>
                    {participant.outOfBattery === true ? (<BatteryAlertIcon style={{ color: 'DarkGray' }} />) : ''}
                    {participant.violation === true ? (<img src={geolocation_warning} />) : ''}
                    {participant.heartRate === true ? (<FavoriteIcon style={{ color: 'LightCoral' }} />) : ''}
                    {participant.calendar === true ? (<DateRangeIcon style={{ color: 'DarkSlateBlue' }} />) : ''}
                  </ListItemSecondaryAction>
                </div>
              </ListItem>
            );
          }) : ''}
        </List>
      </CardContent>
    </Card>
  );
}

ParticipantList.propTypes = {
  className: PropTypes.string
};

export default ParticipantList;
