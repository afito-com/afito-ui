import React from 'react';
import ReactDOM from 'react-dom';
import RadioGroup from '.';
import ThemeProvider from '../ThemeProvider';

it('renders a building without crashing', () => {
  const items = [
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: '3' },
    { label: '4+', value: 4 }
  ];
  const div = document.createElement('div');

  ReactDOM.render(
    <ThemeProvider>
      <>
        <RadioGroup name="beds" items={items} defaultOption={1} onSelectionChange={() => console.log('change')} />
        <RadioGroup name="baths" items={items} defaultOption={'3'} onSelectionChange={() => console.log('change')} />
      </>
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
