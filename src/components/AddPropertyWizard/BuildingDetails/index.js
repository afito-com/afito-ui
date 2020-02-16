import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';
import SelectField from '../../SelectField';
import TextareaField from '../../TextareaField';
import InputField from '../../InputField';
import { Heading, Text } from '../../Typography';
import { Row, Column } from '../../Grid';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';

BuildingDetails.propTypes = {
  property: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  setHometype: PropTypes.func.isRequired,
  areas: PropTypes.array.isRequired,
  currScreen: PropTypes.number.isRequired,
  prevScreen: PropTypes.func.isRequired
};

const BuildingDetailsSchema = Yup.object().shape({
  area_id: Yup.number().required('Required'),
  property_name: Yup.string().required('Required'),
  parking: Yup.boolean().required('Required'),
  description: Yup.string().required('Required')
});

function BuildingDetails({ property, areas, onSubmit, setHometype }) {
  const items = areas.map(area => ({ name: area.name, value: area.area_id }));

  return (
    <>
      <div style={{ marginBottom: '25px' }}>
        <Heading level={3}>Building Information</Heading>
        <Text>Enter your building&apos;s information.</Text>
      </div>

      <Formik initialValues={property} validationSchema={BuildingDetailsSchema} onSubmit={onSubmit}>
        {({ resetForm }) => (
          <Form>
            <Row canWrap>
              <Column xs={12} align="flex-start" style={{ marginBottom: '32px' }}>
                <SelectField label="School" name="area_id">
                  <option value="" disabled>
                    School
                  </option>
                  {items.map(area => {
                    return (
                      <option key={area.value} value={area.value}>
                        {area.name}
                      </option>
                    );
                  })}
                </SelectField>
                <InputField name="property_name" label="Building Name" placeholder="Building Name" />
              </Column>
              <Column xs={12} align="flex-start">
                <SelectField label="Parking" name="parking">
                  <option value="" disabled>
                    Parking
                  </option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </SelectField>
              </Column>
              <Column xs={12} align="flex-start">
                <TextareaField label="Description" name="description" rows="6" placeholder="Description" />
              </Column>
            </Row>

            <Row>
              <Button
                level="outline"
                onClick={() => {
                  resetForm();
                  setHometype(null);
                }}
              >
                Back
              </Button>
              <Button level="secondary" type="submit">
                Next
              </Button>
            </Row>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default BuildingDetails;
