/* eslint-disable */
import React, { useEffect, useContext } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box, // Button,
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
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon,
  Home as HomeIcon
} from 'react-feather';
import NavItem from './NavItem';
import NavItemNoHref from './NavItemNoHref';
import { ParticipantContext } from '../../../context/ParticipantContext';

// const participant = {
//   id: 1,
//   name: 'Jocelynn Bucken',
//   outOfBattery: false,
//   placeAlert: true,
//   heartRate: false,
//   calendar: false,
//   location: [34.745, -86.63]
// };

// console.log(`participant: ${participant.name}`);

const user = {
  avatar: '/static/images/avatars/avatar01.png',
  jobTitle: 'Senior Developer',
  // name: participant.name
};

const items = [
  {
    href: '/app/home',
    icon: HomeIcon,
    title: 'Home'
  },
  {
    title: 'Support the 5-Key Model'
  },
  {
    href: '/app/overview',
    icon: BarChartIcon,
    title: 'Overview'
  },
  {
    href: '/app/customers',
    icon: UsersIcon,
    title: 'Schedule'
  },
  {
    href: '/app/products',
    icon: ShoppingBagIcon,
    title: 'Documents'
  },
  {
    href: '/app/account',
    icon: UserIcon,
    title: 'App&Tasks or JOB'
  },
  {
    href: '/app/settings',
    icon: SettingsIcon,
    title: 'Analytics'
  },
  {
    href: '/login',
    icon: LockIcon,
    title: 'Setting'
  },
  {
    href: '/register',
    icon: UserPlusIcon,
    title: 'Register'
  },
  {
    href: '/404',
    icon: AlertCircleIcon,
    title: 'Error'
  }
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
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));

export const ChangeParticipantName = (name) => {
  user.name = name;
  console.log(`ChangeParticipantName: ${user.name}`);
};

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();
  const participant = useContext(ParticipantContext);

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          component={RouterLink}
          src={user.avatar}
          to="/app/account"
        />
        <Typography
          className={classes.name}
          color="textPrimary"
          variant="h5"
        >
          {participant.name}
          {/* {user.name} */}
        </Typography>
        {/* <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.jobTitle}
        </Typography> */}
      </Box>
      <Divider />
      <Box p={2}>
        <NavBarItems /> 
        
      </Box>
      <Box flexGrow={1} />
      {/* <Box
        p={2}
        m={2}
        bgcolor="background.dark"
      >
        <Typography
          align="center"
          gutterBottom
          variant="h4"
        >
          Need more?
        </Typography>
        <Typography
          align="center"
          variant="body2"
        >
          Upgrade to PRO version and access 20 more screens
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          mt={2}
        >
          <Button
            color="primary"
            component="a"
            href="https://react-material-kit.devias.io"
            variant="contained"
          >
            See PRO version
          </Button>
        </Box>
      </Box> */}
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
