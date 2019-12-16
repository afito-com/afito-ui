import React from 'react';
import InputNew from '../InputNew';
import { Field } from 'formik';
import PropTypes from 'prop-types';

InputField.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func
};

function InputField(props) {
  return (
    <Field name={props.name}>
      {({ field, meta }) => (
        <>
          <InputNew {...field} {...props} />
          {meta.touched && meta.error && <div className="error-message">{meta.error}</div>}
        </>
      )}
    </Field>
  );
}

export default InputField;
