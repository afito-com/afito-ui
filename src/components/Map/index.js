/*global google*/
import React from 'react';
import styled from 'styled-components';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';
import PropertyCard from '../PropertyCard';
import afitoPin from '../../assets/icons/m1.png';
import buildingHoverIcon from '../../assets/icons/m1.png';
import houseHoverIcon from '../../assets/icons/m1.png';

const Wrapper = styled.div`
  flex-grow: 1;
  height: calc(100vh - 68px);
  top: 0;
  bottom: 0;
`;

const Map = withScriptjs(
  withGoogleMap(props => {
    function onMarkerClick(property_id) {
      window.location = `/property/${property_id}`;
    }

    const isHovered = p => parseInt(props.hoverId, 10) === p.property_id;
    const hoverIcon = p => (p.hometype === 'building' ? buildingHoverIcon : houseHoverIcon);

    return (
      <Wrapper>
        <GoogleMap defaultZoom={15} defaultCenter={props.center}>
          {props.isMarkerShown &&
            props.properties.map(p => {
              const isPropertyHovered = isHovered(p);

              return (
                <Marker
                  key={p.property_id}
                  position={{
                    lat: parseFloat(p.lat),
                    lng: parseFloat(p.lng)
                  }}
                  icon={{
                    url: isPropertyHovered ? hoverIcon(p) : afitoPin,
                    scaledSize: new google.maps.Size(38, 53)
                  }}
                  zIndex={isHovered(p) ? 101 : 1}
                  onMouseOver={() => props.onPropertyHover(p.property_id)}
                  onMouseOut={() => props.onPropertyHover('')}
                  onClick={onMarkerClick.bind(this, p.property_id)}
                >
                  {isHovered(p) && (
                    <InfoBox
                      options={{
                        closeBoxURL: ``,
                        enableEventPropagation: true,
                        disableAutoPan: true
                      }}
                    >
                      <PropertyCard cardType="small" property={p} />
                    </InfoBox>
                  )}
                </Marker>
              );
            })}
        </GoogleMap>
      </Wrapper>
    );
  })
);

export default Map;
