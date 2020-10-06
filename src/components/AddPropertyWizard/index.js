import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';

import GeoSearch from './GeoSearch';
import Details from './Details';
import AmenitiesPicker from '../AmenitiesPicker';
import ImageUpload from './ImageUpload';
import Completed from './Completed';
import ProgressBar from './ProgressBar';

import Alert from '../Alert';
import Button from '../Button';
import { Heading, Text } from '../Typography';
import { Row } from '../Grid';
import Paywall from '../Paywall';

import { getAddressLocation } from '../../api/utils';
import { getAreas } from '../../api/search';
import { getAmenities } from '../../api/amenities';
import { uploadImage } from '../../api/s3';

const Screen = styled.div`
  padding: 1rem;
`;

function AddPropertyWizard({
  createProperty,
  isReturningCustomer,
  paywall,
  onPaywallComplete,
  onPropertyCreated,
  onCompleted,
  user_id
}) {
  const screens = paywall
    ? ['Locate', 'Listing Details', 'Amenities', 'Photos', 'Subscription', 'Complete']
    : ['Locate', 'Listing Details', 'Amenities', 'Photos', 'Complete'];
  const restoreState =
    Cookies.getJSON('AddPropertyState') && Cookies.getJSON('AddPropertyState').hasPayWall === paywall
      ? Cookies.getJSON('AddPropertyState')
      : undefined;
  const [restoreMode, setRestoreMode] = useState(restoreState);
  const [currScreen, setCurrScreen] = useState(0);
  const [maxStep, setMaxStep] = useState(0);
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
    amenities_ids: [],
    contact_for_pricing: false
  });

  // Save wizard state on each step
  useEffect(() => {
    function saveState() {
      Cookies.set('AddPropertyState', { property, currScreen, maxStep, hasPayWall: paywall });
    }

    if (currScreen > 0 && currScreen < screens.length - 1) saveState();
  }, [currScreen, maxStep, paywall, property, screens.length]);

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
    console.log('ADDPROPERTY ERR: ', { err, message });
    if (message) setError(message);
    else if (err.response) setError(err.response.data.message);
    else setError('Unknown Error');
  }

  function updatePropertyInfo(e) {
    setProperty({ ...property, [e.target.name]: e.target.value });
  }

  function onFinishAddProperty(property) {
    return createProperty({ property })
      .then(res => {
        if (res.status === 200) {
          return res.data.property;
        }
      })
      .then(property => {
        setProperty({ ...property, address: JSON.parse(property.address) });
        nextScreen();
        onPropertyCreated(property);
      })
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

  function renderActiveScreen() {
    let activeScreen = screens[currScreen];
    switch (activeScreen) {
      case 'Locate':
        return (
          <GeoSearch
            property={property}
            currScreen={currScreen}
            prevScreen={prevScreen}
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
            prevScreen={prevScreen}
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
            setAmenity={amenities => {
              setProperty({ ...property, amenities_ids: amenities });
            }}
            amenities={amenities}
            onSubmit={nextScreen}
            wizard={true}
          />
        );
      case 'Photos':
        return (
          <ImageUpload
            onSubmit={images => {
              if (!images.length > 0)
                return onError({}, 'No image selected, please choose at least a cover photo before submitting.');

              setLoading(true);
              Promise.all(images.map(img => uploadImage(img)))
                .then(images => {
                  // first image is cover photo, the rest are extra
                  return { ...property, image_url: images[0], images: images.slice(1) };
                })
                .then(onFinishAddProperty)
                .catch(onError)
                .finally(() => {
                  setLoading(false);
                });
            }}
            loading={loading}
          />
        );
      case 'Subscription':
        return (
          <Paywall
            isReturningCustomer={isReturningCustomer}
            user_id={user_id}
            property={property}
            onCompleted={stripeToken => {
              onPaywallComplete(stripeToken, property)
                .then(() => {
                  nextScreen();
                  deleteState();
                })
                .catch(onError);
            }}
          />
        );
      case 'Complete':
        return (
          <Completed
            onCompleted={() => {
              // deleteState();
              onCompleted(property);
            }}
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

AddPropertyWizard.propTypes = {
  /** The function to create the property. */
  user_id: PropTypes.number.isRequired,
  /** The function to create the property. */
  createProperty: PropTypes.func.isRequired,
  /** Determines if the wizard includes the paywall step */
  paywall: PropTypes.bool,
  /**
   * The function that runs after
   * the paywall has been submitted
   */
  onPaywallComplete: PropTypes.func,
  /** The function to create the property. */
  onCompleted: PropTypes.func,
  /** The function to create the property. */
  onPropertyCreated: PropTypes.func.isRequired,
  /** True if the user has payment info on file */
  isReturningCustomer: PropTypes.bool
};

export default AddPropertyWizard;
