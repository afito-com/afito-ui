import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '../../ThemeProvider';
import ProgressBar from '.';

describe('<ProgressBar />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider>
        <ProgressBar jumpToScreen={() => {}} screens={[]} currScreen={1} maxStep={10} />
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
