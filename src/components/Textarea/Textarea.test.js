import React from 'react';
import ReactDOM from 'react-dom';
import Textarea from '.';
import ThemeProvider from '../ThemeProvider';
import Form from 'react-validation/build/form';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeProvider>
      <Form>
        <Textarea onKeyDown={() => console.log('keydown')} placeholder="Enter school name" />
      </Form>
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
