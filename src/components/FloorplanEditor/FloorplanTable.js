import React from 'react';
import PropTypes from 'prop-types';

import Switch from '../Switch';
import Table from '../Table';
import Button from '../Button';
import { Text } from '../Typography';

import { toCurrency } from '../../api/utils';

FloorplanTable.propTypes = {
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
  onDeleteFloorplan: PropTypes.func.isRequired
};

function FloorplanTable({ floorplans, onToggleActive, onTogglePricing, onDeleteFloorplan }) {
  return (
    <Table
      rows={floorplans.map(f => {
        return {
          id: f.floorplan_id,
          floorplanName: f.name,
          floorplanPrice: `${toCurrency(f.price)}`,
          floorplanBeds: f.beds,
          floorplanBaths: f.baths,
          floorplanSquareFootage: f.square_footage ? <Text>{f.square_footage} ft&sup2;</Text> : 'N/A',
          floorplanContactForPricing: (
            <Switch
              name={`toggle_pricing_${f.floorplan_id}`}
              checked={f.contact_for_pricing}
              onChange={e => onTogglePricing(f.floorplan_id, e.target.checked)}
            />
          ),
          floorplanActive: (
            <Switch
              name={`toggle_active_${f.floorplan_id}`}
              checked={f.active}
              onChange={e => onToggleActive(f.floorplan_id, e.target.checked)}
            />
          ),
          floorplanDelete: (
            <Button style={{ padding: '7px 15px' }} level="danger" onClick={() => onDeleteFloorplan(f)}>
              x
            </Button>
          )
        };
      })}
      headers={['Name', 'Price', 'Beds', 'Baths', 'Square Footage', 'Contact For Pricing', 'Active', 'Delete']}
    />
  );
}

export default FloorplanTable;
