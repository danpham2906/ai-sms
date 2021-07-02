/* eslint-disable */
import React, {
  useEffect,
  useState,
  useContext
} from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {
  MapContainer,
  TileLayer,
  Marker,
  // Popup,
  ZoomControl,
  CircleMarker,
  Tooltip
} from 'react-leaflet';
import Page from 'src/components/Page';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// import ListItemText from '@material-ui/core/ListItemText';
import {
  Typography,
  Card
} from '@material-ui/core';
// import IconButton from '@material-ui/core/IconButton';
// import AnnouncementIcon from '@material-ui/icons/Announcement';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import BatteryAlertIcon from '@material-ui/icons/BatteryAlert';
// import DateRangeIcon from '@material-ui/icons/DateRange';
import ParticipantList from './ParticipantList';
import CircleMarkerGroup from './CircleMarkerGroup';
import data from '../../../data/ParticipantData';
// import { ChangeParticipantName } from 'src/layouts/DashboardLayout/NavBar';
import { ParticipantContext } from '../../../context/ParticipantContext';
// import {
//   MarkerIcon,
//   MarkerPlaceAlertIcon,
//   MarkerOutOfBatteryIcon,
//   MarkerHeartRateIcon,
//   MarkerCalendarIcon,
//   MarkerEmptyIcon
// } from './MarkerIcon';

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

const position = [34.73, -86.60];

// console.log("participants: " + data.participants.map((participant) => JSON.stringify(participant)))

const participants = data.participants;

const valueCircleMarker = [];
const valueCircleMarker1 = [];
// console.log(`valueCircleMarker.length: ${valueCircleMarker.length}`);
if (valueCircleMarker.length < 1) {
  for (let i = 1; i < participants.length + 1; i++) {
    valueCircleMarker[i] = false;
  }
}

export default function HomeView() {
  const classes = useStyles();

  // const [map, setMap] = useState(null);
  // const [circleMarker, setCircleMarker] = useState(null);
  const [toggleCircleMarker, setToggleCircleMarker] = useState([]);
  const [toggleCMState, setToggleCMState] = useState(true);
  const [selectedExclusionZones, setSelectedExclusionZones] = useState([]);

  const participantContext = useContext(ParticipantContext);

  useEffect(() => {
    setToggleCircleMarker(valueCircleMarker);
  }, []);

  useEffect(() => {
    SelectParticipant(participantContext.name);
  }, participantContext);

  function SelectParticipant(participantName) {
    var index;

    participants.map((participant) => {
      if (participant.name == participantName) {
        index = participant.id;
        participantContext.setName(participant.name);
        participantContext.setStreet(participant.address.street);
        participantContext.setCity(participant.address.city);
        participantContext.setState(participant.address.state);
        setSelectedExclusionZones(participant.exclusionZones);
      }
    });

    for (let i = 1; i < participants.length + 1; i++) {
      valueCircleMarker[i] = false;
    }
    valueCircleMarker[index] = true;

    setToggleCMState(!toggleCMState);
    if (toggleCMState) {
      setToggleCircleMarker(valueCircleMarker);
    } else {
      for (let i = 1; i < participants.length + 1; i++) {
        valueCircleMarker1[i] = valueCircleMarker[i];
      }
      setToggleCircleMarker(valueCircleMarker1);
    }
  }

  return (
    <React.Fragment>
      <Page
        className={classes.root}
        title="AI-SMS"
      ></Page>
      <Container maxWidth='false'>
        <Grid container className={classes.participantContainer}>
          {/* ParticipantList */}
          <Grid item xs={12} className={classes.participantList}>
            <ParticipantList
              participantData={participants}
              toggleCircleMarkerData={toggleCircleMarker}
              selectParticipant={SelectParticipant}
            />
          </Grid>
        </Grid>
      </Container>

      <Card className={classes.cardContainer}>
        <Container maxWidth='true' className={classes.container}>
          {/* <Grid container> */}
          {/* Maps */}
          {/* <Grid container item> */}
          {/* <MapContainer spacing={3} center={position} zoom={14} zoomControl={false} scrollWheelZoom={false} className={classes.map} whenCreated={setMap}> */}
          <MapContainer spacing={3} center={position} zoom={14} zoomControl={false} scrollWheelZoom={false} className={classes.map}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <ZoomControl position="topright" />

            <CircleMarkerGroup
              participantData={participants}
              toggleCircleMarkerData={toggleCircleMarker}
            />

          </MapContainer>
          {/* </Grid> */}
          {/* </Grid> */}
        </Container>
      </Card>
    </React.Fragment>
  );
}
