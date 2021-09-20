import { useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  makeStyles
} from '@material-ui/core';
import Logo from 'src/components/Logo';
import Typography from '@material-ui/core/Typography';
import { TitleContext } from '../../context/TitleContext';

const useStyles = makeStyles(({
  root: {},
  toolbar: {
    height: 64
  },
  appName: {
    color: 'white',
    'font-size': '1.25rem'
  },
}));

const TopBar = ({ className, ...rest }) => {
  const classes = useStyles();
  const titleContext = useContext(TitleContext);

  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
    >
      <Toolbar className={classes.toolbar}>
        <RouterLink
          to="/login"
        >
          <Typography component="h1" align="center" noWrap className={classes.appName}>
            AI-SMS
          </Typography>
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string
};

export default TopBar;
