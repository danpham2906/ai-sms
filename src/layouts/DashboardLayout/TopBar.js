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
          <Typography component="h1" align="center" noWrap className={classes.appName}>
            AI-SMS
          </Typography>
        </RouterLink>

        <Typography component="h1" color="inherit" align="center" noWrap className={classes.title}>
          {titleContext.name}
        </Typography>

        <ClickAwayListener onClickAway={handleClickAway}>
          <div>
            <List
              component="nav"
              className={classes.root}
            >
              <ListItem button onClick={handleClick}>
                  <Avatar
                    className={classes.avatar}
                    src={officer.avatar}
                  />
                  <Typography
                    className={classes.name}
                    color="inherit"
                    variant="h5"

                  >
                    {officer.name}
                  </Typography>
                  {open ? <ExpandMore /> : <ExpandLess />}
              </ListItem>
            </List>


            {open ?
              <List
                className={`${classes.caseworkerDropdown} ${classes.root}`}
              >
                <ListItem button component={RouterLink} to="/login" >
                  <ExitToAppIcon />
                  <ListItemText primary="Log out" className={classes.listItemText} />
                </ListItem>
              </List> : ''}
          </div>
        </ClickAwayListener>

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
