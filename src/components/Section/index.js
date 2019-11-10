import styled from 'styled-components';
import PropTypes from 'prop-types';

const Section = styled.section`
  @media (min-width: ${props => props.theme.AFITO_UI.xs}) {
    padding: ${props => (props.xs ? `${props.xs}px 0` : `20px 0`)};
  }
  @media (min-width: ${props => props.theme.AFITO_UI.sm}) {
    padding: ${props => (props.sm ? `${props.sm}px 0` : `20px 0`)};
  }
  @media (min-width: ${props => props.theme.AFITO_UI.md}) {
    padding: ${props => (props.md ? `${props.md}px 0` : `20px 0`)};
  }
  @media (min-width: ${props => props.theme.AFITO_UI.lg}) {
    padding: ${props => (props.lg ? `${props.lg}px 0` : `20px 0`)};
  }
  @media (min-width: ${props => props.theme.AFITO_UI.xl}) {
    padding: ${props => (props.xl ? `${props.xl}px 0` : `20px 0`)};
  }
  @media (min-width: ${props => props.theme.AFITO_UI.xll}) {
    padding: ${props => (props.xxl ? `${props.xxl}px 0` : `20px 0`)};
  }
`;

Section.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  xxl: PropTypes.number
};

export default Section;
