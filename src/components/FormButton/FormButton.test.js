import React from 'react';
import ReactDOM from 'react-dom';
import Form from 'react-validation/build/form';
import FormButton from '.';
import ThemeProvider from '../ThemeProvider';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeProvider>
      <Form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <FormButton type="submit" level="secondary">
          Submit
        </FormButton>
      </Form>
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
