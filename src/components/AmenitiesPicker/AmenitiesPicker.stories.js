import React from 'react';
import { storiesOf } from '@storybook/react';
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

const mockProperty = {
  amenities: []
};

storiesOf('Composites|AmenitiesPicker', module)
  .add('default', () => {
    return (
      <AmenitiesPicker
        amenities={mockAmenities}
        property={mockProperty}
        setAmenity={amenities => {
          console.log({ amenities });
          // setProperty({ ...property, amenities });
        }}
        onSubmit={() => {}}
      />
    );
  })
  .add('wizard', () => {
    return (
      <AmenitiesPicker
        amenities={mockAmenities}
        property={mockProperty}
        setAmenity={amenities => {
          console.log({ amenities });
          // setProperty({ ...property, amenities });
        }}
        onSubmit={() => {}}
        wizard={true}
      />
    );
  });
