import React from 'react';
import ReactDOM from 'react-dom';
import Section from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <>
      <Section>Section 1</Section>
      <Section>Section 2</Section>
    </>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
