import React from 'react';
import { create } from 'react-test-renderer';
import 'jest-styled-components';
import Button from '.';
import ThemeProvider from '../ThemeProvider';

describe('Button', () => {
  it('Applies primary styles', () => {
    const tree = create(
      <ThemeProvider>
        <Button level="primary" />
      </ThemeProvider>
    ).toJSON();
    expect(tree).toHaveStyleRule('background', '#253c6e');
    expect(tree).toHaveStyleRule('color', 'rgb(242,242,242)');
    expect(tree).toMatchSnapshot();
  });

  it('Applies secondary styles', () => {
    const tree = create(
      <ThemeProvider>
        <Button level="secondary" />
      </ThemeProvider>
    ).toJSON();
    expect(tree).toHaveStyleRule('background', '#57c59b');
    expect(tree).toHaveStyleRule('color', 'rgb(242,242,242)');
    expect(tree).toMatchSnapshot();
  });

  it('Applies danger styles', () => {
    const tree = create(
      <ThemeProvider>
        <Button level="danger" />
      </ThemeProvider>
    ).toJSON();
    expect(tree).toHaveStyleRule('background', 'rgb(246,119,119)');
    expect(tree).toHaveStyleRule('color', 'rgb(242,242,242)');
    expect(tree).toMatchSnapshot();
  });

  it('Applies outline styles', () => {
    const tree = create(
      <ThemeProvider>
        <Button level="outline" />
      </ThemeProvider>
    ).toJSON();
    expect(tree).toHaveStyleRule('background', 'transparent');
    expect(tree).toHaveStyleRule('color', '#505050');
    expect(tree).toHaveStyleRule('border', '1px solid #d2dce0');
    expect(tree).toMatchSnapshot();
  });
});
