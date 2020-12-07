import React from 'react';
import ReactDOM from 'react-dom';
import RoomateCard from '.';
import roomates from './roommateSpec';
import ThemeProvider from '../ThemeProvider';

describe('<RoomateCard />', () => {
  it('renders a roommate card without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <ThemeProvider>
        <RoomateCard roommate={roomates[0]} />
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
