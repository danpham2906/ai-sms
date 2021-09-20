/* eslint-disable */
import {
  CircleMarker,
} from 'react-leaflet';

function VisitedMarker({ visitedPlaces }) {
    const visitedMarkerGroup = []

    const colorRed = { color: 'OrangeRed', weight: 10 };

    visitedPlaces.map((location) => {
      visitedMarkerGroup.push(
        <CircleMarker center={location} pathOptions={colorRed} radius={3} opacity={1}>
        </CircleMarker>
      );
    });

    return (
      <div>
        {visitedMarkerGroup}
      </div>
    );
}

export default VisitedMarker;