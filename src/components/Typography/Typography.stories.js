import React from 'react';
import { storiesOf } from '@storybook/react';
import { Heading, Text } from '.';

storiesOf('Heading', module).add('overview', () => {
  return (
    <>
      <Heading level={1}>Heading 1</Heading>
      <Heading level={2}>Heading 2</Heading>
      <Heading level={3}>Heading 3</Heading>
      <Heading level={4}>Heading 4</Heading>
      <Heading level={5}>Heading 5</Heading>
    </>
  );
});

storiesOf('Text', module)
  .add('normal', () => {
    return <Text type="normal">Example of normal body text</Text>;
  })
  .add('small', () => {
    return <Text>Example of small body text</Text>;
  });
