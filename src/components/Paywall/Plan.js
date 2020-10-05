import React from 'react';
import styled from 'styled-components';
import { Heading, Text } from '../Typography';
import { Row, Column } from '../Grid';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  & input[type='radio'] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  & input[type='radio']:checked + label {
    background: blue;
    color: blue;
    border-color: blue;
  }
`;

const SelectionWrapper = styled.div`
  width: 100%;
  display: flex;

  @media (min-width: ${props => props.theme.AFITO_UI.xs}) {
    flex-wrap: wrap;
  }

  @media (min-width: 500px) {
    flex-wrap: nowrap;
  }
`;

const Selection = styled.label`
  padding: 20px;
  width: 100%;
  align-items: center;
  display: flex;
  box-shadow: ${props => (props.disabled ? 'inset 0px 0px 10px -7px #696b76' : 'none')};
  color: ${props => (props.disabled ? '#727283' : 'auto')};
  background: ${props => (props.disabled ? '#f2f4f9' : 'white')};
  border-radius: 8px;
  border: 1px solid #e6e8ec;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  @media (min-width: ${props => props.theme.AFITO_UI.xs}) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    & + & {
      border-top: 0;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 8px;
      border-bottom-left-radius: 8px;
    }
  }

  @media (min-width: 500px) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 8px;

    & + & {
      border-left: 0;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  }

  & h3 {
    color: ${props => (props.selected ? props.theme.AFITO_UI.successColor : 'auto')};
  }
`;

const Radio = styled.div`
  min-width: 24px;
  min-height: 24px;
  border-radius: 100%;
  background: ${props => (props.selected ? props.theme.AFITO_UI.successColor : '#727283')};
  margin-right: 12px;
  position: relative;

  &:before {
    content: '';
    height: 18px;
    width: 18px;
    left: 3px;
    top: 3px;
    background: ${props => (props.selected ? 'white' : 'rgb(230 231 231)')};
    position: absolute;
    border-radius: 100%;
  }

  &:after {
    content: '';
    height: 12px;
    width: 12px;
    left: 6px;
    top: 6px;
    background: ${props => (props.selected ? props.theme.AFITO_UI.successColor : '#727283')};
    position: absolute;
    border-radius: 100%;
  }
`;

const AddOnText = styled(Text)`
  /* @media (min-width: ${props => props.theme.AFITO_UI.xs}) {
    display: none;
  }

  @media (min-width: ${props => props.theme.AFITO_UI.sm}) {
    display: flex;
  } */
`;

const NotYetAvailable = styled.div`
  background: ${props => props.theme.AFITO_UI.dangerColor};
  padding: 0 6px;
  border-radius: 6px;
  margin-left: 12px;
  color: white;
  margin-top: -3px;
`;

function Plan() {
  return (
    <Wrapper>
      <SelectionWrapper>
        <Selection htmlFor="monthly" selected={true}>
          <input type="radio" id="monthly" name="gender" value="monthly" />
          <Radio selected={true}></Radio>
          <Column>
            <Row>
              <Heading level={5}>Monthly</Heading>
            </Row>
            <Row canWrap>
              <Heading style={{ marginBottom: 0 }} level={3}>
                $29.99
              </Heading>
              <Text style={{ color: 'rgb(153 157 166)' }}>&nbsp;per month</Text>
            </Row>
          </Column>
        </Selection>
        <Selection htmlFor="yearly" disabled>
          <input type="radio" id="yearly" name="gender" value="yearly" />
          <Radio></Radio>
          <Column>
            <Row style={{ position: 'relative' }} canWrap>
              <Heading level={5}>Annually</Heading>
              {/* <AddOnText style={{ fontSize: '12px', color: 'rgb(153 157 166)', lineHeight: 'normal' }}>
                &nbsp;Get 2 months free!
              </AddOnText> */}
              <NotYetAvailable>
                <Text style={{ fontSize: '10px', fontWeight: 'bold' }}>Coming soon!</Text>
              </NotYetAvailable>
            </Row>
            <Row canWrap>
              <Heading style={{ marginBottom: 0 }} level={3}>
                $299.99
              </Heading>
              <Text style={{ color: 'rgb(153 157 166)' }}>&nbsp;per year</Text>
            </Row>
          </Column>
        </Selection>
      </SelectionWrapper>
    </Wrapper>
  );
}

export default Plan;
