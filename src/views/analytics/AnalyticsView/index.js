/* eslint-disable */
import { useState, useRef } from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Map from './Map';
import DurationChart from './DurationChart';
import FrequencyChart from './FrequencyChart';
import MileageDuration from './MileageDuration';
import HeartRateVariability from './HeartRateVariability';
import BraceletBatteryLifeHistory from './BraceletBatteryLifeHistory';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  firstRow: {
    height: '300px',
  }
}));

const AppTaskView = () => {
  const classes = useStyles();
  const [range, setRange] = useState([]);
  const durationRef = useRef();
  const frequencyRef = useRef();

  const updateRange = (newRange) => {
    // console.log("updateRange @ index.js | Range: " + newRange);
    setRange(newRange);
    // console.log("updateRange @ index.js | setRange: " + range);
    // console.log("durationRef: " + JSON.stringify(durationRef));
    
    // console.log("newRange: " + newRange);
    if (!newRange) {
      durationRef.current.switchRange(false);
      frequencyRef.current.switchRange(false);
    } else if (!newRange.length) {
      durationRef.current.switchRange(false);
      frequencyRef.current.switchRange(false);
    } else {
      durationRef.current.switchRange(true);
      frequencyRef.current.switchRange(true);
    }
  };

  return (
    <Page
      className={classes.root}
      title="AppTask"
    >
      {/* <GridList maxWidth={false} cols={3}> */}
      <Container maxWidth={false}>
        <Grid
          container
          spacing={1}
          // direction="row"
        >
          <Grid
            item
            lg={8}
            sm={6}
            xl={8}
            xs={12}
          >
            <Map />
          </Grid>
          <Grid
            item
            lg={2}
            sm={6}
            xl={2}
            xs={12}
          >
            <DurationChart ref={durationRef} />
          </Grid>
          <Grid
            item
            lg={2}
            sm={6}
            xl={2}
            xs={12}
          >
            <FrequencyChart ref={frequencyRef} />
          </Grid>

          <Grid
            item
            lg={12}
            sm={6}
            xl={12}
            xs={12}
          >
            <MileageDuration
              updateRange={updateRange}
            />
          </Grid>
          <Grid
            item
            lg={12}
            sm={6}
            xl={12}
            xs={12}
          >
            <HeartRateVariability
              range={range}
            />
          </Grid>
          <Grid
            item
            lg={12}
            sm={6}
            xl={12}
            xs={12}
          >
            <BraceletBatteryLifeHistory
              range={range}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default AppTaskView;
