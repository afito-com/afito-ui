import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '.';

storiesOf('Primitives|Button', module)
  .add('primary', () => {
    return <Button level="primary">Let's go!</Button>;
  })
  .add('secondary', () => {
    return <Button level="secondary">Let's go!</Button>;
  })
  .add('outline', () => {
    return <Button level="outline">Let's go!</Button>;
  })
  .add('side by side', () => {
    return (
      <>
        <Button level="secondary">Let's go!</Button>
        <Button level="outline">Let's go!</Button>
      </>
    );
  });
