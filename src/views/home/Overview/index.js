/* eslint-disable */
import React, {
  useEffect,
  useState,
  useContext,
} from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {
  MapContainer,
  TileLayer,
  ZoomControl,
  Pane,
  Polygon,
} from 'react-leaflet';
import Page from 'src/components/Page';
import {
  Typography,
  Card
} from '@material-ui/core';
import ParticipantList from './ParticipantList';
import CircleMarkerGroup from './CircleMarkerGroup';
import SelectedCircleMarker from './SelectedCircleMarker';
import { ParticipantContext } from '../../../context/ParticipantContext';
import ConvertLocationStr from '../../../utils/ConvertLocationStr';
import RestrictedZone from './RestrictedZone';
import RestrictedZoneToggleButton from './RestrictedZoneToggleButton';
import RestrictedZoneGroup from './RestrictedZoneGroup';

const useStyles = makeStyles((theme) => ({
  map: {
    width: '100%',
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
    height: '416',
    width: 300,
    position: 'absolute',
    top: '30px',
    left: '20px',
    'z-index': theme.zIndex.drawer - 1,
    maxHeight: '416',
    overflow: 'auto',
  },
  root: {
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  leafletTooltip: {
    padding: '0px 4px 0px 4px !important',
  },
  restrictedButtonContainer: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    position: 'absolute',
    width: '100px',
    left: 'calc(100% - 130px)',
  },
  restrictedButtonGrid: {
    position: 'absolute',
    top: '15px',
    'z-index': theme.zIndex.drawer - 1,
    overflow: 'auto',
  },
}));

export default function HomeView() {
  const classes = useStyles();
  const [firstload, setFirstload] = useState(false);
  const [restrictedLocation, setRestrictedLocation] = useState([]);
  const participantContext = useContext(ParticipantContext);
  const [participants, setParticipants] = useState(participantContext.list);
  const [map, setMap] = useState(null);

  var position = [34.73, -86.60];

  const [restrictedzoneGroup, setRestrictedzoneGroup] = useState([]);
  const [restrictedzoneGroupToggleOn, setRestrictedzoneGroupToggleOn] = useState(false);
  const [restrictedzoneGroupData, setRestrictedzoneGroupData] = useState([]);

  useEffect(() => {
  }, [map]);

  useEffect(() => {
    if (participantContext.latestLocation != null && firstload == false && map != null) {
      if (participantContext.latestLocation.length != 0) {
        MapSetCenter(ConvertLocationStr(participantContext.latestLocation));
        setFirstload(true);
      }
    }
  }, [participantContext, map]);

  useEffect(() => {
  }, [restrictedLocation, restrictedzoneGroupData]);

  useEffect(() => {
    if (restrictedzoneGroupToggleOn) {
      setRestrictedzoneGroup(restrictedzoneGroupData);
    } else {
      setRestrictedzoneGroup([]);
    }
  }, [restrictedzoneGroupToggleOn]);

  useEffect(() => {
    setParticipants(participantContext.list);
  }, [participantContext]);

  useEffect(() => {
    SelectParticipant(participantContext.name);
  }, participantContext);

  function MapSetCenter(center) {
    map.setView(center);
  }

  function MapFlyTo(location) {
    if (location.length && map) {
      map.flyTo(location, 14, {
        duration: 1,
      });
    }
    return null;
  }

  function SelectParticipant(participantId) {
    var index;

    if (participants != undefined) {
      participants.map((participant) => {
        if (participant.id == participantId) {
          index = participant.id;
          MapFlyTo(ConvertLocationStr(participant.latestLocation));
          participantContext.setName(participant.name);
          participantContext.setId(participant.id);
          participantContext.setLatestLocation(participant.latestLocation);
          if (participant.address) {
            participantContext.setStreet(participant.address.street);
            participantContext.setCity(participant.address.city);
            participantContext.setState(participant.address.state);
          } else {
            participantContext.setStreet("");
            participantContext.setCity("");
            participantContext.setState("");
          }
        }
      });
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
          <Grid item xs={12} className={classes.participantList}>
            <ParticipantList
              participantData={participants}
              selectParticipant={SelectParticipant}
              mapSetCenter={MapSetCenter}
            />
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth='false'>
        <Grid container className={classes.restrictedButtonContainer}>
          <Grid item xs={6} className={classes.restrictedButtonGrid}>
            <RestrictedZoneToggleButton
              setToggle={setRestrictedzoneGroupToggleOn}
            />
          </Grid>
        </Grid>
      </Container>

      <Card className={classes.cardContainer}>
        <Container maxWidth='true' className={classes.container}>
          <MapContainer spacing={3} center={position} zoom={14} zoomControl={false} scrollWheelZoom={false} className={classes.map} whenCreated={setMap}>
            <Pane name="selectedCircle" style={{ zIndex: 401 }} />
            <Pane name="selectedCircleTooltip" style={{ zIndex: 651 }} />
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <ZoomControl position="topright" />

            <CircleMarkerGroup
              participantData={participants}
            />

            <SelectedCircleMarker
              participantData={participants}
            />

            <RestrictedZone
              participantData={participants}
              selectedParticipantId={participantContext.id}
              setRestrictedLocationIndex={setRestrictedLocation}
            />

            <Polygon
              pathOptions={{ color: 'DarkOrange' }}
              positions={restrictedLocation}
            />

            <RestrictedZoneGroup setZoneGroup={setRestrictedzoneGroupData} />

            {restrictedzoneGroup}

          </MapContainer>
        </Container>
      </Card>
    </React.Fragment>
  );
}
