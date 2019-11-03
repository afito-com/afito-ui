import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Map from '.';
import { properties, area } from './data';
import res from './response.json';
import { boolean, number } from '@storybook/addon-knobs';
import config from '../../../config';

console.log({ res });

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
  const center = area[0].location;

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
