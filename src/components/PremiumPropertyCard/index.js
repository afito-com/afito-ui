import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Column } from '../Grid';
import { Heading } from '../Typography';
import { ModalContext } from '../ModalProvider';
import * as utils from '../../utils';

const Wrapper = styled.div`
  margin: 5px 0;
  position: relative;
  display: inline-block;
  background-color: ${props => props.theme.AFITO_UI.backgroundColor};
  cursor: pointer;
  box-sizing: border-box;
  box-shadow: ${props => props.theme.AFITO_UI.cardShadow};
  border-radius: 8px;
  background-color: ${props => props.theme.AFITO_UI.cardBackgroundColor};
  color: ${props => props.theme.AFITO_UI.backgroundTextColor};
  transition: transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out;

  &:hover {
    box-shadow: ${props => props.theme.AFITO_UI.cardShadowHover};
    transform: translateY(-1px);
  }

  & + & {
    margin-left: 15px;
  }
`;

const Image = styled.div`
  padding: 20px;
  height: 303px;
  box-sizing: border-box;
  overflow: hidden;
  width: 752px;
  border-radius: 8px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${props => props.image});
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: ${props => props.theme.AFITO_UI.bodyFont};
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
`;

const Title = styled(Heading)`
  margin: 10px 0;
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

const Price = styled.div`
  border-radius: 4px;
  padding: 7px 16px;
  color: white;
  background: ${props => props.theme.AFITO_UI.secondaryColor};
  font-size: 16px;
  font-weight: bold;
`;
const Save = styled.div`
  color: #cdcdcd;
  font-size: 22px;
`;
const Beds = styled.div`
  font-weight: bold;
  font-size: 12px;
`;
const Baths = styled.div`
  font-weight: bold;
  font-size: 12px;
`;
const Bike = styled.div`
  font-weight: bold;
  font-size: 12px;
`;
const Address = styled.span``;

const Features = styled.div`
  display: flex;
  position: absolute;
  bottom: 20px;
  right: 20px;
  color: white;
  font-family: ${props => props.theme.AFITO_UI.bodyFont};
`;

const RecommendationBadge = styled.div`
  color: white;
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-family: ${props => props.theme.AFITO_UI.bodyFont};
  font-weight: 700;
  font-size: 18px;

  & i {
    color: #ffc820;
  }
`;

const Content = styled.div`
  position: absolute;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  padding: 20px;
  z-index: 10;
`;

function PremiumPropertyCard({
  property_id,
  property_name,
  price,
  max_price,
  min_price,
  address,
  image_url,
  hometype,
  min_beds,
  max_beds,
  beds,
  min_baths,
  max_baths,
  baths,
  contact_for_pricing,
  savedProperties = [],
  removeSavedProperty = undefined,
  saveProperty = undefined
}) {
  const [saved, setSaved] = useState(savedProperties.map(p => p.property_id).includes(property_id));
  const isBuilding = hometype => hometype === 'building';
  const { showModal, setModalContent } = useContext(ModalContext);
  const displayPrice = isBuilding(hometype)
    ? contact_for_pricing
      ? 'Contact For Price'
      : max_price && min_price
      ? max_price > min_price
        ? `${utils.toCurrency(min_price)} - ${utils.toCurrency(max_price)}`
        : utils.toCurrency(max_price)
      : 'No Price'
    : price
    ? utils.toCurrency(price)
    : 'No Price';
  const cardTitle = property_name ? property_name : address.line1;
  const bedsRange = max_beds > min_beds ? `${min_beds} - ${max_beds}` : max_beds;
  const bathsRange = max_baths > min_baths ? `${min_baths} - ${max_baths}` : max_baths;
  const fullAddress = (
    <>
      <span>
        {address.line1}
        {address.line2 && `, ${address.line2}`}&nbsp;
      </span>
      <span style={{ whiteSpace: 'nowrap' }}>
        {address.city}, {address.state}
      </span>
    </>
  );

  function toggleFavorite() {
    console.log('toggle favorite');
    setSaved(!saved);
  }

  return (
    <Wrapper>
      <Content>
        <Row>
          <Column size="12" align="flex-end">
            <Save saved onClick={toggleFavorite}>
              {saved ? <i className="fas fa-heart" style={{ color: '#57c59b' }}></i> : <i className="far fa-heart"></i>}
            </Save>
          </Column>
        </Row>
        <Description>
          <Price>{displayPrice}</Price>
          <Title level={4}>{cardTitle}</Title>
          <Address>{fullAddress}</Address>
        </Description>
        <RecommendationBadge>
          <i className="fas fa-medal"></i>&nbsp;Highly Recommended
        </RecommendationBadge>
        <Features>
          <Beds>
            {bedsRange ? bedsRange : beds} {!bedsRange && beds > 1 ? 'bedrooms' : 'bedroom'}
          </Beds>
          <Baths>{bathsRange ? bathsRange : baths} baths</Baths>
          <Bike>1.2 mi</Bike>
        </Features>
      </Content>
      <Image image={image_url} />
      <Overlay />
    </Wrapper>
  );
}

PremiumPropertyCard.propTypes = {
  property_id: PropTypes.number,
  property_name: PropTypes.string,
  price: PropTypes.number,
  max_price: PropTypes.number,
  min_price: PropTypes.number,
  address: PropTypes.object,
  image_url: PropTypes.string,
  hometype: PropTypes.string,
  min_beds: PropTypes.number,
  max_beds: PropTypes.number,
  beds: PropTypes.number,
  min_baths: PropTypes.number,
  max_baths: PropTypes.number,
  baths: PropTypes.number,
  contact_for_pricing: PropTypes.bool,
  savedProperties: PropTypes.array
};

export default PremiumPropertyCard;
