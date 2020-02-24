import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '../../ThemeProvider';
import GeoSearch from '.';

describe('<GeoSearch />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider>
        <GeoSearch property={{}} onGeoSearch={() => {}} onSubmit={() => {}} onCancel={() => {}} />
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
