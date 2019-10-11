import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Form from 'react-validation/build/form';
import { linkTo } from '@storybook/addon-links';
import Searchbox from '.';
import { Heading } from '../Typography';

storiesOf('Searchbox', module).add('default', () => {
  const items = [
    { name: 'rutgers', value: 'rutgers_slug' },
    { name: 'rowan', value: 'rowan_slug' },
    { name: 'tcnj', value: 'tcnj_slug' }
  ];

  return (
    <Searchbox
      onItemClick={item => console.log(item.name)}
      items={items}
      name="school"
      hideLabel
      placeholder="School"
      label="School"
    ></Searchbox>
  );
});
