import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardWrapper = styled.div`
  display: inline-block;
  background-color: ${props => props.theme.AFITO_UI.backgroundColor};
  cursor: pointer;
  box-sizing: border-box;
  margin: 10px;
  box-shadow: ${props => props.theme.AFITO_UI.cardShadow};
  border-radius: 5px;
  background-color: ${props => props.theme.AFITO_UI.cardBackgroundColor};
  color: ${props => props.theme.AFITO_UI.backgroundTextColor};
  transition: transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out;

  & + .card {
    margin-left: 15px;
  }

  ${props => {
    if (props.withHover) {
      return `
        &:hover {
          box-shadow: ${props => props.theme.AFITO_UI.cardShadowHover};
          transform: translateY(-1px);
        }
      `;
    }
  }}
`;

const CardImage = styled.div`
  height: 250px;
  overflow: hidden;
  width: 100%;
  border-radius: 5px 5px 0 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${props => props.image});
`;

const CardDescription = styled.div`
  padding: ${props => props.theme.AFITO_UI.cardPadding};
  font-family: ${props => props.theme.AFITO_UI.bodyFont};
`;

export default function Card({ image, withHover, children }) {
  return (
    <CardWrapper withHover={withHover}>
      <CardImage image={image} />
      <CardDescription>{children}</CardDescription>
    </CardWrapper>
  );
}

CardWrapper.propTypes = {
  image: PropTypes.string.isRequired,
  withHover: PropTypes.bool,
  children: PropTypes.node.isRequired
};
