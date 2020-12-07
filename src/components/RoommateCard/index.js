import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Text, Heading } from '../Typography';
import { Row, Column } from '../Grid';
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

const Icon = styled.div`
  white-space: nowrap;
  font-family: ${props => props.theme.AFITO_UI.headerFont};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: ${props => (props.isCondensed ? '8px' : '12px')};
`;

const Avatar = styled.img`
  border-radius: 50%;
  position: absolute;
  object-fit: cover;
  object-position: center top;
  left: 0;
  right: 0;
  top: 115px;
  margin: 0 auto;
`;

const Backdrop = styled.img`
  position: relative;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 100%;
`;

const Online = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OnlineIndicator = styled.div`
  background: ${props => (props.on ? props.theme.AFITO_UI.secondaryColor : 'lightgrey')};
  height: 10px;
  width: 10px;
  border-radius: 50%;
  margin-left: 6px;
`;

const Info = styled.div`
  padding: 25px;
  padding-top: 75px;
  text-align: center;
`;

const Price = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
  border-radius: 4px;
  padding: 7px 16px;
  color: white;
  background: ${props => props.theme.AFITO_UI.secondaryColor};
  font-size: 16px;
  font-weight: bold;
  white-space: nowrap;
`;
const GreenText = styled(Text)`
  font-weight: bold;
  color: ${props => props.theme.AFITO_UI.secondaryColor};
`;

RoomateCard.propTypes = {
  roommate: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    gender: PropTypes.string,
    onlineStatus: PropTypes.bool,
    offeringProperty: PropTypes.object,
    avatar: PropTypes.string
  })
};

function RoomateCard({ roommate }) {
  const { name, age, gender, onlineStatus, offeringProperty, avatar } = roommate;
  const {
    image_url,
    distance,
    beds,
    max_beds,
    min_beds,
    baths,
    max_baths,
    min_baths,
    max_price,
    min_price,
    price,
    contact_for_pricing,
    hometype
  } = offeringProperty;
  const displayPrice = getDisplayPrice({ hometype, max_price, min_price, price, contact_for_pricing });
  const bedsRange = max_beds > min_beds ? `${min_beds}-${max_beds}` : max_beds;
  const bathsRange = max_baths > min_baths ? `${min_baths}-${max_baths}` : max_baths;

  return (
    <Wrapper>
      <Backdrop src={image_url} height="175" width="333" />
      <Price>
        <Text>{displayPrice}</Text>
      </Price>
      <Avatar src={avatar} width="115" height="115" />
      <Info>
        <Heading level={5}>
          {name.first} {name.last}
        </Heading>
        <Text>
          {age}, {gender}
        </Text>
        <Online>
          {onlineStatus ? (
            <>
              <Text style={{ fontWeight: 'bold' }}>Online</Text>
              <OnlineIndicator on={onlineStatus} />
            </>
          ) : (
            <>
              <Text style={{ fontWeight: 'bold' }}>Offline</Text>
              <OnlineIndicator on={onlineStatus} />
            </>
          )}
        </Online>
        {offeringProperty && (
          <GreenText>
            {offeringProperty.hometype.charAt(0).toUpperCase() + offeringProperty.hometype.slice(1)}
          </GreenText>
        )}
        <Row style={{ alignItems: 'flex-end', flexGrow: '1', marginTop: '25px' }}>
          <Column xs={4} align="flex-start">
            <Icon>
              <img
                height={'16'}
                width={'24'}
                loading="lazy"
                src="https://afito-production-bucket.s3.amazonaws.com/static/icons/bed_grey.png"
                alt="Beds"
                style={{ marginRight: '10px' }}
              />
              &nbsp;{bedsRange ? bedsRange : beds}
            </Icon>
          </Column>
          <Column xs={4} align="flex-start">
            <Icon>
              <img
                height={'20'}
                width={'19'}
                loading="lazy"
                src="https://afito-production-bucket.s3.amazonaws.com/static/icons/shower_grey.png"
                alt="Baths"
                style={{ marginRight: '10px' }}
              />
              &nbsp;{bathsRange ? bathsRange : baths}
            </Icon>
          </Column>
          <Column xs={4} align="flex-start">
            {distance && !isNaN(Number.parseFloat(distance)) && (
              <Icon>
                <img
                  height={'19'}
                  width={'30'}
                  loading="lazy"
                  src="https://afito-production-bucket.s3.amazonaws.com/static/icons/bicycle_grey.png"
                  alt="Distance"
                  style={{ marginRight: '10px' }}
                />
                &nbsp;{Number.parseFloat(distance).toFixed(1)} mi
              </Icon>
            )}
          </Column>
        </Row>
      </Info>
    </Wrapper>
  );
}

export default RoomateCard;
