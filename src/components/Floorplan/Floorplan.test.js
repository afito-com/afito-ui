import React from 'react';
import ReactDOM from 'react-dom';
import Floorplan from '.';
/*import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add({ faMinusCircle });
*/
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Floorplan
      floorplan={{
        floorplan_id: 45,
        floorplanBaths: 1,
        floorplanBeds: 1,
        floorplanPrice: 1,
        floorplanName: '1',
        floorplanSquareFootage: 1,
        floorplanActive: true
      }}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
