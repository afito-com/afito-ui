import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Map from '.';
import res from './response.json';
import config from '../../../config';

function MapWithState(props) {
  const [hoveredProperty, setHoveredProperty] = useState();
  return (
    <Map
      {...props}
      hoveredProperty={hoveredProperty}
      onPropertyHover={p => {
        setHoveredProperty(p);
      }}
      onMarkerClick={() => {
        // route to property
      }}
    />
  );
}

storiesOf('Primitives|Map', module).add('default', () => {
  const center = JSON.parse(res.area.location);

  return (
    <MapWithState
      isMarkerShown
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${config.mapsKey}`}
      loadingElement={<div style={{ height: '100%', width: '100%' }} />}
      containerElement={<div style={{ height: '500px', width: '100%' }} />}
      mapElement={<div style={{ height: '100%', width: '100%' }} />}
      properties={res.properties}
      center={center}
    />
  );
});
