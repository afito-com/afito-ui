import React from 'react';
import { storiesOf } from '@storybook/react';
import Section from '.';

storiesOf('Primitives|Section', module).add('default', () => {
  return (
    <>
      <Section xs={20} sm={30} md={50} lg={100} xl={120} xxl={150}>
        Section 1
      </Section>
      <Section xs={20} sm={30} md={50} lg={100} xl={120} xxl={150}>
        Section 2
      </Section>
    </>
  );
});
