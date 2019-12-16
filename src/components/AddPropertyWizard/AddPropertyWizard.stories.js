import React from 'react';
import { storiesOf } from '@storybook/react';
import AddPropertyWizard from '.';

storiesOf('Composites|AddPropertyWizard', module).add('default', () => {
  return <AddPropertyWizard />;
});
