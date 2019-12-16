import React from 'react';
import Searchbox from '../Searchbox';
import { Field } from 'formik';
import PropTypes from 'prop-types';

SearchboxField.propTypes = {
  items: PropTypes.array,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
  onItemClick: PropTypes.func
};

function SearchboxField(props) {
  return (
    <Field name={props.name}>
      {({ field, meta }) => {
        return (
          <>
            <Searchbox {...field} {...props} />
            {meta.touched && meta.error && <div className="error-message">{meta.error}</div>}
          </>
        );
      }}
    </Field>
  );
}

export default SearchboxField;
