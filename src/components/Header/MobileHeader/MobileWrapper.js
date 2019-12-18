import styled from 'styled-components';

const MobileWrapper = styled.div`
  position: relative;
  margin-top: 7px;

  @media (min-width: ${props => props.theme.AFITO_UI.xs}) {
    display: flex;
  }

  @media (min-width: ${props => props.theme.AFITO_UI.xl}) {
    display: none;
  }
`;

export default MobileWrapper;
