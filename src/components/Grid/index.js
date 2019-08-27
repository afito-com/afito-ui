import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: block;
  width: auto;

  @media only screen and (min-width: ${props => props.theme.AFITO_UI.xs}) {
    max-width: ${props => props.theme.AFITO_UI.gridXsWidth};
    margin: 0 ${props => props.theme.AFITO_UI.gutterXs};
  }
  @media only screen and (min-width: ${props => props.theme.AFITO_UI.sm}) {
    max-width: ${props => props.theme.AFITO_UI.gridSmWidth};
    margin: 0 ${props => props.theme.AFITO_UI.gutterSm};
  }
  @media only screen and (min-width: ${props => props.theme.AFITO_UI.md}) {
    max-width: ${props => props.theme.AFITO_UI.gridMdWidth};
    width: 100%;
    margin: auto;
  }
  @media only screen and (min-width: ${props => props.theme.AFITO_UI.lg}) {
    max-width: ${props => props.theme.AFITO_UI.gridLgWidth};
  }
  @media only screen and (min-width: ${props => props.theme.AFITO_UI.xl}) {
    max-width: ${props => props.theme.AFITO_UI.gridXlWidth};
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.align ? props.align : 'center')};
  justify-content: ${props => (props.justify ? props.justify : 'flex-start')};
  box-sizing: border-box;
  width: ${props => `${100 / (12 / props.size)}%`};
  padding: ${props => `0 ${props.theme.AFITO_UI.gutterXs}`};
`;

Column.propTypes = {
  size: PropTypes.string.isRequired,
  align: PropTypes.string,
  justify: PropTypes.string
};

const Row = styled.div`
  display: flex;
  flex-wrap: ${props => (props.wrap ? 'wrap' : 'nowrap')};
  align-items: ${props => (props.align ? props.align : 'center')};
  justify-content: ${props => (props.justify ? props.justify : 'flex-start')};
  width: 100%;

  &.no-gutters {
    margin-right: 0;
    margin-left: 0;

    & > ${Column} {
      padding-left: 0;
      padding-right: 0;
    }
  }
`;

Row.propTypes = {
  wrap: PropTypes.bool,
  align: PropTypes.string,
  justify: PropTypes.string
};

export { Container, Row, Column };
