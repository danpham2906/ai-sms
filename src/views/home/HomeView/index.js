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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BatteryAlertIcon from '@material-ui/icons/BatteryAlert';
import DateRangeIcon from '@material-ui/icons/DateRange';
import data from '../../../data/data';
// import { ChangeParticipantName } from 'src/layouts/DashboardLayout/NavBar';
import { ParticipantContext } from '../../../context/ParticipantContext';

const useStyles = makeStyles((theme) => ({
  map: {
    width: '100vw',
    height: '100vh',
    position: 'absolute',
    overflow: 'unset',
  },
  container: {
    position: 'relative',
  },
  participantContainer: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    position: 'absolute',
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

const position = [34.73, -86.60];
const testPosition = [34.745, -86.63];

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

  const [map, setMap] = useState(null);
  const [circleMarker, setCircleMarker] = useState(null);
  const [toggleCircleMarker, setToggleCircleMarker] = useState([]);
  const [toggleCMState, setToggleCMState] = useState(true);

  const participantContext = useContext(ParticipantContext);

  useEffect(() => {
    setToggleCircleMarker(valueCircleMarker);
  }, []);

  function SelectParticipant(index) {
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

    participants.map((participant) => {
      if (participant.id == index) {
        participantContext.setName(participant.name);
        participantContext.setStreet(participant.address.street);
        participantContext.setCity(participant.address.city);
        participantContext.setState(participant.address.state);
        // console.log(`toggleCircleMarker: ${participant.id}`);
      }
    });
  }

  function ShowCircleMarker() {
    const showCircleMarker = [];

    participants.map((participant) => {
      // if (toggleCircleMarker[participant.id] && participant.placeAlert === true) {
        showCircleMarker.push(
          <CircleMarker center={participant.location} pathOptions={toggleCircleMarker[participant.id] ? colorOption2 : colorOption1} radius={10} opacity={1}>
            <Tooltip direction='bottom' opacity={1} permanent className={classes.leafletTooltip} offset={[0, 7]}>
                {participant.name}
                {/* &apos;s Exclusion Zone. */}
            </Tooltip>
          </CircleMarker>
        );
      // }
    });

    // console.log(`showCircleMarker: ${showCircleMarker}`);

    return (
      <div>
        {showCircleMarker}
      </div>
    );
  }

  function ParticipantList() {
    return (
      <List dense className={classes.root}>
        {participants.map((participant) => {
          const labelId = `checkbox-list-secondary-label-${participant.id}`;
          return (
            // <ListItem key={value} button>
            <ListItem key={participant.id} button onClick={() => SelectParticipant(participant.id)} >
              {toggleCircleMarker[participant.id] ? 
                <ListItemText id={labelId} disableTypography primary={<Typography style={{ color: 'LightSeaGreen', 'font-weight': 'bold' }}>{`${participant.name}`}</Typography>}/>
               : 
                <ListItemText id={labelId} primary={`${participant.name}`}/>
              }
              <ListItemSecondaryAction>
                  {participant.outOfBattery === true ? <BatteryAlertIcon /> : ''}
                  {participant.placeAlert === true ? <AnnouncementIcon/> : ''}
                  {participant.heartRate === true ? <FavoriteIcon/> : ''}
                  {participant.calendar === true ? <DateRangeIcon/> : ''}
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    );
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
                    <ParticipantList />
                </Grid>
            </Grid>
        </Container>

        <Container maxWidth='true' className={classes.container}>
            <Grid container>
                {/* Maps */}
                <Grid container item>
                    <MapContainer spacing={3} center={position} zoom={14} zoomControl={false} scrollWheelZoom={false} className={classes.map} whenCreated={setMap}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        {/* <Marker position={testPosition} className={classes.marker}>
                            <Tooltip>
                                John Doe is here.
                            </Tooltip>
                        </Marker> */}

                        <ZoomControl position="topright" />

                        <ShowCircleMarker /> 

                    </MapContainer>
                </Grid>
            </Grid>
        </Container>
    </React.Fragment>
  );
}
