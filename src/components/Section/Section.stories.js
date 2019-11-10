import React from 'react';
import { storiesOf } from '@storybook/react';
import Section from '.';

storiesOf('Primitives|Section', module).add('default', () => {
  return (
    <>
      <Section>Section 1</Section>
      <Section>Section 2</Section>
    </>
  );
});
