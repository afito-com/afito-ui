import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import ThemeProvider from '../../ThemeProvider';

describe('Menu', () => {
  it('renders open menu on dark background', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <ThemeProvider>
        <Menu dark={true} open={true} />
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders open menu on light background', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <ThemeProvider>
        <Menu dark={false} open={false} />
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders closed menu on dark background', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <ThemeProvider>
        <Menu dark={true} open={false} />
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders open menu on light background', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <ThemeProvider>
        <Menu dark={false} open={true} />
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
