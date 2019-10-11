import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Row } from '../Grid';

const Wrapper = styled.div`
  margin-top: 0px;
  padding: 0 30px;
  margin-left: -30px;
  margin-right: -30px;
  overflow-y: hidden;
  position: relative;
`;

const SliderContainer = styled(Container)`
  display: flex;
  padding: 0px 18px 30px;
  overflow-x: visible;
  position: relative;
  margin-bottom: -30px;
  -webkit-overflow-scrolling: touch;
  margin-left: 0;
  margin-right: 0;

  @media (min-width: ${props => props.theme.AFITO_UI.md}) {
    padding: 0px 0px 30px;
    margin-left: auto;
    margin-right: auto;
  }
`;
const Arrow = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  background: white;
  box-shadow: ${props => props.theme.AFITO_UI.cardShadow};
  border-radius: 50%;
  top: 35%;
  cursor: pointer;
  z-index: 1000;
  display: none;
  justify-content: center;
  align-items: center;

  ${props => props.left && 'left: 5px;'};
  ${props => props.right && 'right: 5px;'};

  @media (min-width: ${props => props.theme.AFITO_UI.md}) {
    display: flex;
  }

  @media (min-width: ${props => props.theme.AFITO_UI.lg}) {
    ${props => props.left && 'left: -60px;'};
    ${props => props.right && 'right: -60px;'};
  }
`;
const SliderWindowContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 0px 30px;
  position: relative;
  overflow: auto;
  margin-bottom: -30px;
  -webkit-overflow-scrolling: touch;

  @media (min-width: ${props => props.theme.AFITO_UI.md}) {
    overflow-x: hidden;
    padding: 0px 0px 30px;
    margin-left: auto;
    margin-right: auto;
  }
`;
const SliderWindow = styled(Row)`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  -webkit-overflow-scrolling: touch;
  transition: transform 0.2s ease-in-out;
`;

function Slider({ children, itemsPerView }) {
  const [offset, setOffset] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const offsetPercentDiff = 100 / itemsPerView;
  const endMarker = (children.length - itemsPerView) * offsetPercentDiff;

  useEffect(() => {
    setAtStart(offset >= 0);
    setAtEnd(offset <= -1 * endMarker);
  });

  return (
    <Wrapper>
      <SliderContainer>
        {!atStart && (
          <Arrow left onClick={() => setOffset(offset + offsetPercentDiff)}>
            <i className="fas fa-chevron-left" />
          </Arrow>
        )}
        <SliderWindowContainer>
          <SliderWindow style={{ transform: `translateX(${offset}%)` }}>{children}</SliderWindow>
        </SliderWindowContainer>
        {!atEnd && (
          <Arrow right onClick={() => setOffset(offset - offsetPercentDiff)}>
            <i className="fas fa-chevron-right" />
          </Arrow>
        )}
      </SliderContainer>
    </Wrapper>
  );
}

export default Slider;
