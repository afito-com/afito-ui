import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Heading, Text } from '../Typography';

const Image = styled.div`
  height: 380px;
  overflow: hidden;
  width: 100%;
  border-radius: 8px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${props => props.image});
  transition: transform 0.15s ease-in-out;
`;

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: inline-block;
  cursor: pointer;
  box-sizing: border-box;
  box-shadow: ${props => props.theme.AFITO_UI.cardShadow};
  border-radius: 8px;
  background-color: ${props => props.theme.AFITO_UI.cardBackgroundColor};
  color: ${props => props.theme.AFITO_UI.backgroundTextColor};
  transition: transform 0.15s ease-in-out, box-shadow 0.5s ease-in-out;
  overflow: hidden;

  &:hover {
    /*
    box-shadow: ${props => props.theme.AFITO_UI.cardShadowHover};
    transform: translateY(-1px);
    */

    & ${Image} {
      transform: scale(1.05);
    }
  }

  & + & {
    margin-left: 15px;
  }
`;

const Title = styled.div`
  color: white;
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  text-align: center;

  & h5 {
    width: 50%;
    margin: auto;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 8px;
  background: linear-gradient(180deg, transparent 50%, #000000 100%);
  opacity: 0.8;
`;

function AreaCard({ image_url, name, property_count, onClick, ...rest }) {
  return (
    <Wrapper onClick={onClick} {...rest}>
      <Image image={image_url} />
      <Overlay />
      <Title>
        <Heading level={4}>{name}</Heading>
        <Text>{property_count} active listings</Text>
      </Title>
    </Wrapper>
  );
}

AreaCard.propTypes = {
  image_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  property_count: PropTypes.number.isRequired
};

export default AreaCard;
