import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '.';

describe('<ThemeProvider />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<ThemeProvider></ThemeProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
