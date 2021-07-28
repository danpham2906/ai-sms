/* eslint-disable */
import { useState, useContext, useEffect } from 'react';
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
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { TitleContext } from '../../context/TitleContext';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const officer = {
  avatar: '/static/images/avatars/avatar02.png',
  name: 'John Roe'
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
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
  },
  caseworkerDropdown: {
    position: 'absolute',
    top: '64px',
    left: 'calc(100% - 210px)',
    width: '180px',
    padding: '0px 10px 5px 10px',
    margin: '0px 10px 0px 10px',
    transition: 'opacity 0.3s',
    opacity: 1,
  },
  listItemText: {
    padding: '0px 0px 0px 10px',
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
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

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

        {/* <Box flexDirection="row">
          <Avatar
            className={classes.avatar}
            // component={RouterLink}
            src={officer.avatar}
          // to="/app/documents"
          />
        </Box>
        <Box flexDirection="row" button
          onClick={handleClick}>
          <Typography
            className={classes.name}
            color="inherit"
            variant="h5"

          >
            {officer.name}
          </Typography>
        </Box> */}

        <ClickAwayListener onClickAway={handleClickAway}>
          <div>
            <List
              component="nav"
              // aria-labelledby="nested-list-subheader"
              className={classes.root}
            >
              <ListItem button onClick={handleClick}>
                {/* <Box flexDirection="row"> */}
                  <Avatar
                    className={classes.avatar}
                    // component={RouterLink}
                    src={officer.avatar}
                  // to="/app/documents"
                  />
                {/* </Box> */}
                {/* <Box flexDirection="row"> */}
                  <Typography
                    className={classes.name}
                    color="inherit"
                    variant="h5"

                  >
                    {officer.name}
                  </Typography>
                {/* </Box> */}
                {/* <Box flexDirection="row"> */}
                  {open ? <ExpandMore /> : <ExpandLess />}
                {/* </Box> */}
              </ListItem>
            </List>


            {open ?
              <List
                // component="div"
                // disablePadding
                className={`${classes.caseworkerDropdown} ${classes.root}`}
              >
                <ListItem button component={RouterLink} to="/login" >
                  <ExitToAppIcon />
                  <ListItemText primary="Log out" className={classes.listItemText} />
                </ListItem>
              </List> : ''}
          </div>
        </ClickAwayListener>

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
        </Hidden> */}
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default TopBar;
