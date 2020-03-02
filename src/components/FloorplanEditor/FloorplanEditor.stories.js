import React from 'react';
import { storiesOf } from '@storybook/react';
import FloorplanEditor from '.';
import res from './response.json';

storiesOf('Composites|FloorplanEditor', module).add('default', () => {
  return (
    <FloorplanEditor
      floorplans={res.property.floorplans}
      onSubmit={floorplan => {
        // POST floorplan to property id
        console.log({ floorplan });
      }}
      onToggleActive={(floorplan_id, active) => {
        // PUT floorplan to floorplan_id with new active state
        console.log({ active });
      }}
      onTogglePricing={(floorplan_id, contact_for_pricing) => {
        // PUT floorplan to floorplan_id with new pricing state
        console.log({ contact_for_pricing });
      }}
      onDeleteFloorplan={floorplan => {
        console.log('Delete:', { floorplan });
      }}
    />
  );
});
