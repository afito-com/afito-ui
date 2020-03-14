import React from 'react';
import { storiesOf } from '@storybook/react';
//import { action } from '@storybook/addon-actions';
import Table from '.';

const floorplans = [
  {
    id: '1',
    name: '1 Bedroom',
    price: '200',
    beds: 1,
    baths: 1,
    square_footage: '1400',
    onRowClick: () => console.log('onRowClick')
  },
  {
    id: '2',
    name: 'Studio',
    price: '300',
    beds: 0,
    baths: 1,
    square_footage: '900',
    onRowClick: () => console.log('onRowClick')
  },
  {
    id: '3',
    name: '1c',
    price: '0',
    beds: null,
    baths: null,
    square_footage: '1500',
    onRowClick: () => console.log('onRowClick')
  },
  {
    id: '4',
    name: '2a',
    price: '1000',
    beds: 11,
    baths: 11,
    square_footage: '3000',
    onRowClick: () => console.log('onRowClick')
  },
  {
    id: '5',
    name: '2b',
    price: '3000',
    beds: 2,
    baths: 11,
    square_footage: '987',
    onRowClick: () => console.log('onRowClick')
  },
  {
    id: '6',
    name: '3a',
    price: '4400',
    beds: 3,
    baths: 3,
    square_footage: '15000',
    onRowClick: () => console.log('onRowClick')
  }
];

const rows = floorplans.map(f => {
  return {
    ...f,
    price: `$${f.price}`,
    square_footage: `${f.square_footage}ft&sup2;`
  };
});

storiesOf('Primitives|Table', module)
  .add('default', () => {
    return (
      <Table
        rows={rows}
        headers={[
          'Name',
          'Price',
          <img key="Beds" width="50" src="https://afito-production-bucket.s3.amazonaws.com/static/icons/bed.png" />,
          <img key="Baths" width="50" src="https://afito-production-bucket.s3.amazonaws.com/static/icons/bath.png" />,
          <img
            key="Square feet"
            width="50"
            src="https://afito-production-bucket.s3.amazonaws.com/static/icons/area.png"
          />
        ]}
      />
    );
  })
  .add('sortable', () => {
    return (
      <Table
        sortable
        rows={rows}
        headers={[
          'Name',
          'Price',
          <img key="Beds" width="50" src="https://afito-production-bucket.s3.amazonaws.com/static/icons/bed.png" />,
          <img key="Baths" width="50" src="https://afito-production-bucket.s3.amazonaws.com/static/icons/bath.png" />,
          <img
            key="Square feet"
            width="50"
            src="https://afito-production-bucket.s3.amazonaws.com/static/icons/area.png"
          />
        ]}
      />
    );
  });
