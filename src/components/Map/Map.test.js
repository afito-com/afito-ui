import React from 'react';
import ReactDOM from 'react-dom';
import Map from '.';
import properties from './model';
import ThemeProvider from '../ThemeProvider';
import 'jest-styled-components';
import config from '../../../config';

it('renders a building without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeProvider>
      <Map
        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${config.mapsKey}`}
        loadingElement={<div style={{ height: '100%', width: '100%' }} />}
        containerElement={<div style={{ height: '500px', width: '100%' }} />}
        mapElement={<div style={{ height: '100%', width: '100%' }} />}
        properties={properties}
        hoverId={1}
        center={{ lat: 75.44, lng: 74.22 }}
        onPropertyHover={() => {
          //update hover id
        }}
      />
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
