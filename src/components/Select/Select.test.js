import React from 'react';
import ReactDOM from 'react-dom';
import Form from 'react-validation/build/form';
import Select from '.';
import ThemeProvider from '../ThemeProvider';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeProvider>
      <Form>
        <Select name="baths" label="Baths" onChange={() => console.log('select')}>
          <option value="" disabled>
            Baths
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Select>
      </Form>
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
