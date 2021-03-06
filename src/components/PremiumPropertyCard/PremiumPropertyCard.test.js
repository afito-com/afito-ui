import React from 'react';
import ReactDOM from 'react-dom';
import PremiumPropertyCard from '.';
import ThemeProvider from '../ThemeProvider';
import models from './model';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeProvider>
      <PremiumPropertyCard
        {...models[0]}
        savedProperties={[]}
        onSaveProperty={() => console.log('save property')}
        onRemoveSavedProperty={() => console.log('remove saved property')}
      />
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeProvider>
      <PremiumPropertyCard
        {...models[1]}
        savedProperties={[]}
        onSaveProperty={() => console.log('save property')}
        onRemoveSavedProperty={() => console.log('remove saved property')}
      />
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
