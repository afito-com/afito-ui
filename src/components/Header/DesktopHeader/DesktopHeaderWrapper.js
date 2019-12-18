import styled from 'styled-components';

const DesktopHeaderWrapper = styled.div`
  width: 100%;
  justify-content: space-between;

  @media (min-width: ${props => props.theme.AFITO_UI.xs}) {
    display: none;
  }

  @media (min-width: ${props => props.theme.AFITO_UI.lg}) {
    display: flex;
  }
`;

export default DesktopHeaderWrapper;
