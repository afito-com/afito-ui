import React from 'react';
import Switch from '../Switch';
import { Field } from 'formik';
import PropTypes from 'prop-types';

SwitchField.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func
};

function SwitchField(props) {
  return (
    <Field name={props.name}>
      {({ field, meta }) => (
        <>
          <Switch {...field} {...props} />
          {meta.touched && meta.error && <div className="error-message">{meta.error}</div>}
        </>
      )}
    </Field>
  );
}

export default SwitchField;
