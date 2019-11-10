import styled from 'styled-components';
import PropTypes from 'prop-types';

const Section = styled.section`
  padding: ${props => (props.spacing ? `${props.spacing}px 0` : `20px 0`)};
`;

Section.propTypes = {
  spacing: PropTypes.number
};

export default Section;
