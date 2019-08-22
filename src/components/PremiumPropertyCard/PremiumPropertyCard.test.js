import React from 'react';
import ReactDOM from 'react-dom';
import PropertyCard from '.';
import property from './model';

it('renders a building without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PropertyCard property={property} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders a property without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <PropertyCard
      property={{
        user_id: 50,
        email: 'thomasbonanni@afito.com',
        phone_number: '',
        profile_image: 'https://s3.us-east-2.amazonaws.com/afito-development-bucket/utilities/BlankUser.png',
        name: '{"first":"Tom","last":"Bonanni"}',
        address: '{"line1":"3 Turtle Creek Drive","line2":"","city":"Mullica Hill","state":"NJ"}',
        area_id: 1,
        lat: '39.7305232',
        lng: '-75.2051269',
        image_url: 'https://afito-production-bucket.s3.amazonaws.com/47/ab735050-c8bf-11e8-b39d-6d8f781deb5f.jpeg',
        description: 'n',
        beds: 1,
        baths: 0.5,
        parking: false,
        price: 3000,
        hometype: 'condo',
        images: '[]',
        max_occupancy: 1,
        square_footage: 1000,
        property_name: null,
        contacts: '0',
        area_description: 'Rutgers University New Brunswick the State University of New Jersey',
        area_name: 'Rutgers University',
        area_image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQitSc_So_fiflxnusMnLDQAjsBMNAg6vd7tRhsB8eylsiQ7GFdbw',
        area_location: '{"lat":40.50016129999999,"lng":-74.4492973}',
        floorplans: [],
        rank: '157'
      }}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
