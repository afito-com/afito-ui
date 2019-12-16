import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Heading, Text } from '../../Typography';
import Map from '../../Map';
import InputField from '../../InputField';
import Button from '../../Button';
import { Row, Column } from '../../Grid';
import { Formik, Form } from 'formik';
import * as keys from '../../../../config';
import * as Yup from 'yup';

GeoSearch.propTypes = {
  property: PropTypes.object.isRequired,
  onGeoSearch: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

const GeoSearchSchema = Yup.object().shape({
  line1: Yup.string().required('Required'),
  line2: Yup.string(),
  city: Yup.string().required('Required'),
  state: Yup.string().required('Required')
});

const GeoForm = styled(Form)``;

function GeoSearch({ property, onGeoSearch, onSubmit, onCancel }) {
  const { lat, lng } = property;

  if (lat && lng) {
    return (
      <>
        <Heading level={3} style={{ marginBottom: '25px' }}>
          Is this correct?
        </Heading>
        <Map
          properties={[property]}
          isMarkerShown
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${keys.mapsKey}`}
          loadingElement={<div style={{ height: '100%', width: '100%' }} />}
          containerElement={<div style={{ height: '300px', width: '100%', borderRadius: '8px', overflow: 'hidden' }} />}
          mapElement={<div style={{ height: '100%', width: '100%' }} />}
          center={{ lat, lng }}
          onPropertyHover={() => {}}
          onMarkerClick={() => {}}
        />
        <Row>
          <Button onClick={onCancel} level="danger">
            No
          </Button>
          <Button onClick={onSubmit} level="secondary">
            Yes
          </Button>
        </Row>
      </>
    );
  } else {
    return (
      <>
        <div style={{ marginBottom: '25px' }}>
          <Heading level={3}>Find Your Property</Heading>
          <Text>Enter the address of your property.</Text>
        </div>

        <Formik initialValues={property} validationSchema={GeoSearchSchema} onSubmit={onGeoSearch}>
          {() => (
            <GeoForm>
              <Row>
                <Column xs={12} sm={8} md={6} align="flex-start">
                  <InputField
                    label="Street Address"
                    placeholder="Street and number, P.O. box, c/o."
                    type="text"
                    name="line1"
                  />
                  <InputField
                    style={{ marginTop: '12px' }}
                    label="Apt. (optional)"
                    placeholder="Apartment, suite, unit, building, floor, etc."
                    type="text"
                    name="line2"
                  />
                  <InputField style={{ marginTop: '12px' }} label="City" placeholder="City" type="text" name="city" />
                  <InputField
                    style={{ marginTop: '12px' }}
                    label="State"
                    placeholder="State"
                    type="text"
                    name="state"
                  />
                  <Button type="submit" level="secondary" style={{ marginTop: '24px' }}>
                    Find My Property&nbsp;
                  </Button>
                </Column>
              </Row>
            </GeoForm>
          )}
        </Formik>
      </>
    );
  }
}

export default GeoSearch;
