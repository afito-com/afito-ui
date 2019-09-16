import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.table`
  border-collapse: collapse;
  width: 100%;
  font-family: ${props => props.theme.AFITO_UI.bodyFont};
`;
const Row = styled.tr`
  &:nth-child(even) {
    background: #f8fafb;
  }

  &:nth-child(odd) {
    background: white;
  }
`;
const Head = styled.thead`
  & ${Row} {
    background: #f8fafb;
  }
`;
const Header = styled.th`
  padding: 0px 20px;
  text-align: left;
`;
const Body = styled.tbody``;

const Column = styled.td`
  padding: 20px;
  color: #505050;
`;

function Table({ rows, headers, ...rest }) {
  return (
    <Wrapper {...rest}>
      <Head>
        <Row>
          {headers.map((header, i) => (
            <Header key={`Header_${i}`} align="left">
              {header}
            </Header>
          ))}
        </Row>
      </Head>
      <Body>
        {rows.map((row, i) => {
          return (
            <Row key={`Row_${i}`}>
              {Object.keys(row).map((column, j) => (
                <Column key={`Column_${i}`}>{row[column]}</Column>
              ))}
            </Row>
          );
        })}
      </Body>
    </Wrapper>
  );
}

Table.propTypes = {
  rows: PropTypes.array.isRequired,
  headers: PropTypes.array
};

export default Table;
