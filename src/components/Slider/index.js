import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Row } from '../Grid';

const Wrapper = styled.div`
  margin-top: 0px;
  padding: 0 30px;
  margin-left: -30px;
  margin-right: -30px;
  overflow-y: hidden;
  position: relative;

  @media (min-width: ${props => props.theme.AFITO_UI.md}) {
    padding: 0;
    margin: 0;
  }
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
  background: white;
  border-radius: 50%;
  color: rgb(164, 164, 164);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 35px;
  cursor: pointer;
  box-shadow: 0px 5px 8.55px 0.45px rgba(0, 0, 0, 0.16);
  top: 35%;
  z-index: 1000;

  @media (min-width: ${props => props.theme.AFITO_UI.xs}) {
    ${props => props.left && 'left: 5px;'};
    ${props => props.right && 'right: 5px;'};
  }

  @media (min-width: ${props => props.theme.AFITO_UI.md}) {
    display: flex;
  }

  @media (min-width: ${props => props.theme.AFITO_UI.lg}) {
  }

  @media (min-width: ${props => props.theme.AFITO_UI.xl}) {
    ${props => props.left && 'left: -50px;'};
    ${props => props.right && 'right: -50px;'};
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
  }, [offset, endMarker]);

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

Slider.propTypes = {
  children: PropTypes.node.isRequired,
  itemsPerView: PropTypes.number
};

export default Slider;
