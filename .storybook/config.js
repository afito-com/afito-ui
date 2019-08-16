import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import ThemeProvider from './../src/components/ThemeProvider';

const req = require.context('../src', true, /\.stories\.js$/);
function loadStories() {
  console.log(req.keys())
  req.keys().forEach(filename => req(filename));
}

addDecorator((story) => (
  <ThemeProvider>
    {story()}
  </ThemeProvider>
))

configure(loadStories, module);
