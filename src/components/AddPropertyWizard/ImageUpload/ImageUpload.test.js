import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '../../ThemeProvider';
import ImageUpload from '.';

describe('<ImageUpload />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider>
        <ImageUpload onSubmit={() => {}} loading={true} />
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the loading element', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider>
        <ImageUpload onSubmit={() => {}} loading={true} />
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the image uploader', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider>
        <ImageUpload onSubmit={() => {}} loading={false} />
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
