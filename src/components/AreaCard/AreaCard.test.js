import React from 'react';
import ReactDOM from 'react-dom';
import AreaCard from '.';
import ThemeProvider from '../ThemeProvider';

const area = {
  area_id: 3,
  name: 'TCNJ-Rider',
  description: 'The College of New Jersey and Rider University Two Universities Tucked Away in the States Capital',
  image_url: 'https://s3.us-east-2.amazonaws.com/afito-production-bucket/areas/tcnj+card+picture.jpg',
  location: '{"lat":40.2649258,"lng":-74.7828085}',
  blurb:
    'TCNJ Off Campus Housing\n\n\n\nSearching for off campus housing near TCNJ? Browse tons of affordable student rental listings around The College of New Jersey’s Ewing campus and find your home away from today! Use our service to filter listings by price, bedrooms, bathrooms, home type, and more. Finding a house, a room, or an apartment can be quite a hassle, especially if you’re moving out to live on your own for the first time. Our mission at Afito is to help every student find an amazing place to live at school. That’s why we’ve done the hard work for you and compiled the best off campus rentals near TCNJ all in one place.',
  area_slug: 'tcnj-rider',
  property_count: 80
};

describe('<AreaCard />', () => {
  it('renders an area', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <ThemeProvider>
        <AreaCard key={area.area_id} {...area} />
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
