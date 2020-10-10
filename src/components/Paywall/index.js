import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';
import Button from '../Button';
import { Heading, Text } from '../Typography';
import { Row, Column } from '../Grid';
import Table from '../Table';
import { formatAddress } from '../../api/utils';
import 'regenerator-runtime/runtime.js';
import Plan from './Plan';

const StripeForm = styled.form`
  & label {
    color: #6b7c93;
    font-weight: 300;
    letter-spacing: 0.025em;
  }

  & input,
  & .StripeElement {
    display: block;
    margin: 10px 0 20px 0;
    max-width: 500px;
    padding: 14px 14px;
    font-size: 1em;
    box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px, rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
    border: 0;
    outline: 0;
    border-radius: 4px;
    background: white;
  }

  & input::placeholder {
    color: #aab7c4;
  }

  & input:focus,
  & .StripeElement--focus {
    box-shadow: rgba(50, 50, 93, 0.109804) 0px 4px 6px, rgba(0, 0, 0, 0.0784314) 0px 1px 3px;
    -webkit-transition: all 150ms ease;
    transition: all 150ms ease;
  }

  & .StripeElement.IdealBankElement,
  & .StripeElement.FpxBankElement,
  & .StripeElement.PaymentRequestButton {
    padding: 0;
  }
`;

Paywall.propTypes = {
  isReturningCustomer: PropTypes.bool,
  property: PropTypes.shape({
    property_id: PropTypes.number.isRequired,
    address: PropTypes.object.isRequired
  }),
  onCompleted: PropTypes.func,
  stripeKey: PropTypes.string.isRequired
};

export default function Paywall({ isReturningCustomer, property, onCompleted, stripeKey }) {
  const stripePromise = loadStripe(stripeKey);

  function handleReturningCustomerSubscription(event) {
    event.preventDefault();
    onCompleted();
  }

  const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    async function handleNewCustomerSubscription(event) {
      event.preventDefault();

      if (!stripe || !elements) {
        return;
      }

      let { source } = await stripe.createSource(elements.getElement(CardElement));
      onCompleted(source);
    }

    return (
      <>
        <Heading level={5} style={{ marginBottom: '12px' }}>
          Your plan
        </Heading>
        <Plan />
        <Row canWrap={true}>
          <Column xs={12}>
            <StripeForm
              onSubmit={handleNewCustomerSubscription}
              style={{
                width: '100%'
              }}
            >
              <Heading style={{ marginTop: '30px', marginBottom: '12px' }} level={5}>
                Order Summary
              </Heading>
              <Table
                style={{ marginBottom: '30px' }}
                rows={[{ id: 1, address: formatAddress(property.address), price: '$29.99' }]}
                headers={['Address', 'Price']}
              />
              <Row>
                <Heading level={5}>Credit or debit card</Heading>
              </Row>
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: '18px',
                      fontFamily: 'monospace',
                      letterSpacing: '0.025em'
                    }
                  }
                }}
              />
              <Button fullWidth level="secondary" type="submit" disabled={!stripe}>
                Complete My Subscription
              </Button>
              <Row style={{ marginTop: '24px' }}>
                <Column xs={12} align="center" justify="center" style={{ textAlign: 'center' }}>
                  <Heading level={5} style={{ color: '#57c59b', fontSize: '14px' }}>
                    <i className="fas fa-lock"></i>&nbsp;SECURE CREDIT CARD PAYMENT
                  </Heading>
                  <Text>This is a 256-bit SSL encrypted payment</Text>
                </Column>
              </Row>
            </StripeForm>
          </Column>
        </Row>
      </>
    );
  };

  if (isReturningCustomer) {
    return (
      <>
        <Heading level={5} style={{ marginBottom: '12px' }}>
          Your plan
        </Heading>
        <Plan />
        <Heading style={{ marginTop: '30px', marginBottom: '12px' }} level={5}>
          Order Summary
        </Heading>

        <Table
          style={{ marginBottom: '30px' }}
          rows={[{ id: 1, address: formatAddress(property.address), price: '$29.99' }]}
          headers={['Address', 'Price']}
        />

        <Button fullWidth level="secondary" onClick={handleReturningCustomerSubscription}>
          Complete My Subscription
        </Button>
        <Row style={{ marginTop: '24px' }}>
          <Column xs={12} align="center" justify="center" style={{ textAlign: 'center' }}>
            <Heading level={5} style={{ color: '#57c59b', fontSize: '14px' }}>
              <i className="fas fa-lock"></i>&nbsp;SECURE CREDIT CARD PAYMENT
            </Heading>
            <Text>This is a 256-bit SSL encrypted payment</Text>
          </Column>
        </Row>
      </>
    );
  } else {
    return (
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    );
  }
}
