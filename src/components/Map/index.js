/*global google*/
import React from 'react';
import styled from 'styled-components';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';
import PropertyCard from '../PropertyCard';
import ThemeProvider from '../ThemeProvider';

const Map = withScriptjs(
  withGoogleMap(props => {
    function onMarkerClick(property_id) {
      window.location = `/property/${property_id}`;
    }

    const isHovered = p => parseInt(props.hoverId, 10) === p.property_id;
    const hoverIcon = p =>
      p.hometype === 'building'
        ? 'https://afito-production-bucket.s3.amazonaws.com/static/icons/m1.png'
        : 'https://afito-production-bucket.s3.amazonaws.com/static/icons/m1.png';

    return (
      <GoogleMap defaultZoom={15} defaultCenter={props.center}>
        {props.isMarkerShown &&
          props.properties.map(p => {
            const isPropertyHovered = isHovered(p);

            console.log('isPropertyHovered: ', isPropertyHovered);

            return (
              <Marker
                key={p.property_id}
                position={{
                  lat: parseFloat(p.lat),
                  lng: parseFloat(p.lng)
                }}
                icon={{
                  url: isPropertyHovered
                    ? hoverIcon(p)
                    : 'https://afito-production-bucket.s3.amazonaws.com/static/icons/m1.png',
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
                    <ThemeProvider>
                      <PropertyCard isCondensed style={{ width: '250px', height: '300px' }} {...p} />
                    </ThemeProvider>
                  </InfoBox>
                )}
              </Marker>
            );
          })}
      </GoogleMap>
    );
  })
);

export default Map;
