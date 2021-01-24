import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.header`
  ${props =>
    props.isFixed &&
    `
    position: fixed;
    left: 0;
    width: 100%;
    top: 0;
    z-index: 10;
    box-sizing: border-box;
  `};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  height: 90px;
  box-shadow: ${props => (props.dark ? 'none' : '0px 16px 7px -10px rgba(200, 203, 216, 0.26)')};
  border-bottom: 2px solid #eceef4;
  border-color: ${props => (props.dark ? 'transparent' : '#eceef4')};
  align-items: center;

  @media (min-width: ${props => props.theme.AFITO_UI.xs}) {
    background: white;
  }

  @media (min-width: ${props => props.theme.AFITO_UI.lg}) {
    background: ${props => (props.dark ? 'transparent' : 'white')};
  }
`;

Wrapper.propTypes = {
  dark: PropTypes.bool.isRequired
};

export default Wrapper;
