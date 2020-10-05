import React from 'react';
import ReactDOM from 'react-dom';
import Status from '.';
import ThemeProvider from '../../ThemeProvider';

describe('<Status />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider>
        <Status>Leased</Status>
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
