/* eslint-disable */
import React, { useState, useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import Typography from '@material-ui/core/Typography';
import { TitleContext } from '../../context/TitleContext';

const officer = {
  avatar: '/static/images/avatars/avatar02.png',
  name: 'John Roe'
};

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    width: 60,
    height: 60
  },
  appName: {
    color: 'white',
    'font-size': '1.25rem'
  },
  title: {
    flexGrow: 8,
    'font-size': '1.1rem'
  },
  avatar: {
    // cursor: 'pointer',
    width: 32,
    height: 32
  },
  name: {
    padding: '0px 10px 0px 10px'
  }
}));

const TopBar = ({
  className,
  onMobileNavOpen,
  ...rest
}) => {
  const classes = useStyles();
  const [notifications] = useState([]);
  const titleContext = useContext(TitleContext);

  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
    >
      <Toolbar>
        <RouterLink
          to="/"
          onClick={() => { titleContext.setName("Overview"); }}
        >
          {/* <Logo /> */}
          <Typography component="h1" align="center" noWrap className={classes.appName}>
            AI-SMS
          </Typography>
        </RouterLink>

        <Typography component="h1" color="inherit" align="center" noWrap className={classes.title}>
          {titleContext.name}
        </Typography>

        <Box flexDirection="row">
          <Avatar
            className={classes.avatar}
            // component={RouterLink}
            src={officer.avatar}
            // to="/app/documents"
          />
        </Box>
        <Box flexDirection="row">
          <Typography
            className={classes.name}
            color="inherit"
            variant="h5"
          >
            {officer.name}
          </Typography>
        </Box>
        {/* <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden> */}
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default TopBar;
