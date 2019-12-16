import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';

import GeoSearch from './GeoSearch';
import Details from './Details';
import AmenitiesPicker from './AmenitiesPicker';
import ImageUpload from './ImageUpload';
import ProgressBar from './ProgressBar';
import Controls from './Controls';

import Alert from '../Alert';
import Button from '../Button';
import { Heading, Text } from '../Typography';
import { Row } from '../Grid';

import { getAddressLocation } from '../../api/utils';
import { getAreas } from '../../api/search';
import { getAmenities } from '../../api/amenities';
import { uploadImage } from '../../api/s3';
import { createProperty } from '../../api';

const Screen = styled.div`
  padding: 1rem;
  margin-bottom: 75px;
  margin-top: 54px;
`;

AddPropertyWizard.propTypes = {
  onCompleted: PropTypes.func
};

function AddPropertyWizard({ onCompleted }) {
  const screens = ['Locate', 'Listing Details', 'Amenities', 'Photos'];
  const restoreState = Cookies.getJSON('AddPropertyState');
  const [restoreMode, setRestoreMode] = useState(restoreState);
  const [currScreen, setCurrScreen] = useState(0);
  const [maxStep, setMaxStep] = useState(0);
  const [dirty, setDirty] = useState(false);
  const [error, setError] = useState();
  const [areas, setAreas] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [property, setProperty] = useState({
    property_name: '',
    area_id: '',
    line1: '',
    line2: '',
    city: '',
    state: '',
    image_url: '',
    description: '',
    active: true,
    beds: '',
    square_footage: '',
    baths: '',
    parking: '',
    price: '',
    hometype: null,
    max_occupancy: '',
    lat: null,
    lng: null,
    images: [],
    amenities: [],
    contact_for_pricing: false
  });

  // Save wizard state on each step
  useEffect(() => {
    function saveState() {
      Cookies.set('AddPropertyState', { property, currScreen, maxStep });
    }

    if (currScreen > 0) saveState();
  }, [currScreen, maxStep, property]);

  useEffect(() => {
    if (screens[currScreen] === 'Listing Details' && areas.length === 0) {
      getAreas({ params: { location: `${property.lat || 39.8532382},${property.lng || -75.743374},160000` } })
        .then(res => {
          setAreas(res.data.areas);
        })
        .catch(onError);
    }
  }, [areas.length, currScreen, property.lat, property.lng, screens]);

  useEffect(() => {
    if (screens[currScreen] === 'Amenities' && amenities.length === 0) {
      getAmenities()
        .then(res => {
          setAmenities(res.data.amenities);
        })
        .catch(onError);
    }
  }, [currScreen, screens, amenities.length]);

  function restoreAddPropertyState() {
    const { property, currScreen, maxStep } = Cookies.getJSON('AddPropertyState');
    if (property && currScreen && maxStep) {
      setProperty(property);
      setCurrScreen(currScreen);
      setMaxStep(maxStep);
    }
  }

  function deleteState() {
    return Cookies.remove('AddPropertyState');
  }

  function onError(err, message) {
    if (message) setError(message);
    else if (err.response) setError(err.response.data.message);
    else setError('Unknown Error');
  }

  function updatePropertyInfo(e) {
    setDirty(true);
    setProperty({ ...property, [e.target.name]: e.target.value });
  }

  function onFinishAddProperty() {
    createProperty(property)
      .then(res => {
        if (res.status === 200) {
          return deleteState();
        }
      })
      .then(onCompleted)
      .catch(onError);
  }

  function nextScreen() {
    if (currScreen < screens.length - 1) {
      setCurrScreen(currScreen + 1);
    }

    if (currScreen > maxStep) {
      setMaxStep(currScreen + 1);
    }
  }

  function prevScreen() {
    if (currScreen > 0) {
      setCurrScreen(currScreen - 1);
    }
  }

  function promptExit() {
    if (dirty) {
      alert('You will lose the progress you made. Are you sure you want to cancel?');
    }

    return null;
  }

  function renderActiveScreen() {
    let activeScreen = screens[currScreen];
    switch (activeScreen) {
      case 'Locate':
        return (
          <GeoSearch
            property={property}
            currScreen={currScreen}
            prevScreen={prevScreen}
            promptExit={promptExit}
            onChange={updatePropertyInfo}
            onGeoSearch={property => {
              const { line1, city, state } = property;
              const address = (line1 + ', ' + city + ', ' + state).split(' ').join('+');
              getAddressLocation(address)
                .then(res => {
                  const { lat, lng } = res.data.results[0].geometry.location;
                  setProperty({ ...property, lat, lng });
                })
                .catch(err => {
                  onError(err, 'We were unable to locate your property. Try again later.');
                });
            }}
            onSubmit={() => nextScreen()}
            onCancel={() => {
              setProperty({ ...property, lat: null, lng: null });
            }}
          />
        );
      case 'Listing Details':
        return (
          <Details
            areas={areas}
            property={property}
            currScreen={currScreen}
            prevScreen={prevScreen}
            promptExit={promptExit}
            onChange={updatePropertyInfo}
            setHometype={hometype => {
              setProperty({ ...property, hometype });
            }}
            onSubmit={property => {
              setProperty(property);
              nextScreen();
            }}
          />
        );
      case 'Amenities':
        return (
          <AmenitiesPicker
            property={property}
            currScreen={currScreen}
            prevScreen={prevScreen}
            promptExit={promptExit}
            setAmenity={amenities => {
              setProperty({ ...property, amenities });
            }}
            amenities={amenities}
            onSubmit={nextScreen}
          />
        );
      case 'Photos':
        return (
          <ImageUpload
            currScreen={currScreen}
            onSubmit={images => {
              if (!images.length > 0)
                return onError({}, 'No image selected, please choose at least a cover photo before submitting.');

              setLoading(true);
              Promise.all(images.map(img => uploadImage(img)))
                .then(images => {
                  // first image is cover photo, the rest are extra
                  setProperty({ ...property, image_url: images[0], images: images.slice(1) });
                })
                .catch(onError)
                .finally(() => {
                  setLoading(false);
                  onFinishAddProperty();
                });
            }}
            prevScreen={prevScreen}
            promptExit={promptExit}
            property={property}
            loading={loading}
          />
        );
    }
  }

  return (
    <>
      <ProgressBar jumpToScreen={setCurrScreen} maxStep={maxStep} currScreen={currScreen} screens={screens} />
      <Screen>
        {error && (
          <Alert style={{ marginBottom: '25px' }} type="danger">
            {error}
          </Alert>
        )}
        {restoreMode ? (
          <>
            <Heading level={4}>You never finished uploading {restoreState.property.line1}.</Heading>
            <Text>Do you want to continue where you left off?</Text>
            <Row>
              <Button
                level="danger"
                onClick={() => {
                  setRestoreMode(false);
                  deleteState();
                }}
              >
                No
              </Button>
              <Button
                level="secondary"
                onClick={() => {
                  setRestoreMode(false);
                  restoreAddPropertyState();
                }}
              >
                Yes
              </Button>
            </Row>
          </>
        ) : (
          <>{renderActiveScreen()}</>
        )}
      </Screen>
    </>
  );
}

export default AddPropertyWizard;
