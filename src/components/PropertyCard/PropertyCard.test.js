import React from 'react';
import ReactDOM from 'react-dom';
import PropertyCard from '.';
import models from './model';
import ThemeProvider from '../ThemeProvider';
import 'jest-styled-components';

it('renders a building without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeProvider>
      <PropertyCard
        {...models[0]}
        onSaveProperty={() => console.log('property saved')}
        onRemoveSavedProperty={() => console.log('property unsaved')}
      />
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders a property without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeProvider>
      <PropertyCard
        {...models[1]}
        onSaveProperty={() => console.log('property saved')}
        onRemoveSavedProperty={() => console.log('property unsaved')}
      />
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
