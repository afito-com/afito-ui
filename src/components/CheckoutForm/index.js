import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { injectStripe, CardElement } from 'react-stripe-elements';
import Alert from '../Alert';
import LoadingBlock from '../LoadingBlock';
import Button from '../Button';
import { Row, Column } from '../Grid';
import { Heading, Text } from '../Typography';
import { makeInitialPayment, makePayment, getProratedCost } from '../../api/billing';
import { toCurrency } from '../../api/utils';

const Checkout = styled.div`
  padding: 25px;
`;

const TotalMonthlyCost = styled(Row)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  border-top: 1px solid #ccc;
`;

const FinalPrice = styled(Heading)`
  margin: 0;
  font-size: 48px;
  text-align: center;
`;

const PriceContainer = styled(Row)`
  display: flex;
  align-items: center;
  min-height: 150px;
`;

const CardElementWrapper = styled.div`
  padding: 20px 0;
`;

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      downgrade: false,
      proratedCost: undefined,
      newMonthlyCost: 0,
      additionalCost: 0
    };

    this.submit = this.submit.bind(this);
    this.onFieldChange = this.onFieldChange.bind(this);
    this.onError = this.onError.bind(this);
  }

  componentDidMount() {
    const { property, propertyToBuy, newSpot } = this.props;
    //console.log({ property, propertyToBuy, newSpot })

    getProratedCost(property.property_id, propertyToBuy.property_id)
      .then(res => {
        if (newSpot) {
          // new spot logic
          if (property.next_premium_price == null) {
            //console.log("non premium buys new spot")
            return this.setState({
              proratedCost: Math.ceil(res.data.proratedCost / 100),
              newMonthlyCost: 10
            });
          } else {
            //console.log("premium buys new spot")
            this.setState({
              downgrade: true,
              proratedCost: 0, //Math.ceil(res.data.proratedCost / 100),
              newMonthlyCost: 10
            });
          }
        } else {
          if (res.data.proratedCost) {
            //console.log("(non) or premium upgrades to higher premium (standard)")
            this.setState({
              proratedCost: Math.ceil(res.data.proratedCost / 100),
              newMonthlyCost: propertyToBuy.premium_price / 100 + 1 + this.state.additionalCost
            });
          } else {
            //console.log("premium downgrades to lower premium")
            this.setState({
              downgrade: true,
              proratedCost: Math.floor((propertyToBuy.premium_price - property.premium_price) / 100 + 10) - 1, // used to show the difference
              newMonthlyCost: propertyToBuy.premium_price > 1000 ? propertyToBuy.premium_price / 100 - 1 : 10
            });
          }
        }
      })
      .catch(this.onError);
  }

  onFieldChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  onError(err) {
    let errorMessage;
    if (err.response) {
      errorMessage = err.response.data.message;
    }

    this.context.makeFlash('danger', errorMessage);
  }

  async submit(ev) {
    const { newMonthlyCost, additionalCost = 0 } = this.state;
    const { verified, property } = this.props;
    const { property_id } = property;

    let amount = (parseInt(newMonthlyCost, 10) + (additionalCost ? parseInt(additionalCost, 10) : 0)) * 100;

    if (verified) {
      makePayment(property_id, amount)
        .then(this.props.onCompleted)
        .catch(this.onError);
    } else {
      let { token } = await this.props.stripe.createToken({ name: 'Name' });
      makeInitialPayment(property_id, token, amount)
        .then(this.props.onCompleted)
        .catch(this.onError);
    }
  }

  render() {
    const { complete, downgrade, proratedCost, newMonthlyCost, additionalCost } = this.state;
    const monthlyCost = parseInt(newMonthlyCost, 10) + (additionalCost ? parseInt(additionalCost, 10) : 0);

    return (
      <Checkout>
        {complete ? (
          <Alert
            type="success"
            message={
              <>
                <Heading level={3}>Purchase Complete</Heading>
                <Text>
                  The listing is now updated. If you don&apos;t see the change right away then refresh your browser. You
                  can head over to your Billing tab to see your updated cost.
                </Text>
              </>
            }
          />
        ) : (
          <>
            {!downgrade ? (
              <Alert type="info">
                <i icon="fas fa-info-circle"></i>
                The price in bold is the immediate pro-rated cost you will pay for this spot for the rest of the current
                month. Your monthly recurring cost to hold this spot is shown at the bottom. The extra field is optional
                and should be used if you want to place a bid above the minimum cost to buy the spot.
              </Alert>
            ) : (
              <Alert type="info">
                <i icon="fas fa-info-circle"></i>
                The price in bold is the change in your monthly cost for the following month. Your new monthly recurring
                cost is shown at the bottom.
              </Alert>
            )}

            {this.props.verified ? (
              <div>
                <Row>
                  <Column xs={12}>
                    <PriceContainer>
                      <Column xs={!downgrade ? 8 : 12}>
                        {proratedCost != null ? (
                          <FinalPrice level={1}>{toCurrency(proratedCost)}</FinalPrice>
                        ) : (
                          <LoadingBlock quiet />
                        )}
                      </Column>
                      {!downgrade && (
                        <>
                          <Column xs={3}>
                            <label htmlFor="additionalCost">Extra</label>
                            <input
                              id="additionalCost"
                              className=""
                              name="additionalCost"
                              type="number"
                              min="0"
                              step="1"
                              onChange={this.onFieldChange}
                            />
                          </Column>
                          <Column xs={1} />
                        </>
                      )}
                    </PriceContainer>
                  </Column>
                </Row>
                <TotalMonthlyCost>
                  <p>New Monthly Cost:</p>
                  <p>{toCurrency(monthlyCost)}/mo</p>
                </TotalMonthlyCost>
                <Button level="secondary" onClick={this.submit}>
                  Confirm
                </Button>
              </div>
            ) : (
              <div>
                <Row>
                  <Column xs={12}>
                    <PriceContainer>
                      <Column xs={!downgrade ? 8 : 12}>
                        {proratedCost != null ? (
                          <FinalPrice level={1}>{toCurrency(proratedCost)}</FinalPrice>
                        ) : (
                          <LoadingBlock quiet />
                        )}
                      </Column>
                      {!downgrade && (
                        <Fragment>
                          <Column xs={2}>
                            <label htmlFor="additionalCost">Extra</label>
                            <input
                              id="additionalCost"
                              className=""
                              name="additionalCost"
                              type="number"
                              min="0"
                              step="1"
                              onChange={this.onFieldChange}
                            />
                          </Column>
                          <Column xs={2} />
                        </Fragment>
                      )}
                    </PriceContainer>
                  </Column>
                </Row>
                {!downgrade && (
                  <CardElementWrapper>
                    <CardElement style={{ base: { fontSize: '16px' } }} />
                  </CardElementWrapper>
                )}
                <TotalMonthlyCost>
                  <p>New Monthly Cost:</p>
                  <p>{toCurrency(monthlyCost)}/mo</p>
                </TotalMonthlyCost>
                <Button level="secondary" onClick={this.submit}>
                  Confirm
                </Button>
              </div>
            )}
          </>
        )}
      </Checkout>
    );
  }
}

CheckoutForm.propTypes = {
  property: PropTypes.object.isRequired,
  propertyToBuy: PropTypes.object,
  newSpot: PropTypes.bool,
  verified: PropTypes.bool,
  onCompleted: PropTypes.func.isRequired,
  stripe: PropTypes.any
};

export default injectStripe(CheckoutForm);
