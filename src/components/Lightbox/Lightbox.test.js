import React from 'react';
import ReactDOM from 'react-dom';
import Lightbox from '.';
import ThemeProvider from '../ThemeProvider';

const images = [
  'https://via.placeholder.com/1200x541',
  'https://via.placeholder.com/1200x500',
  'https://via.placeholder.com/300x541',
  'https://via.placeholder.com/1200x600',
  'https://via.placeholder.com/1200x100',
  'https://via.placeholder.com/1200x541',
  'https://via.placeholder.com/1200x500',
  'https://via.placeholder.com/300x541',
  'https://via.placeholder.com/1200x600',
  'https://via.placeholder.com/1200x100',
  'https://via.placeholder.com/1200x541',
  'https://via.placeholder.com/1200x500',
  'https://via.placeholder.com/300x541',
  'https://via.placeholder.com/1200x600',
  'https://via.placeholder.com/1200x100',
  'https://via.placeholder.com/1200x541',
  'https://via.placeholder.com/1200x500',
  'https://via.placeholder.com/300x541',
  'https://via.placeholder.com/1200x600',
  'https://via.placeholder.com/1200x100',
  'https://via.placeholder.com/1200x541',
  'https://via.placeholder.com/1200x500',
  'https://via.placeholder.com/300x541',
  'https://via.placeholder.com/1200x600',
  'https://via.placeholder.com/1200x100'
];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeProvider>
      <Lightbox images={images} isOpen={true} onClose={() => console.log('closed')} />
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeProvider>
      <Lightbox images={images} isOpen={false} onClose={() => console.log('closed')} defaultImageIdx={0} />
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeProvider>
      <Lightbox images={images} isOpen={false} onClose={() => console.log('closed')} defaultImageIdx={1} />
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
