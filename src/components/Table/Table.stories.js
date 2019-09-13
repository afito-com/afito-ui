import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, number } from '@storybook/addon-knobs';
import bedIcon from '../../assets/icons/bed.png';
import bathIcon from '../../assets/icons/bath.png';
import areaIcon from '../../assets/icons/area.png';
import Table from '.';

storiesOf('Table', module).add('default', () => {
  const floorplans = [
    { name: '1 Bedroom', price: '200', beds: '1', baths: '1', square_footage: '1400' },
    { name: 'Studio', price: '300', beds: '0', baths: '1', square_footage: '900' },
    { name: '1c', price: '0', beds: '', baths: '', square_footage: '1500' },
    { name: '2a', price: '1000', beds: '11', baths: '11', square_footage: '3000' },
    { name: '2b', price: '3000', beds: '2', baths: '11', square_footage: '987' },
    { name: '3a', price: '4400', beds: '3', baths: '3', square_footage: '15000' }
  ];

  const rows = floorplans.map(f => {
    return {
      ...f,
      price: `$${f.price}`,
      square_footage: `${f.square_footage}ft&sup2;`
    };
  });

  return (
    <Table
      rows={rows}
      headers={[
        'Name',
        'Price',
        <img width="50" src={bedIcon} />,
        <img width="50" src={bathIcon} />,
        <img width="50" src={areaIcon} />
      ]}
    />
  );
});
