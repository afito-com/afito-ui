import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '../../ThemeProvider';
import PropertyDetails from '.';

describe('<PropertyDetails />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider>
        <PropertyDetails property={{}} areas={[]} onSubmit={() => {}} onChange={() => {}} setHometype={() => {}} />
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
