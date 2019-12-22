import React from 'react';
import PropTypes from 'prop-types';
import PropertyDetails from '../PropertyDetails';
import BuildingDetails from '../BuildingDetails';

import Button from '../../Button';
import { Row } from '../../Grid';
import { Heading, Text } from '../../Typography';

Details.propTypes = {
  property: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  setHometype: PropTypes.func.isRequired,
  areas: PropTypes.array.isRequired,
  currScreen: PropTypes.number.isRequired,
  promptExit: PropTypes.func.isRequired,
  prevScreen: PropTypes.func.isRequired
};

function Details({ property, areas, onSubmit, onChange, promptExit, currScreen, prevScreen, setHometype }) {
  return (
    <>
      {property.hometype === null && (
        <>
          <Heading level={4}>Does your property have multiple floorplans or units available?</Heading>
          <Text>Please let us know if your listing has different units within the same building.</Text>
          <Row style={{ marginTop: '200px' }}>
            <Button
              level="danger"
              onClick={() => {
                setHometype('');
              }}
            >
              No
            </Button>
            <Button
              level="secondary"
              onClick={() => {
                setHometype('building');
              }}
            >
              Yes
            </Button>
          </Row>
        </>
      )}
      {property.hometype === 'building' && (
        <BuildingDetails
          property={property}
          areas={areas}
          onSubmit={onSubmit}
          onChange={onChange}
          promptExit={promptExit}
          currScreen={currScreen}
          prevScreen={prevScreen}
          setHometype={setHometype}
        />
      )}
      {property.hometype === '' && (
        <PropertyDetails
          property={property}
          areas={areas}
          onSubmit={onSubmit}
          onChange={onChange}
          promptExit={promptExit}
          currScreen={currScreen}
          prevScreen={prevScreen}
          setHometype={setHometype}
        />
      )}
    </>
  );
}

export default Details;
