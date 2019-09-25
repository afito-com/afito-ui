import React from 'react';
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

const Row = styled.div`
  display: flex;
  flex-wrap: ${props => (props.wrap ? 'wrap' : 'nowrap')};
  align-items: ${props => (props.align ? props.align : 'center')};
  justify-content: ${props => (props.justify ? props.justify : 'flex-start')};
  width: 100%;
  box-sizing: border-box;

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

function getColumnWidth(size) {
  return Number.isInteger(parseInt(size)) ? `${100 / (12 / size)}%` : 'auto';
}

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.align ? props.align : 'center')};
  justify-content: ${props => (props.justify ? props.justify : 'flex-start')};
  box-sizing: border-box;
  width: 100%;

  & + & {
    padding: ${props => `0 0 0 ${props.theme.AFITO_UI.gutterXs}`};
  }

  @media (min-width: ${props => props.theme.AFITO_UI.xs}) {
    display: ${props => (props.xs ? 'flex' : 'none')};
    max-width: ${props => (props.xs ? getColumnWidth(props.xs) : 'none')};
    flex: ${props => (props.xs ? `0 0 ${props.xs && getColumnWidth(props.xs)}` : 'none')};
  }
  @media (min-width: ${props => props.theme.AFITO_UI.sm}) {
    display: ${props => (props.xs ? 'flex' : 'none')};
    max-width: ${props => (props.sm ? getColumnWidth(props.sm) : '')};
    flex: ${props => (props.sm ? `0 0 ${props.sm && getColumnWidth(props.sm)}` : '')};
  }
  @media (min-width: ${props => props.theme.AFITO_UI.md}) {
    display: ${props => (props.xs ? 'flex' : 'none')};
    max-width: ${props => (props.md ? getColumnWidth(props.md) : '')};
    flex: ${props => (props.md ? `0 0 ${props.md && getColumnWidth(props.md)}` : '')};
  }
  @media (min-width: ${props => props.theme.AFITO_UI.lg}) {
    display: ${props => (props.xs ? 'flex' : 'none')};
    max-width: ${props => (props.lg ? getColumnWidth(props.lg) : '')};
    flex: ${props => (props.lg ? `0 0 ${props.lg && getColumnWidth(props.lg)}` : '')};
  }
  @media (min-width: ${props => props.theme.AFITO_UI.xl}) {
    display: ${props => (props.xs ? 'flex' : 'none')};
    max-width: ${props => (props.xl ? getColumnWidth(props.xl) : '')};
    flex: ${props => (props.xl ? `0 0 ${props.xl && getColumnWidth(props.xl)}` : '')};
  }
`;

Column.propTypes = {
  xs: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  sm: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  md: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  lg: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  xl: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  align: PropTypes.string,
  justify: PropTypes.string
};

export { Container, Row, Column };
