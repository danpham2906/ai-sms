/* eslint-disable */
import L from 'leaflet';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BatteryAlertIcon from '@material-ui/icons/BatteryAlert';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { renderToStaticMarkup } from 'react-dom/server';

const markerHtmlStyles = `
  background-color: white;
  width: 3rem;
  height: 3rem;
  display: block;
  left: -1.5rem;
  top: -1.5rem;
  position: relative;
  border-radius: 3rem 3rem 0;
  transform: rotate(45deg);
  border: 1px solid #000000`;
  
// export const MarkerIcon = new L.Icon({
//     // iconUrl: styled(LocationOnIcon) ({color: myCustomColour}),
//     iconUrl: icon,
//     iconRetinaUrl: icon,
//     iconAnchor: null,
//     popupAnchor: null,
//     shadowUrl: null,
//     shadowSize: null,
//     shadowAnchor: null,
//     iconSize: new L.Point(40,75),
//     iconAnchor: [20, 47],
//     // html: `<span style="${markerHtmlStyles}" />`
//     // className: 'leaflet-div-icon'
// });

export const MarkerIcon = L.divIcon({
    // className: "my-custom-pin",
    iconAnchor: [0, 26],
    labelAnchor: [-6, 0],
    popupAnchor: [0, -36],
    html: `<span style="${markerHtmlStyles}" />`
});

// const markerSize = 65;
// const icon = renderToStaticMarkup(<LocationOnIcon stroke={"grey"} stroke-width={0.5} style={{ color: 'white', fontSize: markerSize }} />);

// export const MarkerIcon = L.divIcon({
//     html: icon,
//     iconSize: new L.Point(40,75),
//     iconAnchor: [markerSize/2, markerSize*4/5],
// });

const markerEmptySize = 45;
const icon = renderToStaticMarkup(<LocationOnIcon stroke={"grey"} stroke-width={0.5} style={{ color: 'CornflowerBlue', fontSize: markerEmptySize }} />);

export const MarkerEmptyIcon = L.divIcon({
    html: icon,
    iconSize: new L.Point(40,75),
    iconAnchor: [markerEmptySize/2, markerEmptySize*3/4],
});

const markerSecondarySize = 25;
const placeAlertIcon = renderToStaticMarkup(<AnnouncementIcon style={{ color: 'DarkTurquoise', fontSize: markerSecondarySize }} />);

export const MarkerPlaceAlertIcon = L.divIcon({
    html: placeAlertIcon,
    iconSize: new L.Point(40,75),
    iconAnchor: [markerSecondarySize/2, markerSecondarySize*3/2+2],
});

const heartRateIcon = renderToStaticMarkup(<FavoriteIcon style={{ color: 'LightCoral', fontSize: markerSecondarySize }} />);

export const MarkerHeartRateIcon = L.divIcon({
    html: heartRateIcon,
    iconSize: new L.Point(40,75),
    iconAnchor: [markerSecondarySize/2, markerSecondarySize*3/2+2],
});

const outOfBatteryIcon = renderToStaticMarkup(<BatteryAlertIcon style={{ color: 'DarkGray', fontSize: markerSecondarySize }} />);

export const MarkerOutOfBatteryIcon = L.divIcon({
    html: outOfBatteryIcon,
    iconSize: new L.Point(40,75),
    iconAnchor: [markerSecondarySize/2, markerSecondarySize*3/2+2],
});

const calendarIcon = renderToStaticMarkup(<DateRangeIcon style={{ color: 'DarkSlateBlue', fontSize: markerSecondarySize }} />);

export const MarkerCalendarIcon = L.divIcon({
    html: calendarIcon,
    iconSize: new L.Point(40,75),
    iconAnchor: [markerSecondarySize/2, markerSecondarySize*3/2+2],
});

// export { MarkerIcon };
