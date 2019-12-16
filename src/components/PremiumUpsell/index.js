import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Range from '../Range';
import { Text, Heading } from '../Typography';
import Button from '../Button';
import { Row, Column } from '../Grid';
import { PropertyAPI } from '../../api';

const Wrapper = styled.div`
  padding: 25px;
`;

PremiumUpsell.propTypes = {
  title: PropTypes.string.isRequired,
  area_id: PropTypes.number.isRequired
};

function PremiumUpsell({ title, area_id }) {
  const [prices, setPrices] = useState([]);
  const [school, setSchool] = useState({});
  const [premiumCost, setPremiumCost] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    PropertyAPI.getAll({ params: { area_id } })
      .then(res => {
        setPrices(
          res.data.properties
            .filter(property => property.premium_price != null)
            .map(property => property.premium_price / 100)
        );
        setSchool(res.data.area);
      })
      .catch(console.error);
  }, [area_id]);

  return (
    <Wrapper>
      <Heading level={4}>{title}</Heading>
      <Text>
        If you&apos;re serious about getting your place rented you should know that buying a <b>$10/month</b> premium
        listing at <b>{school.name}</b> will get you <b>10x</b> more views from students.
      </Text>
      <Heading style={{ textAlign: 'center', margin: '48px 0' }} level={1}>
        $10/month for 10x the exposure.
      </Heading>
      {/* <Range
        withSingleValue
        step={1}
        name="price"
        items={prices}
        defaultValue={10}
        onRangeChange={val => {
          setPremiumCost(val);
        }}
        style={{ marginBottom: '48px' }}
      /> */}
      <Row justify="flex-end">
        <Button level="outline">No Thanks</Button>
        <Button
          level="secondary"
          onClick={() => {
            //show checkout form
          }}
        >
          Let&apos;s do it
        </Button>
      </Row>
    </Wrapper>
  );
}

export default PremiumUpsell;
