import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    background: {
      dark: '#F4F6F8',
      default: colors.common.white,
      paper: colors.common.white,
      light: '#F4F6F8',
    },
    primary: {
      main: 'rgb(34, 43, 54)',
    },
    secondary: {
      main: colors.lightBlue[800]
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[900],
      link: colors.lightBlue[800],
      sectionTitle: colors.lightBlue[800],
    }
  },
  shadows,
  typography
});

export default theme;
