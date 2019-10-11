import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '../ThemeProvider';
import Slider from '.';
import { Container, Row, Column } from '../Grid';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <ThemeProvider>
      <Container>
        <Row>
          <Slider itemsPerView={6}>
            <Column xs={2}>1</Column>
            <Column xs={2}>2</Column>
            <Column xs={2}>3</Column>
            <Column xs={2}>4</Column>
            <Column xs={2}>5</Column>
            <Column xs={2}>6</Column>
            <Column xs={2}>7</Column>
            <Column xs={2}>8</Column>
            <Column xs={2}>9</Column>
            <Column xs={2}>10</Column>
            <Column xs={2}>11</Column>
            <Column xs={2}>12</Column>
          </Slider>
        </Row>
      </Container>
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
