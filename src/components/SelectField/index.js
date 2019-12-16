import React from 'react';
import SelectNew from '../SelectNew';
import { Field } from 'formik';
import PropTypes from 'prop-types';

SelectField.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func
};

function SelectField(props) {
  return (
    <Field name={props.name}>
      {({ field, meta }) => (
        <>
          <SelectNew {...field} {...props} />
          {meta.touched && meta.error && <div className="error-message">{meta.error}</div>}
        </>
      )}
    </Field>
  );
}

export default SelectField;
