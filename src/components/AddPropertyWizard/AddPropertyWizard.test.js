import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '../ThemeProvider';
import AddPropertyWizard from '.';

describe('<AddPropertyWizard />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider>
        <AddPropertyWizard createProperty={() => {}} onPropertyCreated={() => {}} onCompleted={() => {}} user_id={1} />
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
