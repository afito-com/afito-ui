import styled from 'styled-components';
import { Row } from '../../Grid';

const MobileNav = styled(Row)`
  display: flex;
  flex-wrap: wrap;

  & a {
    white-space: nowrap;
    display: flex;
    align-items: center;
    align-self: stretch;
    justify-content: center;
    color: ${props => (props.dark ? 'white' : '#334150')};
    font-family: 'Nunito', sans-serif;
    font-weight: 900;
    margin: 20px;
    text-transform: uppercase;
    font-size: 18px;
    text-decoration: none;
    border-bottom: 4px solid transparent;

    &:hover {
      border-color: ${props => props.theme.AFITO_UI.secondaryColor};
    }
  }
`;

export default MobileNav;
