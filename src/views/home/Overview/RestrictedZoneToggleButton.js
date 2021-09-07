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
} from '@material-ui/core';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BatteryAlertIcon from '@material-ui/icons/BatteryAlert';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { ParticipantContext } from '../../../context/ParticipantContext';
import ConvertLocationStr from '../../../utils/ConvertLocationStr';
import RestrictedZone from './RestrictedZone';
import ToggleButton from '@material-ui/lab/ToggleButton';

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
    height: '100%',
  },
  participantContainer: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    position: 'absolute',
    width: 'calc(100% - 300px)',
  },
  // participantList: {
  //   height: 240,
  //   width: 300,
  //   position: 'absolute',
  //   top: '50px',
  //   left: '20px',
  //   'z-index': theme.zIndex.drawer - 1,
  //   // maxHeight: '416',
  //   // overflow: 'auto',
  // },
  participantList: {
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    maxHeight: 416,
    overflow: 'auto',
    // backgroundColor: theme.palette.primary.main,
  },
  leafletTooltip: {
    padding: '0px 4px 0px 4px !important',
  },
  toggleButton0ff: {
    backgroundColor: 'white',
    "&:hover": {
      color: 'rgba(0, 0, 0, 0.5)',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
  },
  toggleButtonOn: {
    backgroundColor: 'black',
    "&:hover": {
      color: 'rgba(0, 0, 0, 0.5)',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
  },
}));

const RestrictedZoneToggleButton = ({ setToggle, ...rest }) => {
  const classes = useStyles();
  const [showRestrictedZone, setShowRestrictedZone] = useState(false);

  const toggleButtonClass = () => {
    if (showRestrictedZone) {
      return classes.toggleButtonOn;
    } else {
      return classes.toggleButton0ff;
    }
  }

  return (
    <ToggleButton
      value="check"
      selected={showRestrictedZone}
      onChange={() => {
        // console.log("toggle");
        setToggle(!showRestrictedZone);
        setShowRestrictedZone(!showRestrictedZone);
      }}
      className={classes.toggleButton0ff}
    >
      {/* <AnnouncementIcon /> */}
      <img src={geolocation_warning} />
    </ToggleButton>
  );
}

RestrictedZoneToggleButton.propTypes = {
  className: PropTypes.string
};

export default RestrictedZoneToggleButton;
