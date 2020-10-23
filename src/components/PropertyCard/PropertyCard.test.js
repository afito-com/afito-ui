import React from 'react';
import ReactDOM from 'react-dom';
import PropertyCard from '.';
import Save from './Save';
import models from './model';
import { mount } from 'enzyme';
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
          showUnavailableStatus={true}
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

  it('calls onSaveProperty when save button is clicked', () => {
    const mockSaveCallBack = jest.fn(setSaved => setSaved(true));
    const mockRemoveSaveCallBack = jest.fn(setSaved => setSaved(false));
    const propertyCard = mount(
      <ThemeProvider>
        <PropertyCard
          {...models[1]}
          savedProperties={[]}
          onSaveProperty={mockSaveCallBack}
          onRemoveSavedProperty={mockRemoveSaveCallBack}
        />
      </ThemeProvider>
    );

    propertyCard.find(Save).simulate('click');
    expect(mockSaveCallBack.mock.calls.length).toEqual(1);
    expect(mockRemoveSaveCallBack.mock.calls.length).toEqual(0);
  });

  it('calls onRemoveSavedProperty when saved button is clicked when property is already saved', () => {
    const mockSaveCallBack = jest.fn(setSaved => setSaved(true));
    const mockRemoveSaveCallBack = jest.fn(setSaved => setSaved(false));
    const propertyCard = mount(
      <ThemeProvider>
        <PropertyCard
          {...models[1]}
          savedProperties={[]}
          onSaveProperty={mockSaveCallBack}
          onRemoveSavedProperty={mockRemoveSaveCallBack}
        />
      </ThemeProvider>
    );

    propertyCard.find(Save).simulate('click');
    propertyCard.find(Save).simulate('click');
    expect(mockSaveCallBack.mock.calls.length).toEqual(1);
    expect(mockRemoveSaveCallBack.mock.calls.length).toEqual(1);
  });
});
