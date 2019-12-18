import styled from 'styled-components';
import { Row } from '../../Grid';

const MobileHeaderWrapper = styled(Row)`
  z-index: 100;

  @media (min-width: ${props => props.theme.AFITO_UI.xs}) {
    display: flex;
  }

  @media (min-width: ${props => props.theme.AFITO_UI.lg}) {
    display: none;
  }
`;

export default MobileHeaderWrapper;
