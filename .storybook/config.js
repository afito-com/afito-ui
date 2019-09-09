import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import '@storybook/addon-console';
import ThemeProvider from './../src/components/ThemeProvider';

const req = require.context('../src', true, /\.stories\.js$/);
function loadStories() {
  console.log(req.keys())
  req.keys().forEach(filename => req(filename));
}

addParameters({
  backgrounds: [
    { name: 'light grey', value: '#f7f9fb', default: true },
    { name: 'white', value: '#ffffff' },
    { name: 'blue', value: '#253c6e' },
    { name: 'green', value: '#57c59b' },
    { name: 'black', value: '#21242a' }
  ],
});

addDecorator((story) => (
  <ThemeProvider>
    {story()}
  </ThemeProvider>
))

configure(loadStories, module);
