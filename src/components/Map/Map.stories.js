import React from 'react';
import { storiesOf } from '@storybook/react';
import Map from '.';
import { properties, area } from './data';
import { boolean } from '@storybook/addon-knobs';
import config from '../../../config';

storiesOf('Primitives|Map', module).add('default', () => {
  const hoverId = boolean('Hover', true) && 1219; //1219;
  const center = area[0].location;

  return (
    <Map
      isMarkerShown
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${config.mapsKey}`}
      loadingElement={<div style={{ height: '100%', width: '100%' }} />}
      containerElement={<div style={{ height: '500px', width: '100%' }} />}
      mapElement={<div style={{ height: '100%', width: '100%' }} />}
      properties={properties}
      hoverId={hoverId}
      center={center}
      onPropertyHover={() => {
        //update hover id
      }}
    />
  );
});
