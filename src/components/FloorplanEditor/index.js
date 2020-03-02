import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  onSubmit: PropTypes.func.isRequired,
  onDeleteFloorplan: PropTypes.func.isRequired
};

function FloorplanEditor({ floorplans, onSubmit, onToggleActive, onTogglePricing, onDeleteFloorplan }) {
  return (
    <Wrapper>
      <FloorplanForm onSubmit={onSubmit} />
      <FloorplanTable
        floorplans={floorplans}
        onToggleActive={onToggleActive}
        onTogglePricing={onTogglePricing}
        onDeleteFloorplan={onDeleteFloorplan}
      />
    </Wrapper>
  );
}

export default FloorplanEditor;
