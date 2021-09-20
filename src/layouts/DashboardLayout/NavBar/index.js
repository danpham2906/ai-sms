/* eslint-disable */
import React, { useEffect, useContext } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles
} from '@material-ui/core';
import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Layout as LayoutIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  Briefcase as BriefcaseIcon,
  User as UserIcon,
  Calendar as CalendarIcon,
  FileText as FileTextIcon,
  Home as HomeIcon
} from 'react-feather';
import NavItem from './NavItem';
import NavItemNoHref from './NavItemNoHref';
import { ParticipantContext } from '../../../context/ParticipantContext';

const user = {
  avatar: '/static/images/avatars/avatar01.png',
};

const items = [
  {
    href: '/app/overview',
    icon: HomeIcon,
    title: 'Overview'
  },
  {
    href: '/app/participantstatus',
    icon: LayoutIcon,
    title: 'Participant Status'
  },
  {
    href: '/app/schedule',
    icon: CalendarIcon,
    title: 'Schedule'
  },
  {
    href: '/app/taskmanagement',
    icon: BriefcaseIcon,
    title: 'Task Management'
  },
  {
    href: '/app/analytics',
    icon: BarChartIcon,
    title: 'Analytics'
  },
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    width: 64,
    height: 64
  }
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();
  const participant = useContext(ParticipantContext);

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  function NavBarItems() {
    const navBarItemList = [];

    items.map((item) => {
      var props = {};
      props.key = item.title;
      props.title = item.title;
      

      if (item.href != null) {
        props.href = item.href;
      }

      if (item.icon != null) {
        props.icon = item.icon;
      }

      if (item.href != null) {
        navBarItemList.push(
          <NavItem
            {...props}
          />
        );
      } else {
        navBarItemList.push(
          <NavItemNoHref
            {...props}
          />
        );
      }

      
    });

    return (
      <div>
        {navBarItemList}
      </div>
    );
  }

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        p={2}
      >
        <Avatar
          className={classes.avatar}
          src={user.avatar}
        />
        <Typography
          className={classes.name}
          color="textSecondary"
          variant="h5"
        >
          {participant.name}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <NavBarItems /> 
        
      </Box>
      <Box flexGrow={1} />
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
};

export default NavBar;
