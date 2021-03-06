import styled from 'styled-components';
import PropTypes from 'prop-types';

const Menu = styled.div`
  position: absolute;
  background: white;
  left: -132px;
  top: 70px;
  width: 200px;
  padding: 20px;
  border-radius: 8px;
  display: ${props => (props.open ? 'flex' : 'none')};
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0px 3px 49px 0px rgba(24, 38, 107, 0.16);
  z-index: 10000;

  &:before {
    content: '';
    position: absolute;
    left: 78%;
    top: -14px;
    width: 0;
    height: 0;
    border-color: transparent transparent white;
    border-style: solid;
    border-width: 0 14px 14px;
    margin: 0 0 0 -14px;
  }

  & a {
    width: auto;
    white-space: nowrap;
    display: flex;
    align-items: center;
    align-self: stretch;
    justify-content: center;
    color: #334150 !important;
    font-family: 'Nunito', sans-serif;
    font-weight: 900;
    margin: 10px !important;
    text-transform: uppercase;
    font-size: 18px;
    text-decoration: none;
    border-bottom: 4px solid transparent;

    &:hover {
      border-color: ${props => props.theme.AFITO_UI.secondaryColor};
    }
  }
`;

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
  dark: PropTypes.bool.isRequired
};

export default Menu;
