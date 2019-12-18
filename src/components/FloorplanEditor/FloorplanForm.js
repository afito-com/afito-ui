import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Formik, Form as FormikForm } from 'formik';

import InputField from '../InputField';
import SelectField from '../SelectField';
import Button from '../Button';

const FormWrapper = styled(FormikForm)`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  text-align: left;
  flex-wrap: wrap;
  margin: 25px 0;
  padding-bottom: 25px;
`;

const InputWrapper = styled.div`
  padding: 0 15px;
`;

const FloorplanSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  price: Yup.number().required('Required'),
  beds: Yup.number()
    .min(0)
    .max(20)
    .required('Required'),
  baths: Yup.number()
    .min(0)
    .max(10)
    .required('Required'),
  square_footage: Yup.number(),
  contact_for_pricing: Yup.bool()
});

FloorplanForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

function FloorplanForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{
        name: '',
        price: '',
        beds: '',
        baths: '',
        square_footage: '',
        contact_for_pricing: false
      }}
      validationSchema={FloorplanSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <FormWrapper>
          <InputWrapper>
            <InputField label="Name" type="text" name="name" placeholder="Name" />
          </InputWrapper>
          <InputWrapper>
            <InputField label="Price" type="number" name="price" placeholder="Price" />
          </InputWrapper>
          <InputWrapper>
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
          </InputWrapper>
          <InputWrapper>
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
          </InputWrapper>
          <InputWrapper>
            <InputField
              label="Square footage (optional)"
              type="number"
              name="square_footage"
              placeholder="Square feet"
            />
          </InputWrapper>

          <Button type="submit" level="secondary" style={{ margin: '5px 0' }}>
            <i className="fas fa-plus" />
          </Button>
        </FormWrapper>
      )}
    </Formik>
  );
}

export default FloorplanForm;
