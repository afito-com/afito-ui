import React from 'react';
import ReactDOM from 'react-dom';
import PropertyCard from '.';
import models from './model';
import ThemeProvider from '../ThemeProvider';

describe('<PropertyCard />', () => {
  it('renders a building without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider>
        <PropertyCard
          {...models[0]}
          savedProperties={[]}
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
          savedProperties={[]}
          onSaveProperty={() => console.log('property saved')}
          onRemoveSavedProperty={() => console.log('property unsaved')}
        />
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders a property with a leased banner', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider>
        <PropertyCard
          {...models[1]}
          leased={true}
          savedProperties={[]}
          onSaveProperty={() => console.log('property saved')}
          onRemoveSavedProperty={() => console.log('property unsaved')}
        />
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders a condensed property card', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider>
        <PropertyCard
          {...models[1]}
          isCondensed
          savedProperties={[]}
          onSaveProperty={() => console.log('property saved')}
          onRemoveSavedProperty={() => console.log('property unsaved')}
        />
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
