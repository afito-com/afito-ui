import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '../../ThemeProvider';
import BuildingDetails from '.';

describe('<BuildingDetails />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider>
        <BuildingDetails property={{}} areas={[]} onSubmit={() => {}} onChange={() => {}} setHometype={() => {}} />
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
