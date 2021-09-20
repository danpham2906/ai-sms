/* eslint-disable */
import {
  useState,
} from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles
} from '@material-ui/core/styles';
import ToggleButton from '@material-ui/lab/ToggleButton';

import geolocation_warning from '../../../img/geolocation_warning_32px.png';

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
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    maxHeight: 416,
    overflow: 'auto',
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
        setToggle(!showRestrictedZone);
        setShowRestrictedZone(!showRestrictedZone);
      }}
      className={classes.toggleButton0ff}
    >
      <img src={geolocation_warning} />
    </ToggleButton>
  );
}

RestrictedZoneToggleButton.propTypes = {
  className: PropTypes.string
};

export default RestrictedZoneToggleButton;
