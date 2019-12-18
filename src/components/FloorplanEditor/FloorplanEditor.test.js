import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '../ThemeProvider';
import FloorplanEditor from '.';
import res from './response.json';

describe('FloorplanEditor', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider>
        <FloorplanEditor
          floorplans={res.property.floorplans}
          onSubmit={() => {}}
          onToggleActive={() => {}}
          onTogglePricing={() => {}}
        />
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
