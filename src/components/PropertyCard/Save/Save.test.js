import React from 'react';
import ReactDOM from 'react-dom';
import Save from '.';
import ThemeProvider from '../../ThemeProvider';

describe('<Save />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider>
        <Save></Save>
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
