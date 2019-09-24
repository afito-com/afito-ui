import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Column } from '../Grid';
import { Heading, Text } from '../Typography';
import { ModalContext } from '../ModalProvider';
import bedIcon from '../../assets/icons/bed.png';
import bathIcon from '../../assets/icons/bath.png';
import bicycleIcon from '../../assets/icons/bicycle.png';
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
  max-height: 303px;
  height: 40vw;
  min-height: 225px;
  box-sizing: border-box;
  overflow: hidden;
  max-width: 752px;
  width: 100%;
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
  font-size: 16px;

  @media (min-width: ${props => props.theme.AFITO_UI.xs}) {
    font-size: 12px;
  }

  @media (min-width: ${props => props.theme.AFITO_UI.md}) {
    font-size: 16px;
  }
`;

const Title = styled(Heading)`
  margin: 10px 0;

  @media (min-width: ${props => props.theme.AFITO_UI.xs}) {
    font-size: 16px;
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

    & img {
      height: 40px;

      @media (min-width: ${props => props.theme.AFITO_UI.xs}) {
        height: 30px;
      }

      @media (min-width: ${props => props.theme.AFITO_UI.sm}) {
        height: 40px;
      }
    }

    &:last-child {
      margin-right: 0;
    }

    @media (min-width: ${props => props.theme.AFITO_UI.xs}) {
      margin-right: 16px;
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
      font-size: 12px;
      line-height: 16px;
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
      <span style={{ whiteSpace: 'nowrap' }}>
        {address.line1},{address.line2 && ` ${address.line2},`}&nbsp;
      </span>
      <span style={{ whiteSpace: 'nowrap' }}>
        {address.city},&nbsp;{address.state}
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
        <Save saved onClick={toggleFavorite}>
          {saved ? <i className="fas fa-heart" style={{ color: '#57c59b' }}></i> : <i className="far fa-heart"></i>}
        </Save>
        <Description>
          <Price>{displayPrice}</Price>
          <Title level={4}>{cardTitle}</Title>
          <Address>{fullAddress}</Address>
        </Description>
        <Row align="flex-end">
          <Column xs={4} md={6} align="flex-start">
            <RecommendationBadge>
              <i style={{ float: 'left', marginRight: '10px' }} className="fas fa-medal"></i>
              <Text>Highly Recommended</Text>
            </RecommendationBadge>
          </Column>
          <Column xs={8} md={6} align="flex-end">
            <Features>
              <Beds>
                <img src={bedIcon} alt="Beds" />
                &nbsp;{bedsRange ? bedsRange : beds}
              </Beds>
              <Baths>
                <img src={bathIcon} alt="Baths" />
                &nbsp;{bathsRange ? bathsRange : baths}
              </Baths>
              <Distance>
                <img src={bicycleIcon} alt="Distance" />
                &nbsp;1.2 mi
              </Distance>
            </Features>
          </Column>
        </Row>
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
