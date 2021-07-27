/* eslint-disable */
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useEffect, useContext } from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';
import { ParticipantProvider, ParticipantContext } from './context/ParticipantContext';
import { TitleProvider } from './context/TitleContext';

const App = () => {
  const routing = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <TitleProvider>
        <ParticipantProvider>
          <GlobalStyles />
          {routing}
        </ParticipantProvider>
      </TitleProvider>
    </ThemeProvider>
  );
};

export default App;
