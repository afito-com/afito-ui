import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '../../ThemeProvider';
import Dropzone from '.';

describe('<Dropzone />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider>
        <Dropzone onDrop={() => {}} multiple={true}>
          <span>Drag and drop an image or click here</span>
        </Dropzone>
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
