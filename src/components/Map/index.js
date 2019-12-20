/*global google*/
import React from 'react';
import PropTypes from 'prop-types';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';
import PropertyCard from '../PropertyCard';
import ThemeProvider from '../ThemeProvider';

function Markers({ properties, onPropertyHover, onMarkerClick, hoverId }) {
  const isHovered = p => parseInt(hoverId, 10) === p.property_id;
  const getHoverIcon = p =>
    p.hometype === 'building'
      ? 'https://afito-production-bucket.s3.amazonaws.com/static/images/building-64.png'
      : 'https://afito-production-bucket.s3.amazonaws.com/static/images/home-64.png';

  return (
    <>
      {properties.map((p, i) => {
        const isPropertyHovered = isHovered(p);

        return (
          <MemoMarker
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
              scaledSize: isPropertyHovered ? new google.maps.Size(35, 35) : new google.maps.Size(24, 33)
            }}
            zIndex={isPropertyHovered ? 101 : 1}
            onMouseOver={() => onPropertyHover(p)}
            onMouseOut={() => onPropertyHover('')}
            onClick={() => onMarkerClick(p)}
          />
        );
      })}
    </>
  );
}

const MemoMarker = React.memo(props => {
  return <Marker {...props} />;
}, MarkerPropsAreEqual);

function MarkerPropsAreEqual(prevMarker, nextMarker) {
  return (
    prevMarker.property_id === nextMarker.property_id && prevMarker.isPropertyHovered === nextMarker.isPropertyHovered
  );
}

function FloatingPropertyCard({ hoveredProperty }) {
  return (
    <InfoBox
      position={new google.maps.LatLng(parseFloat(hoveredProperty.lat), parseFloat(hoveredProperty.lng))}
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
  );
}

const MemoFloatingPropertyCard = React.memo(props => {
  return <FloatingPropertyCard {...props} />;
});

const Map = withScriptjs(
  withGoogleMap(({ properties, center, hoveredProperty = {}, onMarkerClick, onPropertyHover, onCenterChanged }) => {
    return (
      <GoogleMap defaultZoom={15} defaultCenter={center} onCenterChanged={onCenterChanged}>
        <Markers
          properties={properties}
          onPropertyHover={onPropertyHover}
          onMarkerClick={onMarkerClick}
          hoverId={hoveredProperty.property_id}
        />

        {Object.keys(hoveredProperty).length > 0 && <MemoFloatingPropertyCard hoveredProperty={hoveredProperty} />}
      </GoogleMap>
    );
  })
);

Map.propTypes = {
  properties: PropTypes.array,
  center: PropTypes.object.isRequired,
  hoveredProperty: PropTypes.object,
  onMarkerClick: PropTypes.func,
  onPropertyHover: PropTypes.func
};

export default Map;
