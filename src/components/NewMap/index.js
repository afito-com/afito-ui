import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { GoogleMap, Marker, useLoadScript, InfoBox } from '@react-google-maps/api';
import PropertyCard from '../PropertyCard';
import ThemeProvider from '../ThemeProvider';
import config from '../../../config';
import styles from './mapStyles';

export default function NewMap({
  onCenterChanged,
  onMarkerClick,
  onPropertyHover,
  loadingElement,
  center,
  zoom = 15,
  hoveredProperty = {},
  properties = [],
  height = '500px',
  width = '100%'
}) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: config.mapsKey
  });

  const options = {
    center,
    zoom,
    styles
  };

  const Map = () => {
    const map = useRef();

    const onLoad = function onLoad(mapInstance) {
      map.current = mapInstance;
    };

    const isHovered = p => parseInt(hoveredProperty.property_id, 10) === p.property_id;
    const getHoverIcon = p =>
      p.hometype === 'building'
        ? 'https://afito-production-bucket.s3.amazonaws.com/static/images/building-64.png'
        : 'https://afito-production-bucket.s3.amazonaws.com/static/images/home-64.png';

    return (
      <div style={{ display: 'flex', height: 'calc(100vh - 50px)' }}>
        <GoogleMap
          options={options}
          mapContainerStyle={{
            height,
            width
          }}
          onLoad={onLoad}
          onCenterChanged={() => {
            if (map.current) {
              onCenterChanged(map.current.center);
            }
          }}
        >
          {properties.map((p, i) => {
            const isPropertyHovered = isHovered(p);

            return (
              <Marker
                key={p.property_id || `Marker__${i}`}
                property_id={p.property_id}
                position={{
                  lat: parseFloat(p.lat),
                  lng: parseFloat(p.lng)
                }}
                isPropertyHovered={isPropertyHovered}
                icon={{
                  url: isPropertyHovered
                    ? getHoverIcon(p)
                    : 'https://afito-production-bucket.s3.amazonaws.com/static/icons/m1.png',
                  scaledSize: isPropertyHovered
                    ? new window.google.maps.Size(35, 35)
                    : new window.google.maps.Size(24, 33)
                }}
                zIndex={isPropertyHovered ? 101 : 1}
                onMouseOver={() => onPropertyHover(p)}
                onMouseOut={() => onPropertyHover('')}
                onClick={() => onMarkerClick(p)}
              />
            );
          })}
          {Object.keys(hoveredProperty).length > 0 && (
            <InfoBox
              position={new window.google.maps.LatLng(parseFloat(hoveredProperty.lat), parseFloat(hoveredProperty.lng))}
              options={{
                closeBoxURL: ``,
                enableEventPropagation: true,
                disableAutoPan: true
              }}
            >
              <ThemeProvider>
                <PropertyCard isCondensed style={{ width: '150px', height: '200px' }} {...hoveredProperty} />
              </ThemeProvider>
            </InfoBox>
          )}
        </GoogleMap>
      </div>
    );
  };

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  return isLoaded ? <Map /> : loadingElement;
}

NewMap.propTypes = {
  properties: PropTypes.array.isRequired,
  onPropertyHover: PropTypes.func,
  onMarkerClick: PropTypes.func,
  onCenterChanged: PropTypes.func,
  hoveredProperty: PropTypes.object,
  loadingElement: PropTypes.node,
  height: PropTypes.string,
  width: PropTypes.string,
  center: PropTypes.object,
  zoom: PropTypes.number
};
