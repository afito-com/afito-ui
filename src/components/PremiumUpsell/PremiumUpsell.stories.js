import React from 'react';
import { storiesOf } from '@storybook/react';
import PremiumUpsell from '.';

storiesOf('Composites|PremiumUpsell', module).add('default', () => {
  return <PremiumUpsell title="Congratulations on uploading a new listing!" area_id={1} />;
});
