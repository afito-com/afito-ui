import React from 'react';
import ReactDOM from 'react-dom';
import ImageGallery from '.';
import ThemeProvider from '../ThemeProvider';

describe('<ImageGallery />', () => {
  it('renders without crashing', () => {
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
    const div = document.createElement('div');

    ReactDOM.render(
      <ThemeProvider>
        <ImageGallery loop images={images} onImageClick={idx => console.log(idx)} />
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
