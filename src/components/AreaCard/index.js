import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Heading, Text } from '../Typography';

const Image = styled.img`
  height: 380px;
  overflow: hidden;
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  object-position: center;
  transition: transform 0.25s ease-in-out;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 380px;
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
  padding: 0 10px;

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

export default function AreaCard({ nextImg, image_url, name, property_count, onClick, ...rest }) {
  return (
    <Wrapper onClick={onClick} {...rest}>
      {nextImg ? (
        <Image layout="fill" as={nextImg} src={image_url} />
      ) : (
        <Image width="280" height="384" src={image_url} loading="lazy" />
      )}
      <Overlay />
      <Title>
        <Heading level={4}>{name}</Heading>
        <Text>{property_count} active listings</Text>
      </Title>
    </Wrapper>
  );
}

AreaCard.propTypes = {
  nextImg: PropTypes.func,
  image_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  property_count: PropTypes.number.isRequired,
  onClick: PropTypes.func
};
