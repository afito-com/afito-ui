import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Column } from '../Grid';
import { Heading } from '../Typography';
import { ModalContext } from '../ModalProvider';
import bedIcon from '../../assets/icons/bed_grey.png';
import bathIcon from '../../assets/icons/shower_grey.png';
import bicycleIcon from '../../assets/icons/bicycle_grey.png';
import * as utils from '../../utils';

const Wrapper = styled.div`
  margin: 5px 0;
  display: inline-flex;
  flex-direction: column;
  background-color: ${props => props.theme.AFITO_UI.backgroundColor};
  cursor: pointer;
  box-sizing: border-box;
  box-shadow: ${props => props.theme.AFITO_UI.cardShadow};
  border-radius: 8px;
  background-color: ${props => props.theme.AFITO_UI.cardBackgroundColor};
  color: ${props => props.theme.AFITO_UI.backgroundTextColor};
  transition: transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
  height: 100%;

  &:hover {
    box-shadow: ${props => props.theme.AFITO_UI.cardShadowHover};
    transform: translateY(-1px);
  }

  & + & {
    margin-left: 15px;
  }

  ${props => {
    switch (props.type) {
      case 'fixed':
        return `
          width: 369px;
        `;
      case 'nohover':
        return `
          cursor: default;

          &:hover {
            box-shadow: ${props.theme.AFITO_UI.cardShadow};
            transform: translateY(0px);
          }
        `;
    }
  }}
`;

const Image = styled.div`
  height: 300px;
  overflow: hidden;
  width: 100%;
  border-radius: 5px 5px 0 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${props => props.image});
`;

const Description = styled.div`
  padding: ${props => props.theme.AFITO_UI.cardPadding};
  font-family: ${props => props.theme.AFITO_UI.bodyFont};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Badge = styled.div``;
const Ribbon = styled.div``;
const Price = styled.div`
  border-radius: 4px;
  padding: 7px 16px;
  color: white;
  background: ${props => props.theme.AFITO_UI.secondaryColor};
  font-size: 16px;
  font-weight: bold;
`;
const Rating = styled.div``;
const Save = styled.div`
  color: #cdcdcd;
  font-size: 22px;
`;
const Beds = styled.div`
  white-space: nowrap;
  font-family: ${props => props.theme.AFITO_UI.headerFont};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 12px;
`;
const Baths = styled.div`
  white-space: nowrap;
  font-family: ${props => props.theme.AFITO_UI.headerFont};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 12px;
`;
const Bike = styled.div`
  white-space: nowrap;
  font-family: ${props => props.theme.AFITO_UI.headerFont};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 12px;
`;
const Address = styled.span`
  display: flex;
  flex-wrap: wrap;
`;

function PropertyCard({
  property = {},
  savedProperties = [],
  removeSavedProperty = undefined,
  saveProperty = undefined,
  type = 'fixed',
  children,
  onClick = undefined,
  onMouseEnter = undefined,
  onMouseLeave = undefined,
  ...rest
}) {
  const {
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
    contact_for_pricing
  } = property;
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
      <span style={{ whiteSpace: 'nowrap' }}>
        {address.line1},{address.line2 && ` ${address.line2},`}&nbsp;
      </span>
      <span style={{ whiteSpace: 'nowrap' }}>
        {address.city},&nbsp;{address.state}
      </span>
    </>
  );

  function toggleFavorite() {
    setSaved(!saved);
  }

  return (
    <Wrapper type={type} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} {...rest}>
      <Image image={image_url}>
        <Ribbon />
        <Badge />
      </Image>
      <Description>
        <Row style={{ marginBottom: '25px' }}>
          <Column size="6" align="flex-start">
            <Price>{displayPrice}</Price>
            <Rating />
          </Column>
          <Column size="6" align="flex-end" justify="center">
            <Save saved onClick={toggleFavorite}>
              {saved ? <i className="fas fa-heart" style={{ color: '#57c59b' }}></i> : <i className="far fa-heart"></i>}
            </Save>
          </Column>
        </Row>
        <Row>
          <Heading level={5}>{cardTitle}</Heading>
        </Row>
        <Row>
          <Address>{fullAddress}</Address>
        </Row>
        <Row style={{ alignItems: 'flex-end', flexGrow: '1', marginTop: '15px' }}>
          <Column size="4" align="flex-start">
            <Beds>
              <img height="15" src={bedIcon} alt="Beds" style={{ marginRight: '10px' }} />
              &nbsp;{bedsRange ? bedsRange : beds}
            </Beds>
          </Column>
          <Column size="4" align="flex-start">
            <Baths>
              <img height="19" src={bathIcon} alt="Baths" style={{ marginRight: '10px' }} />
              &nbsp;{bathsRange ? bathsRange : baths}
            </Baths>
          </Column>
          <Column size="4" align="flex-start">
            <Bike>
              <img height="19" src={bicycleIcon} alt="Distance" style={{ marginRight: '10px' }} />
              &nbsp;1.2 mi
            </Bike>
          </Column>
        </Row>
      </Description>
    </Wrapper>
  );
}

PropertyCard.propTypes = {
  property: PropTypes.object.isRequired,
  savedProperties: PropTypes.array,
  type: PropTypes.string,
  onPropertyHover: PropTypes.func,
  onClick: PropTypes.func
};

export default PropertyCard;
