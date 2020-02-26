import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '../ThemeProvider';
import Section from '.';

describe('<Section />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <ThemeProvider>
        <>
          <Section xs={20} sm={30} md={50} lg={100} xl={120} xxl={150}>
            Section 1
          </Section>
          <Section xs={20} sm={30} md={50} lg={100} xl={120} xxl={150}>
            Section 2
          </Section>
        </>
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
