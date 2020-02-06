import React from 'react';
import ReactDOM from 'react-dom';
import NewMap from '.';
import res from './response.json';
import LoadingBlock from '../LoadingBlock';
import ThemeProvider from '../ThemeProvider';
import 'jest-styled-components';

it('renders a building without crashing', () => {
  const div = document.createElement('div');
  const center = JSON.parse(res.area.location);

  ReactDOM.render(
    <ThemeProvider>
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
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
