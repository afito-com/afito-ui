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
  box-shadow: 3px 4px 20px 0px rgba(200, 203, 216, 0.26);
  border-radius: 8px;
`;

function AccountType({ dispatch }) {
  return (
    <Wrapper>
      <Heading level={6}>I am a...</Heading>
      <Row>
        <Column xs={6}>
          <AccountTypeOption onClick={() => dispatch({ data: 'landlord', step: 'accountType' })}>
            <img
              width="100"
              src="https://afito-production-bucket.s3.amazonaws.com/static/static/icons/landlord.png"
              alt="Landlord"
            />
            <Heading level={5}>Landlord</Heading>
          </AccountTypeOption>
        </Column>
        <Column xs={6}>
          <AccountTypeOption onClick={() => dispatch({ data: 'user', step: 'accountType' })}>
            <img
              width="100"
              src="https://afito-production-bucket.s3.amazonaws.com/static/static/icons/diploma.png"
              alt="Student"
            />
            <Heading level={5}>Student</Heading>
          </AccountTypeOption>
        </Column>
      </Row>
    </Wrapper>
  );
}

export default AccountType;
