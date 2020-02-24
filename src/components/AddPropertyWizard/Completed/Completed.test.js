import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import ThemeProvider from '../../ThemeProvider';
import Completed from '.';

const mockCallBack = jest.fn();

describe('<Completed />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider>
        <Completed onCompleted={mockCallBack} />
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('fires onCompleted when button is clicked', () => {
    const completedScreen = mount(
      <ThemeProvider>
        <Completed onCompleted={mockCallBack} />
      </ThemeProvider>
    );

    completedScreen
      .find('button')
      .first()
      .simulate('click');

    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
