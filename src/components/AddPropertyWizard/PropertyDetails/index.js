import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';
import SearchBoxField from '../../SearchboxField';
import SwitchField from '../../SwitchField';
import SelectField from '../../SelectField';
import TextareaField from '../../TextareaField';
import { Heading, Text } from '../../Typography';
import { Row, Column } from '../../Grid';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import InputField from '../../InputField';

PropertyDetails.propTypes = {
  property: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  setHometype: PropTypes.func.isRequired,
  areas: PropTypes.object.isRequired,
  promptExit: PropTypes.func.isRequired,
  currScreen: PropTypes.number.isRequired,
  prevScreen: PropTypes.func.isRequired
};

const PropertyDetailsSchema = Yup.object().shape({
  area_id: Yup.number().required('Required'),
  price: Yup.number('Price must be a number')
    .test(function(value) {
      if (!this.parent.contact_for_pricing)
        return value != null
          ? true
          : this.createError({
              message: `Either 'Price' or 'Contact For Pricing' must be set.`,
              path: 'price'
            });
      return true;
    })
    .positive('Price must be a positive number'),
  contact_for_pricing: Yup.bool().test(function(value) {
    if (!this.parent.price)
      return value != null
        ? true
        : this.createError({
            message: `Either 'Price' or 'Contact For Pricing' must be set.`,
            path: 'contact_for_pricing'
          });
    return true;
  }),
  beds: Yup.number('Beds must be a number')
    .min(0)
    .required('Required'),
  baths: Yup.number('Baths must be a number')
    .min(0)
    .required('Required'),
  hometype: Yup.mixed()
    .oneOf(
      ['single family', 'condo', 'apartment', 'town house', 'studio', 'other', 'multi family'],
      'That is not a valid Home Type'
    )
    .required('Required'),
  description: Yup.string().required('Required'),
  square_footage: Yup.number(),
  max_occupancy: Yup.number('Max Occupancy must be a number')
});

function PropertyDetails({ property, areas, onSubmit, setHometype }) {
  const items = areas.map(area => ({ name: area.name, value: area.area_id }));

  return (
    <>
      <div style={{ marginBottom: '25px' }}>
        <Heading level={3}>Property Information</Heading>
        <Text>Enter your property information.</Text>
      </div>

      <Formik initialValues={property} validationSchema={PropertyDetailsSchema} onSubmit={onSubmit}>
        {({ setFieldValue, resetForm }) => (
          <Form>
            <Row canWrap>
              <Column xs={12} align="flex-start" style={{ marginBottom: '32px' }}>
                <SearchBoxField
                  onItemClick={item => setFieldValue('area_id', item.value)}
                  items={items}
                  onChange={e => {
                    let selection = areas.find(area => area.name.toLowerCase() === e.target.value.toLowerCase());
                    if (selection) setFieldValue('area_id', selection.area_id);
                    else setFieldValue('area_id', '');
                  }}
                  name="area_id"
                  placeholder="School"
                  label="School"
                />
                <InputField name="price" type="number" label="Price" placeholder="Price" />
                <Row>
                  <Text>Contact For Pricing</Text>
                  <SwitchField name="contact_for_pricing" onClick={e => e.stopPropagation()} />
                </Row>
              </Column>
              <Column xs={12} sm={6} align="flex-start">
                <SelectField label="Beds" name="beds">
                  <option value="" disabled>
                    Beds
                  </option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                </SelectField>
                <InputField
                  label="Square feet (Optional)"
                  id="square_footage"
                  type="number"
                  name="square_footage"
                  placeholder="Square feet"
                />
                <SelectField label="Max occupancy (Optional)" id="max_occupancy" name="max_occupancy">
                  <option value="" disabled>
                    Max occupancy
                  </option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10+</option>
                </SelectField>
              </Column>
              <Column xs={12} sm={6} align="flex-start">
                <SelectField label="Baths" name="baths">
                  <option value="" disabled>
                    Baths
                  </option>
                  <option value="0">0</option>
                  <option value="0.5">0.5</option>
                  <option value="1">1</option>
                  <option value="1.5">1.5</option>
                  <option value="2">2</option>
                  <option value="2.5">2.5</option>
                  <option value="3">3</option>
                  <option value="3.5">3.5</option>
                  <option value="4">4</option>
                  <option value="4.5">4.5</option>
                  <option value="5">5</option>
                  <option value="5.5">5.5</option>
                  <option value="6">6</option>
                  <option value="6.5">6.5</option>
                  <option value="7">7</option>
                  <option value="7.5">7.5</option>
                  <option value="8">8</option>
                  <option value="8.5">8.5</option>
                  <option value="9">9</option>
                  <option value="9.5">9.5</option>
                  <option value="10">10</option>
                </SelectField>
                <SelectField label="Parking" name="parking">
                  <option value="" disabled>
                    Parking
                  </option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </SelectField>
                <SelectField label="Home Type" name="hometype">
                  <option value="" disabled>
                    Home Type
                  </option>
                  <option value="apartment">Apartment</option>
                  <option value="single family">Single Family</option>
                  <option value="multi family">Multi Family</option>
                  <option value="condo">Condo</option>
                  <option value="town house">Town house</option>
                  <option value="studio">Studio</option>
                  <option value="other">Other</option>
                </SelectField>
              </Column>
              <Row>
                <Column xs={12} align="flex-start">
                  <TextareaField label="Description" name="description" rows="6" placeholder="Description" />
                </Column>
              </Row>
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

export default PropertyDetails;
