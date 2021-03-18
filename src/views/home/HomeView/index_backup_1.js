/* eslint-disable */
import React, {
    useEffect,
    useState
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
    Popup,
    ZoomControl,
    CircleMarker
  } from 'react-leaflet';
  import List from '@material-ui/core/List';
  import ListItem from '@material-ui/core/ListItem';
  import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
  import ListItemText from '@material-ui/core/ListItemText';
  import IconButton from '@material-ui/core/IconButton';
  import AnnouncementIcon from '@material-ui/icons/Announcement';
  import FavoriteIcon from '@material-ui/icons/Favorite';
  import BatteryAlertIcon from '@material-ui/icons/BatteryAlert';
  import DateRangeIcon from '@material-ui/icons/DateRange';
  // import { ChangeParticipantName } from 'src/layouts/DashboardLayout/NavBar';
  
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
  }));
  
  const blueOptions = { color: 'blue' };
  
  const position = [34.73, -86.60];
  const testPosition = [34.745, -86.63];
  
  const participantName = ['Jocelynn Bucken', 'Glenn Cake', 'Marcia Carillo', 'Dunlap Kim', 'Debbie Hurtado', 'John Doe', 'Alyssa Moody', 'Tom Mullaney',
    'Presly Alday', 'Evalynn Duhart'];
  const participantOutOfBattery = [0, 0, 0, 0, 0, 1, 0, 0, 1, 0];
  const participantAnnouncement = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0];
  const participantHeartRate = [0, 0, 1, 0, 0, 0, 0, 1, 0, 0];
  const participantCalendar = [0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
  const participantLocation = [[34.745, -86.63], [0, 0], [0, 0], [0, 0], [0, 0], [34.73, -86.60],
    [0, 0], [0, 0], [0, 0], [0, 0]];
  
  const valueCircleMarker = [];
  const valueCircleMarker1 = [];
  console.log(`valueCircleMarker.length: ${valueCircleMarker.length}`);
  if (valueCircleMarker.length < 1) {
    for (let i = 0; i < participantLocation.length; i++) {
      valueCircleMarker[i] = false;
    }
  }
  
  export default function HomeView() {
    const classes = useStyles();
  
    const [map, setMap] = useState(null);
    const [circleMarker, setCircleMarker] = useState(null);
    const [toggleCircleMarker, setToggleCircleMarker] = useState([]);
    const [toggleCMState, setToggleCMState] = useState(true);
  
    // console.log("map 1: " + map);
    // console.log("toggleCircleMarker[0] 1: " + toggleCircleMarker[0]);
    // console.log("valueCircleMarker[5] 1: " + valueCircleMarker[5]);
  
    useEffect(() => {
      setToggleCircleMarker(valueCircleMarker);
    }, []);
  
    function SelectParticipant(index) {
      valueCircleMarker[index] = !valueCircleMarker[index];
  
      setToggleCMState(!toggleCMState);
      if (toggleCMState) {
        setToggleCircleMarker(valueCircleMarker);
      } else {
        for (let i = 0; i < participantLocation.length; i++) {
          valueCircleMarker1[i] = valueCircleMarker[i];
        }
        setToggleCircleMarker(valueCircleMarker1);
      }
      console.log(`toggleCircleMarker: ${participantName[index]}`);
  
      // ChangeParticipantName(participantName[index]);
    }
  
    function ShowCircleMarker() {
      const showCircleMarker = [];
  
      for (let i = 0; i < participantLocation.length; i++) {
        if (toggleCircleMarker[i] && participantAnnouncement[i]) {
          showCircleMarker.push(
            <CircleMarker center={participantLocation[i]} pathOptions={blueOptions} radius={80}>
              <Popup>
                  {participantName[i]}
                  &apos;s Exclusion Zone.
              </Popup>
            </CircleMarker>
          );
        }
      }
  
      console.log(`showCircleMarker: ${showCircleMarker}`);
  
      return (
        <div>
          {showCircleMarker}
        </div>
      );
    }
  
    function ParticipantList() {
      return (
        <List dense className={classes.root}>
          {participantName.map((value, index) => {
            const labelId = `checkbox-list-secondary-label-${value}`;
            // {console.log(index);}
            return (
              // <ListItem key={value} button>
              <ListItem key={value} button onClick={() => SelectParticipant(index)}>
                <ListItemText id={labelId} primary={`${value}`} />
                <ListItemSecondaryAction>
                    {participantOutOfBattery[index] === 1 ? (
                      // <IconButton onClick={() => window.location.href = '#'}>
                        <BatteryAlertIcon />  
                      // </IconButton>
                    ) : ''}
                    
                    {participantAnnouncement[index] === 1 ? (
                      // <IconButton>
                        <AnnouncementIcon/>
                      // </IconButton>
                    ) : ''}
                    
                    {participantHeartRate[index] === 1 ? (
                      // <IconButton onClick={() => window.location.href = '#'}>
                        <FavoriteIcon/>
                      // </IconButton>
                    ) : ''}
                    
                    {participantCalendar[index] === 1 ? (
                      // <IconButton onClick={() => window.location.href = '#'}>
                        <DateRangeIcon/>
                      // </IconButton>
                    ) : ''}
    
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      );
    }
  
    return (
      <React.Fragment>
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
  
                          <Marker position={testPosition} className={classes.marker}>
                              <Popup>
                                  John Doe is here.
                              </Popup>
                          </Marker>
  
                          <ZoomControl position="topright" />
  
                          <ShowCircleMarker /> 
  
                      </MapContainer>
                  </Grid>
              </Grid>
          </Container>
      </React.Fragment>
    );
  }
  