import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '../ThemeProvider';
import { Heading, Text } from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <ThemeProvider>
      <Heading level={1}>Heading 1</Heading>
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <ThemeProvider>
      <Text>text</Text>
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <ThemeProvider>
      <Text type="normal">text</Text>
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
