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
  TextField,
  Button
} from '@material-ui/core';
// import { ParticipantContext } from '../../../context/ParticipantContext';
import { MuiChat, ChatController } from 'chat-ui-react';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.grey,
    height: 70,
    width: 70,
    margin: '20% 35%',
  },
  textFieldContainer: {
    'flex-grow': 1,
    padding: '20px 20px 20px 20px',
  },
  textField: {
    width: '100%'
  },
  buttonContainer: {
    'flex-grow': 1,
    margin: '2% 0%',
  },
  flexColScroll: {
    'flex-grow': 1,
    overflow: 'scroll',
    'min-height': '100%',
    height:'100%',
    'overflow-x': 'hidden',
  },
  flexSection: {
    'flex-grow': 1,
    display: 'flex',
    'flex-direction': 'column',
    'min-height': 0,
    // height: 320,
    height: 350,
    padding: '10px 3px 0px 5px',
  }
}));

const Messaging = ({ className, ...rest }) => {
  const classes = useStyles();
  const [chatCtl] = React.useState(new ChatController());

  React.useMemo(async () => {
    await chatCtl.addMessage({
      type: 'text',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      self: false,
    });
    chatCtl.setActionRequest({ type: 'text', always: true }, (res) =>
      chatCtl.addMessage({
        type: 'text',
        content: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        self: false,
      }),
    );
  }, [chatCtl]);

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Typography
        color="textSecondary"
        gutterBottom
        variant="h6"
        >
            MESSAGING
        </Typography>
        <Grid container className={classes.flexSection}>
            
            {/* <Grid
                item
                className={classes.flexColScroll}
            >
                <Typography
                    color="textSecondary"
                    variant="body1"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
                
            </Grid> */}
            <MuiChat  chatController={chatCtl} />
        </Grid>
        {/* <Grid
          container
          spacing={2}
        >
          <Grid item lg={10} className={classes.textFieldContainer}>
            <TextField id="outlined-basic" placeholder="Write a message.." variant="outlined"  className={classes.textField}/>
          </Grid>
          <Grid item lg={2} className={classes.buttonContainer}>
            <Button variant="contained" color="secondary">
                SEND
            </Button>
          </Grid>
        </Grid> */}
      </CardContent>
    </Card>
  );
};

Messaging.propTypes = {
  className: PropTypes.string
};

export default Messaging;
