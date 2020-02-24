import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '../../ThemeProvider';
import Details from '.';

describe('<Details />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider>
        <Details
          areas={[]}
          property={{}}
          onSubmit={() => {}}
          onChange={() => {}}
          setHometype={() => {}}
          currScreen={() => {}}
          prevScreen={() => {}}
        />
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
