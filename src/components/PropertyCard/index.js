import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Column } from '../Grid';
import { Heading } from '../Typography';
import Switch from '../Switch';
import Badge from './Badge';
import Save from './Save';
import { getDisplayPrice } from '../../api/utils';

const Wrapper = styled.div`
  position: relative;
  flex: 1 0 0;
  margin: 5px 0;
  display: inline-flex;
  flex-direction: column;
  background-color: ${props => props.theme.AFITO_UI.backgroundColor};
  cursor: pointer;
  box-sizing: border-box;
  box-shadow: ${props => props.theme.AFITO_UI.cardShadow};
  border-radius: 8px;
  color: ${props => props.theme.AFITO_UI.backgroundTextColor};
  transition: transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
  height: 100%;
  width: 100%;

  &:hover {
    box-shadow: ${props => props.theme.AFITO_UI.cardShadowHover};
    transform: translateY(-1px);
  }

  & + & {
    margin-left: 15px;
  }
`;

const Image = styled.img`
  object-fit: cover;
  height: 17vw;
  max-height: 300px;
  min-height: ${props => (props.isCondensed ? '100px' : '225px')};
  width: 100%;
  border-radius: 5px 5px 0 0;
`;

const Description = styled.div`
  padding: ${props => (props.isCondensed ? '10px' : props.theme.AFITO_UI.cardPadding)};
  font-family: ${props => props.theme.AFITO_UI.bodyFont};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

/*
const Ribbon = styled.div``;
*/

const Price = styled.div`
  border-radius: 4px;
  padding: 7px 16px;
  color: white;
  background: ${props => props.theme.AFITO_UI.secondaryColor};
  font-size: 16px;
  font-weight: bold;
  white-space: nowrap;
`;
const Rating = styled.div``;

const Beds = styled.div`
  white-space: nowrap;
  font-family: ${props => props.theme.AFITO_UI.headerFont};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: ${props => (props.isCondensed ? '8px' : '12px')};
`;
const Baths = styled.div`
  white-space: nowrap;
  font-family: ${props => props.theme.AFITO_UI.headerFont};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: ${props => (props.isCondensed ? '8px' : '12px')};
`;
const Bike = styled.div`
  white-space: nowrap;
  font-family: ${props => props.theme.AFITO_UI.headerFont};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: ${props => (props.isCondensed ? '10px' : '12px')};
`;
const Address = styled.span`
  display: flex;
  flex-wrap: wrap;
`;

function PropertyCard({
  active,
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
  distance,
  leased,
  savedProperties = [],
  onRemoveSavedProperty = undefined,
  onSaveProperty = undefined,
  isCondensed,
  withSwitch,
  onSwitchChange,
  ...rest
}) {
  const [saved, setSaved] = useState();
  const displayPrice = getDisplayPrice({ hometype, max_price, min_price, price, contact_for_pricing });
  const cardTitle = property_name ? property_name : address ? address.line1 : 'Loading...';
  const bedsRange = max_beds > min_beds ? `${min_beds}-${max_beds}` : max_beds;
  const bathsRange = max_baths > min_baths ? `${min_baths}-${max_baths}` : max_baths;
  const fullAddress = address ? (
    <>
      <span style={{ whiteSpace: 'nowrap' }}>
        {address.line1},{address.line2 && ` ${address.line2},`}&nbsp;
      </span>
      <span style={{ whiteSpace: 'nowrap' }}>
        {address.city},&nbsp;{address.state}
      </span>
    </>
  ) : (
    'Loading...'
  );

  useEffect(() => {
    setSaved(savedProperties.map(p => p.property_id).includes(property_id));
  }, [property_id, savedProperties]);

  function toggleSavedProperty(e) {
    e.stopPropagation();
    e.preventDefault();
    if (saved) {
      onRemoveSavedProperty(setSaved);
    } else {
      onSaveProperty(setSaved);
    }
  }

  return (
    <Wrapper {...rest}>
      {!isCondensed && leased && <Badge>Leased</Badge>}
      <Image isCondensed={isCondensed} src={image_url} alt={cardTitle} />
      <Description isCondensed={isCondensed}>
        {!isCondensed && (
          <Row style={{ marginBottom: '25px' }}>
            <Column xs={8} align="flex-start">
              <Price>{displayPrice}</Price>
              <Rating />
            </Column>
            {!withSwitch && (
              <Column xs={4} align="flex-end" justify="center">
                <Save onClick={toggleSavedProperty}>
                  {saved ? (
                    <i className="fas fa-heart" style={{ color: '#57c59b' }}></i>
                  ) : (
                    <i className="far fa-heart"></i>
                  )}
                </Save>
              </Column>
            )}

            {withSwitch && (
              <Column xs={4} align="flex-end" justify="center">
                <Switch
                  name={property_id + '_leased_status'}
                  checked={!leased}
                  onClick={e => e.stopPropagation()}
                  onChange={onSwitchChange}
                />
              </Column>
            )}
          </Row>
        )}
        <Row>
          <Heading style={isCondensed && { fontSize: '12px' }} level={5}>
            {cardTitle}
          </Heading>
        </Row>
        <Row>
          <Address style={isCondensed && { fontSize: '8px' }}>{fullAddress}</Address>
        </Row>
        <Row style={{ alignItems: 'flex-end', flexGrow: '1', marginTop: '15px' }}>
          <Column xs={4} align="flex-start">
            <Beds isCondensed={isCondensed}>
              <img
                height={isCondensed ? '8' : '15'}
                src="https://afito-production-bucket.s3.amazonaws.com/static/icons/bed_grey.png"
                alt="Beds"
                style={{ marginRight: '10px' }}
              />
              &nbsp;{bedsRange ? bedsRange : beds}
            </Beds>
          </Column>
          <Column xs={4} align="flex-start">
            <Baths isCondensed={isCondensed}>
              <img
                height={isCondensed ? '12' : '19'}
                src="https://afito-production-bucket.s3.amazonaws.com/static/icons/shower_grey.png"
                alt="Baths"
                style={{ marginRight: '10px' }}
              />
              &nbsp;{bathsRange ? bathsRange : baths}
            </Baths>
          </Column>
          <Column xs={4} align="flex-start">
            {!isCondensed && distance && !isNaN(Number.parseFloat(distance)) && (
              <Bike isCondensed={isCondensed}>
                <img
                  height={isCondensed ? '12' : '19'}
                  src="https://afito-production-bucket.s3.amazonaws.com/static/icons/bicycle_grey.png"
                  alt="Distance"
                  style={{ marginRight: '10px' }}
                />
                &nbsp;{Number.parseFloat(distance).toFixed(1)} mi
              </Bike>
            )}
          </Column>
        </Row>
      </Description>
    </Wrapper>
  );
}

PropertyCard.propTypes = {
  active: PropTypes.bool,
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
  distance: PropTypes.number,
  isCondensed: PropTypes.bool,
  leased: PropTypes.bool,
  savedProperties: function(props, propName) {
    if (
      props['isCondensed'] == false &&
      props['withSwitch'] == false &&
      (props[propName] == undefined || typeof props[propName] != 'object')
    ) {
      return new Error('Please provide the savedProperties array!');
    }
  },
  onSaveProperty: function(props, propName) {
    if (props['isCondensed'] == false && (props[propName] == undefined || typeof props[propName] != 'function')) {
      return new Error('Please provide a onSaveProperty function!');
    }
  },
  onRemoveSavedProperty: function(props, propName) {
    if (props['isCondensed'] == false && (props[propName] == undefined || typeof props[propName] != 'function')) {
      return new Error('Please provide a onRemoveSavedProperty function!');
    }
  },
  withSwitch: PropTypes.bool,
  onSwitchChange: function(props, propName) {
    if (props['withSwitch'] == true && (props[propName] == undefined || typeof props[propName] != 'function')) {
      return new Error('Please provide a onSwitchChange function!');
    }
  }
};

export default PropertyCard;
