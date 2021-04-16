/* eslint-disable */
import React, { useState } from 'react';
import {
  CircleMarker,
  Tooltip
} from 'react-leaflet';

function VisitedMarker({ visitedPlaces }) {
    const visitedMarkerGroup = []

    const colorRed = { color: 'OrangeRed', weight: 10 };

    visitedPlaces.map((location) => {
      visitedMarkerGroup.push(
        <CircleMarker center={location} pathOptions={colorRed} radius={3} opacity={1}>
          {/* <Tooltip direction='bottom' opacity={1} offset={[0, 7]}>
              {location}
          </Tooltip> */}
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