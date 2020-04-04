import styled from 'styled-components';

const Save = styled.div`
  color: #cdcdcd;
  font-size: 22px;

  @media (min-width: ${props => props.theme.AFITO_UI.xs}) {
    font-size: 18px;
  }

  @media (min-width: ${props => props.theme.AFITO_UI.sm}) {
    font-size: 22px;
  }
`;

export default Save;
