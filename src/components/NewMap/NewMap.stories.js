import React from 'react';
import { storiesOf } from '@storybook/react';
import NewMap from '.';
import res from './response.json';
import LoadingBlock from '../LoadingBlock';

storiesOf('Primitives|NewMap', module).add('default', () => {
  const center = JSON.parse(res.area.location);

  return (
    <NewMap
      loadingElement={<LoadingBlock quiet />}
      height="400px"
      width="100%"
      zoom={1}
      properties={res.properties}
      center={center}
      onPropertyHover={() => {
        console.log('property hover');
      }}
      onMarkerClick={() => {
        console.log('marker click');
      }}
      onCenterChanged={center => {
        console.log('new center: ', center);
      }}
    />
  );
});
