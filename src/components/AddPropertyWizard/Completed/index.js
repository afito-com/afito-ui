import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Text } from '../../Typography';
import Button from '../../Button';

Completed.propTypes = {
  onCompleted: PropTypes.func.isRequired
};

function Completed({ onCompleted }) {
  return (
    <div>
      <Heading level={3}>Congratulations!</Heading>
      <Text>You&apos;ve successfully uploaded your property.</Text>
      <br />
      <Button level="secondary" onClick={onCompleted}>
        Done
      </Button>
    </div>
  );
}

export default Completed;
