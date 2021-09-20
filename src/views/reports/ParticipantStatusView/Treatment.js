/* eslint-disable */
import React, { useContext } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
  makeStyles,
  List, ListItem, Divider,
} from '@material-ui/core';
import {
  MapContainer,
  TileLayer,
  Marker,
  // Popup,
  ZoomControl,
  CircleMarker,
  Tooltip
} from 'react-leaflet';
import { ParticipantContext } from '../../../context/ParticipantContext';
// import data from '../../../data/data';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  container: {
    padding: '0px 20px 0px 20px',
  },
  column: {
    float: 'left',
    width: '50%',
    "& li": {
      overflowWrap: 'break-word',
      display: 'block',
    },
  },
  columnLeft: {
    float: 'left',
    width: '40%',
    "& li": {
      overflowWrap: 'break-word',
      display: 'block',
    },
  },
  columnRight: {
    float: 'left',
    width: '60%',
    "& li": {
      overflowWrap: 'break-word',
      display: 'block',
    },
  },
  columnAddressLeft: {
    float: 'left',
    width: '20%',
    "& li": {
      overflowWrap: 'break-word',
      display: 'block',
    },
  },
  columnAddressRight: {
    float: 'left',
    width: '80%',
    "& li": {
      overflowWrap: 'break-word',
      display: 'block',
    },
  },
  row: {
    display: 'flex',
  },
  sectionTitle: {
    color: theme.palette.text.sectionTitle,
  },
  employerMap: {
    width: '100%',
    height: '200px',
  },
  map: {
    width: '100%',
    height: '100%',
  },
}));

const Treatment = ({ className, ...rest }) => {
  const classes = useStyles();
  const participant = useContext(ParticipantContext);

  const treatmentLeft = [
    'Case Number #',
    'Initial Case Management Date',
    'Start Date',
    'Completion Date',
  ];

  const treatmentLeftInfo = [
    'N/A',
    'N/A',
    'N/A',
    'N/A',
  ];

  const treatmentRight = [
    'Goal Date',
    'Treatment Status',
    'Treatment Type',
    'Comments',
  ];

  const treatmentRightInfo = [
    'N/A',
    'N/A',
    '12-Step Program',
    'Additional requirement for successful completion of supervision, must attend Treatment for Substance Abuse: Two 12-Step Program/attend weekly',
  ];

  const treatmentAddress = [
    'Treatment Address',
  ];

  const treatmentAddressInfo = [
    '3907 Harwood Ave SW, Huntsville, AL',
  ];

  const position = [34.707348637025916, -86.62204035764367];

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Grid container
        >
          <Grid
            item
            lg={24}
          >
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              TREATMENT
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          className={classes.container}
        >
          <Grid item lg={12}>
            <Typography
              color="textSecondary"
              variant="body1"
            >
              <List>
                <div className={classes.column}>
                  {treatmentLeft.map((itemList, id) => (
                    <div className={classes.row}>
                      <div className={classes.columnLeft}>
                        <ListItem><b>{itemList}</b></ListItem>
                      </div>
                      <div className={classes.columnRight}>
                        <ListItem>{treatmentLeftInfo[id]}</ListItem>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={classes.column}>
                  {treatmentRight.map((itemList, id) => (
                    <div className={classes.row}>
                      <div className={classes.columnLeft}>
                        <ListItem><b>{itemList}</b></ListItem>
                      </div>
                      <div className={classes.columnRight}>
                        <ListItem>{treatmentRightInfo[id]}</ListItem>
                      </div>
                    </div>
                  ))}
                </div>
              </List>
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          className={classes.container}
        >
          <Grid item lg={12}>
            <Typography
              color="textSecondary"
              variant="body1"
            >
              <List>
                {treatmentAddress.map((itemList, id) => (
                  <div className={classes.row}>
                    <div className={classes.columnAddressLeft}>
                      <ListItem><b>{itemList}</b></ListItem>
                    </div>
                    <div className={classes.columnAddressRight}>
                      <ListItem>{treatmentAddressInfo[id]}</ListItem>
                    </div>
                  </div>
                ))}
              </List>
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          className={classes.container}
        >
          <Grid item
            className={classes.employerMap}
          >
            <MapContainer
              spacing={3}
              center={position}
              zoom={14}
              zoomControl={false}
              scrollWheelZoom={false}
              className={classes.map}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <ZoomControl position="topright" />

              <Marker position={position} />

            </MapContainer>
          </Grid>
        </Grid>
      </CardContent>
    </Card >
  );
};

Treatment.propTypes = {
  className: PropTypes.string
};

export default Treatment;
