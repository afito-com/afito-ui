import React from 'react';
import styled from 'styled-components';
import { Row, Column } from '../Grid';
import { Heading } from '../Typography';

const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;
  text-align: center;
`;

const AccountTypeOption = styled.div`
  cursor: pointer;
  height: 175px;
  width: 175px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  box-shadow: 0px 16px 7px -10px rgba(200, 203, 216, 0.26);
  border-radius: 8px;
`;

function AccountType({ dispatch }) {
  return (
    <Wrapper>
      <Heading level={6}>I am a...</Heading>
      <Row>
        <Column size="6">
          <AccountTypeOption onClick={() => dispatch({ data: 'landlord', step: 'accountType' })}>
            <img width="64" src="/static/icons/landlord.png" alt="Landlord" />
            <Heading level={5}>Landlord</Heading>
          </AccountTypeOption>
        </Column>
        <Column size="6">
          <AccountTypeOption onClick={() => dispatch({ data: 'user', step: 'accountType' })}>
            <img width="64" src="/static/icons/diploma.png" alt="Student" />
            <Heading level={5}>Student</Heading>
          </AccountTypeOption>
        </Column>
      </Row>
    </Wrapper>
  );
}

export default AccountType;
