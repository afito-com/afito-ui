import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '../../ThemeProvider';
import AmenitiesPicker from '.';

const mockAmenities = [
  {
    id: 1,
    amenity_icon: 'https://afito-production-bucket.s3.us-east-2.amazonaws.com/static/icons/wd_unit.png',
    amenity_name: 'Washer/Dryer'
  },
  {
    id: 2,
    amenity_icon: 'https://afito-production-bucket.s3.us-east-2.amazonaws.com/static/icons/airconditioning.png',
    amenity_name: 'Air Conditioning'
  },
  {
    id: 3,
    amenity_icon: 'https://afito-production-bucket.s3.us-east-2.amazonaws.com/static/icons/wifi.png',
    amenity_name: 'Free Wifi'
  }
];

describe('<AmenitiesPicker />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const mockProperty = {
      amenities: []
    };

    ReactDOM.render(
      <ThemeProvider>
        <AmenitiesPicker amenities={mockAmenities} property={mockProperty} setAmenity={() => {}} onSubmit={() => {}} />
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Free Wifi is checked', () => {
    const div = document.createElement('div');
    const mockProperty = {
      amenities: [3]
    };

    ReactDOM.render(
      <ThemeProvider>
        <AmenitiesPicker amenities={mockAmenities} property={mockProperty} setAmenity={() => {}} onSubmit={() => {}} />
      </ThemeProvider>,
      div
    );

    //TODO: check if free wifi is checked

    ReactDOM.unmountComponentAtNode(div);
  });
});
