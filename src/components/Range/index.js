import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputRange from 'react-input-range';
import './Range.scss';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 50px;
  height: 100px;
  position: relative;
`;

const Distribution = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 70px;
  width: 100%;
  margin: auto;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

const QuantityBlock = styled.div`
  height: ${props => `${props.height * 15}px`};
  width: 10px;
  background: #e1e7eb;
  position: absolute;
  left: ${props => `${props.offset}%`};
`;

function Range({ items }) {
  const hi = Math.max(...items);
  const lo = Math.min(...items);
  const totalDistance = hi - lo;
  const [value, setValue] = useState({
    min: lo,
    max: hi
  });

  let freqs = {};
  for (let i = 0; i < items.length; i++)
    if (freqs[items[i]]) freqs[items[i]]++;
    else freqs[items[i]] = 1;

  return (
    <Wrapper>
      <Distribution>
        {items
          .filter((el, i, a) => i === a.indexOf(el))
          .map(item => {
            const offset = item - lo;
            const percentageOffset = (offset / totalDistance) * 100;
            const height = freqs[item];

            return <QuantityBlock offset={percentageOffset} height={height} />;
          })}
      </Distribution>
      <InputRange
        step={10}
        maxValue={hi}
        minValue={lo}
        formatLabel={value => {
          return value;
        }}
        value={value}
        onChange={value => {
          setValue(value);
        }}
        onChangeComplete={value => console.log(value)}
      />
    </Wrapper>
  );
}

Range.propTypes = {};

export default Range;
