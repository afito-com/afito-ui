import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Heading } from '../Typography';

import FloorplanForm from './FloorplanForm';
import FloorplanTable from './FloorplanTable';

const Wrapper = styled.div`
  text-align: left;
  width: 100%;
`;

FloorplanEditor.propTypes = {
  floorplans: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      beds: PropTypes.number.isRequired,
      baths: PropTypes.number.isRequired,
      square_footage: PropTypes.number,
      contact_for_pricing: PropTypes.bool
    })
  ).isRequired,
  onToggleActive: PropTypes.func.isRequired,
  onTogglePricing: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

function FloorplanEditor({ floorplans, onSubmit, onToggleActive, onTogglePricing }) {
  return (
    <Wrapper>
      <Heading level={4}>Floorplans</Heading>
      <FloorplanForm onSubmit={onSubmit} />
      <FloorplanTable floorplans={floorplans} onToggleActive={onToggleActive} onTogglePricing={onTogglePricing} />
    </Wrapper>
  );
}

export default FloorplanEditor;
