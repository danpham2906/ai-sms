/* eslint-disable */
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  buttonRed: {
    color: 'white',
    backgroundColor: 'IndianRed',
    padding: '2px 7px 2px 7px',
    '&:hover': {
      backgroundColor: 'SandyBrown',
    },
  },
  buttonGreen: {
    color: 'white',
    backgroundColor: 'YellowGreen',
    padding: '2px 7px 2px 7px',
    '&:hover': {
      backgroundColor: 'MediumSeaGreen',
    },
  },
  buttonBlue: {
    color: 'white',
    backgroundColor: 'SteelBlue',
    padding: '2px 7px 2px 7px',
    '&:hover': {
      backgroundColor: 'SkyBlue',
    },
  },
}));

export default function StatusButton({ status }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef(null);
  const [statusText, setStatusText] = useState(status);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const changeClass = (text) => {
    // console.log("statusText: " + statusText);
    if (text === "Pending") {
      return classes.buttonBlue;
    } else if (text === "Approved") {
      return classes.buttonGreen;
    } else if (text === "Declined") {
      return classes.buttonRed;
    }
  };

  function printObj(obj) {
    for (var i in obj) {
        console.log(i + " - " + obj[i]);
    }
}

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    // printObj(event.currentTarget);
    setStatusText(event.currentTarget.textContent);
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          variant="contained"
          className={changeClass(statusText)}
        >
          {statusText}
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}>Pending</MenuItem>
                    <MenuItem onClick={handleClose}>Approved</MenuItem>
                    <MenuItem onClick={handleClose}>Declined</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}