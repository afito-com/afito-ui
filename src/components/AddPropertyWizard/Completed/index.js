import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Text } from '../../Typography';
import Button from '../../Button';

Completed.propTypes = {
  property: PropTypes.object.isRequired,
  onCompleted: PropTypes.func.isRequired
};

function Completed({ property, onCompleted }) {
  return (
    <div>
      <Heading level={3}>Congratulations!</Heading>
      <Text>You&apos;ve successfully uploaded {property.line1}.</Text>
      <Button level="success" onClick={onCompleted}>
        Done
      </Button>
    </div>
  );
}

export default Completed;
