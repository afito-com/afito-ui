import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text } from '../../Typography';
import { Row } from '../../Grid';
import { PropertyAPI } from '../../../api';

ProgressBar.propTypes = {
  jumpToScreen: PropTypes.func.isRequired,
  screens: PropTypes.array.isRequired,
  currScreen: PropTypes.number.isRequired,
  maxStep: PropTypes.number.isRequired
};

function ProgressBar({ jumpToScreen, screens, maxStep, currScreen }) {
  const ProgressIndicator = styled.div`
    background: ${props => (props.isHighlighted ? props.theme.AFITO_UI.secondaryColor : '#f1f4f6')};
    height: 4px;
    /*padding: 0 28px;*/
    margin: 0 8px 0 8px;
    border-radius: 2px;
    display: flex;
    flex-grow: 1;
  `;

  const ProgressNumber = styled.div`
    min-width: 30px;
    min-height: 30px;
    border-radius: 50%;
    background: ${props => (props.isHighlighted ? props.theme.AFITO_UI.secondaryColor : '#f1f4f6')};
    color: ${props =>
      props.isHighlighted ? 'white' : props.isComplete ? props.theme.AFITO_UI.primaryColor : '#8898aa'};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  `;

  const StepWrapper = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    flex-grow: 1;
  `;

  const StepText = styled(Text)`
    color: ${props => (props.isComplete ? 'black' : '#8898aa')};
    font-weight: bold;
    white-space: nowrap;
    margin-left: 8px;

    @media (min-width: ${props => props.theme.AFITO_UI.xs}) {
      display: none;
    }

    @media (min-width: ${props => props.theme.AFITO_UI.sm}) {
      display: flex;
    }
  `;

  const Steps = styled(Row)`
    background: white;
    /*box-shadow: 0px 16px 7px -10px rgba(200, 203, 216, 0.26);*/
    padding: 12px 16px;
    position: fixed;
    top: 0;
    z-index: 10;
  `;

  return (
    <Steps justify="flex-start">
      {screens.map((screen, i) => (
        <StepWrapper
          key={i}
          style={{ flexGrow: i === 0 ? '0' : '1', cursor: i > maxStep ? 'default' : 'pointer' }}
          onClick={() => {
            if (i <= maxStep) jumpToScreen(i);
          }}
        >
          {i > 0 && <ProgressIndicator isHighlighted={currScreen >= i} />}
          <ProgressNumber isComplete={maxStep >= i} isHighlighted={currScreen === i}>
            <Text>{i + 1}</Text>
          </ProgressNumber>
          <StepText isComplete={currScreen > i}>{screens[i]}</StepText>
        </StepWrapper>
      ))}
    </Steps>
  );
}

export default ProgressBar;
