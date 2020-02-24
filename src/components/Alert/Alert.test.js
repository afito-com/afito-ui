import React from 'react';
import ReactDOM from 'react-dom';
import Alert from '.';
import ThemeProvider from '../ThemeProvider';

describe('<Alert />', () => {
  it('renders info alert', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider>
        <Alert type="info">Hello World</Alert>
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders success alert', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider>
        <Alert type="success">Hello World</Alert>
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders warning alert', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider>
        <Alert type="warning">Hello World</Alert>
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders danger alert', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider>
        <Alert type="danger">Hello World</Alert>
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders default alert', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider>
        <Alert type="">Hello World</Alert>
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
