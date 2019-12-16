import React from 'react';
import TextareaNew from '../TextareaNew';
import { Field } from 'formik';
import PropTypes from 'prop-types';

TextareaField.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func
};

function TextareaField(props) {
  return (
    <Field name={props.name}>
      {({ field, meta }) => (
        <>
          <TextareaNew {...field} {...props} />
          {meta.touched && meta.error && <div className="error-message">{meta.error}</div>}
        </>
      )}
    </Field>
  );
}

export default TextareaField;
