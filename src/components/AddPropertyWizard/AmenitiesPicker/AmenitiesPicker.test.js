import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '../../ThemeProvider';
import AmenitiesPicker from '.';

describe('<AmenitiesPicker />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider>
        <AmenitiesPicker amenities={[]} property={{}} setAmenity={() => {}} onSubmit={() => {}} />
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
