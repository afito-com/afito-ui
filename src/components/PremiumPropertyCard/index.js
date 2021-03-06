import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Column } from '../Grid';
import { Heading, Text } from '../Typography';
import { getDisplayPrice } from '../../api/utils';

const Image = styled.div`
  padding: 20px;
  max-height: 303px;
  height: 50vw;
  min-height: 165px;
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
  border-radius: 8px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${props => props.image});
  transition: transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
`;

const Wrapper = styled.div`
  width: 100%;
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
  overflow: hidden;

  &:hover {
    & ${Image} {
      transform: scale(1.05);
    }
  }

  & + & {
    margin-left: 15px;
  }
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
  font-size: 16px;

  @media (min-width: ${props => props.theme.AFITO_UI.xs}) {
    font-size: 12px;
    margin-bottom: 25px;
  }

  @media (min-width: ${props => props.theme.AFITO_UI.md}) {
    font-size: 16px;
  }
`;

const Title = styled(Heading)`
  margin: 10px 0;

  @media (min-width: ${props => props.theme.AFITO_UI.xs}) {
    font-size: 14px;
    margin-bottom: 0;
  }

  @media (min-width: ${props => props.theme.AFITO_UI.md}) {
    font-size: 18px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 8px;
  background: linear-gradient(180deg, transparent 0%, #000000 100%);
  opacity: 0.8;
`;

const Price = styled.div`
  border-radius: 4px;
  padding: 7px 16px;
  color: white;
  background: ${props => props.theme.AFITO_UI.secondaryColor};
  font-size: 16px;
  font-weight: bold;

  @media (min-width: ${props => props.theme.AFITO_UI.xs}) {
    font-size: 12px;
  }

  @media (min-width: ${props => props.theme.AFITO_UI.md}) {
    font-size: 16px;
  }
`;
const Save = styled.div`
  color: #cdcdcd;
  font-size: 22px;
  position: absolute;
  top: 20px;
  right: 20px;

  @media (min-width: ${props => props.theme.AFITO_UI.xs}) {
    font-size: 18px;
    top: 12px;
    right: 12px;
  }

  @media (min-width: ${props => props.theme.AFITO_UI.sm}) {
    font-size: 22px;
  }
`;
const Beds = styled.div``;
const Baths = styled.div``;
const Distance = styled.div``;
const Address = styled.span`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Features = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: ${props => props.theme.AFITO_UI.bodyFont};
  margin-bottom: -3%;

  & ${Distance}, & ${Beds}, & ${Baths} {
    font-family: ${props => props.theme.AFITO_UI.headerFont};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 12px;
    margin-right: 36px;
    white-space: nowrap;

    @media (min-width: ${props => props.theme.AFITO_UI.xs}) {
      font-size: 9px;
    }

    & img {
      height: 40px;

      @media (min-width: ${props => props.theme.AFITO_UI.xs}) {
        height: 25px;
      }

      @media (min-width: ${props => props.theme.AFITO_UI.sm}) {
        height: 40px;
      }
    }

    &:last-child {
      margin-right: 0;
    }

    @media (min-width: ${props => props.theme.AFITO_UI.xs}) {
      margin-right: 10px;
    }

    @media (min-width: ${props => props.theme.AFITO_UI.sm}) {
      margin-right: 36px;
    }
  }

  & img {
    filter: brightness(0) invert(1);
  }
`;

const RecommendationBadge = styled.div`
  color: white;
  font-family: ${props => props.theme.AFITO_UI.bodyFont};
  font-weight: 700;
  font-size: 18px;
  display: flex;
  align-items: center;

  & i {
    color: #ffc820;
  }

  & span {
    @media (min-width: ${props => props.theme.AFITO_UI.xs}) {
      font-size: 10px;
      line-height: 12px;
    }

    @media (min-width: ${props => props.theme.AFITO_UI.sm}) {
      font-size: 18px;
    }
  }
`;

const Content = styled.div`
  display: flex;
  align-items: flex-end;
  position: absolute;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  padding: 4% 2%;
  z-index: 10;
`;

export default function PremiumPropertyCard({
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
  savedProperties = [],
  onRemoveSavedProperty = undefined,
  onSaveProperty = undefined,
  ...rest
}) {
  const [saved, setSaved] = useState(savedProperties.map(p => p.property_id).includes(property_id));
  const displayPrice = getDisplayPrice({ hometype, max_price, min_price, price, contact_for_pricing });
  const cardTitle = property_name ? property_name : address ? address.line1 : 'Loading...';
  const bedsRange = max_beds > min_beds ? `${min_beds}-${max_beds}` : max_beds;
  const bathsRange = max_baths > min_baths ? `${min_baths}-${max_baths}` : max_baths;
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
      <Content>
        <Save saved onClick={toggleSavedProperty}>
          {saved ? <i className="fas fa-heart" style={{ color: '#57c59b' }}></i> : <i className="far fa-heart"></i>}
        </Save>
        <Description>
          <Price>{displayPrice}</Price>
          <Title level={4}>{cardTitle}</Title>
          <Address>{fullAddress}</Address>
        </Description>
        <Row align="flex-end">
          <Column xs={4} md={4} lg={6} align="flex-start">
            <RecommendationBadge>
              <i style={{ float: 'left', marginRight: '10px' }} className="fas fa-medal"></i>
              <Text>Highly Recommended</Text>
            </RecommendationBadge>
          </Column>
          <Column xs={8} md={8} lg={6} align="flex-end">
            <Features>
              <Beds>
                <img src="https://afito-production-bucket.s3.amazonaws.com/static/icons/bed.png" alt="Beds" />
                {bedsRange ? bedsRange : beds}
              </Beds>
              <Baths>
                <img src="https://afito-production-bucket.s3.amazonaws.com/static/icons/bath.png" alt="Baths" />
                {bathsRange ? bathsRange : baths}
              </Baths>
              <Distance>
                {distance && !isNaN(Number.parseFloat(distance)) && (
                  <>
                    <img
                      src="https://afito-production-bucket.s3.amazonaws.com/static/icons/bicycle.png"
                      alt="Distance"
                    />
                    {Number.parseFloat(distance).toFixed(1)} mi
                  </>
                )}
              </Distance>
            </Features>
          </Column>
        </Row>
      </Content>
      <Image image={image_url} alt={cardTitle} />
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
  distance: PropTypes.number,
  savedProperties: PropTypes.array.isRequired,
  onSaveProperty: PropTypes.func.isRequired,
  onRemoveSavedProperty: PropTypes.func.isRequired
};
