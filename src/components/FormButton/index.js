import ValidationButton from 'react-validation/build/button';

const FormButton = ({ level, children, ...rest }) => (
  <ValidationButton {...rest} className={`btn btn--${level}`}>
    {children}
  </ValidationButton>
);

export default FormButton;
