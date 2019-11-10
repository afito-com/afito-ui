import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Card from '.';

storiesOf('Primitives|Card', module)
  .add('fixed', () => {
    return (
      <>
        <Card
          type="fixed"
          image="https://via.placeholder.com/350x150"
          onMouseEnter={action('mouse in')}
          onMouseLeave={action('mouse out')}
          onClick={action('click')}
        >
          Fixed card
        </Card>
        <Card
          type="fixed"
          image="https://via.placeholder.com/350x150"
          onMouseEnter={action('mouse in')}
          onMouseLeave={action('mouse out')}
          onClick={action('click')}
        >
          Fixed card
        </Card>
        <Card
          type="fixed"
          image="https://via.placeholder.com/350x150"
          onMouseEnter={action('mouse in')}
          onMouseLeave={action('mouse out')}
          onClick={action('click')}
        >
          Fixed card
        </Card>
      </>
    );
  })
  .add('nohover', () => {
    return (
      <Card
        type="nohover"
        image="https://via.placeholder.com/350x150"
        onMouseEnter={action('mouse in')}
        onMouseLeave={action('mouse out')}
        onClick={action('click')}
      >
        Card with no hover effect
      </Card>
    );
  })
  .add('small', () => {
    return (
      <Card
        type="small"
        image="https://via.placeholder.com/350x150"
        onMouseEnter={action('mouse in')}
        onMouseLeave={action('mouse out')}
        onClick={action('click')}
      >
        Small card example
      </Card>
    );
  });
