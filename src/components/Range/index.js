import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputRange from 'react-input-range';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100px;
  width: 100%;
  position: relative;

  & .input-range__slider {
    appearance: none;
    background: ${props => props.theme.AFITO_UI.inputRangeSliderBackground};
    border: ${props => props.theme.AFITO_UI.inputRangeSliderBorder};
    border-radius: 100%;
    cursor: pointer;
    display: block;
    height: 25px;
    margin-left: -8px;
    margin-top: -17px;
    outline: none;
    position: absolute;
    top: 50%;
    transition: ${props => props.theme.AFITO_UI.inputRangeSliderTransition};
    width: 25px;
    box-shadow: 0px 4px 7.6px 0.4px rgba(20, 75, 157, 0.24);

    &:active {
      transform: ${props => props.theme.AFITO_UI.inputRangeSliderActiveTransform};
    }

    &:focus {
      box-shadow: 0 0 0
        ${props =>
          `${props.theme.AFITO_UI.inputRangeSliderFocusBoxShadowRadius} ${props.theme.AFITO_UI.inputRangeSliderFocusBoxShadowColor}`};
    }

    .input-range--disabled & {
      background: ${props => props.theme.AFITO_UI.inputRangeSliderDisabledBackground};
      border: ${props => props.theme.AFITO_UI.inputRangeSliderDisabledBorder};
      box-shadow: none;
      transform: none;
    }
  }

  & .input-range__slider-container {
    transition: ${props => props.theme.AFITO_UI.inputRangeSliderContainerTransition};

    &:hover .range-tooltip,
    &:active .range-tooltip {
      display: block !important;
    }
  }

  & .input-range__label {
    color: ${props => props.theme.AFITO_UI.inputRangeLabelColor};
    font-family: ${props => props.theme.AFITO_UI.inputRangeFontFamily};
    font-weight: bold;
    font-size: ${props => props.theme.AFITO_UI.inputRangeLabelFontSize};
    transform: translateZ(0);
    white-space: nowrap;
  }

  & .input-range__label--min,
  & .input-range__label--max {
    bottom: -55px;
    position: absolute;
    color: #334150;
    border-style: solid;
    border-width: 1px;
    border-color: rgb(217, 226, 229);
    border-radius: 4px;
    background-color: white;
    width: 80px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .input-range__label--min {
    left: 0;
  }

  & .input-range__label--max {
    right: 0;
  }

  & .input-range__label--value {
    position: absolute;
    top: ${props => props.theme.AFITO_UI.inputRangeLabelValuePositionTop};

    & .range-tooltip {
      display: none;
      position: absolute;
      top: -75px;
      left: -35px;
      background: white;
      color: #334150;
      box-shadow: 0px 4px 7.6px 0.4px rgba(20, 75, 157, 0.24);
      border-radius: 4px;
      padding: 10px 20px;
    }
  }

  & .input-range__label-container {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: relative;

    .input-range__label--max & {
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
  }

  & .input-range__track {
    background: ${props => props.theme.AFITO_UI.inputRangeTrackBackground};
    border-radius: 4px;
    cursor: pointer;
    display: block;
    height: 7px;
    position: relative;
    transition: ${props => props.theme.AFITO_UI.inputRangeTrackTransition};

    .input-range--disabled & {
      background: ${props => props.theme.AFITO_UI.inputRangeTrackDisabledBackground};
    }
  }

  & .input-range__track--background {
    left: 0;
    margin-top: -0.5 * ${props => props.theme.AFITO_UI.inputRangeTrackHeight};
    position: absolute;
    right: 0;
    top: 50%;
  }

  & .input-range__track--active {
    background: ${props => props.theme.AFITO_UI.inputRangeTrackActiveBackground};
  }

  & .input-range {
    height: 25px;
    position: relative;
    width: 100%;
  }
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

function Range({ items, onRangeChange, ...rest }) {
  let sorted = items.sort((a, b) => a - b);
  const hi = sorted[sorted.length - 1];
  const lo = sorted[0];
  const totalDistance = hi - lo;
  const [value, setValue] = useState({
    min: lo,
    max: hi
  });

  let freqs = {};
  for (let i = 0; i < sorted.length; i++)
    if (freqs[sorted[i]]) freqs[sorted[i]]++;
    else freqs[sorted[i]] = 1;

  return (
    <Wrapper {...rest}>
      <Distribution>
        {sorted
          .filter((el, i, a) => i === a.indexOf(el))
          .map((item, i) => {
            const offset = item - lo;
            const percentageOffset = (offset / totalDistance) * 100;
            const height = freqs[item];

            return (
              <QuantityBlock key={`QtyBlock_${i}__${percentageOffset}`} offset={percentageOffset} height={height} />
            );
          })}
      </Distribution>
      <InputRange
        step={5}
        maxValue={hi}
        minValue={lo}
        formatLabel={value => {
          return <div className="range-tooltip">{'$' + value}</div>;
        }}
        value={value}
        onChange={value => {
          setValue(value);
        }}
        onChangeComplete={onRangeChange}
      />
    </Wrapper>
  );
}

Range.propTypes = {
  items: function(props, propName, componentName) {
    const val = props[propName];
    if (!Array.isArray(val)) throw `${propName} must be an array`;
    if (val.length === 0) throw `${propName} must have at least one el`;
    val.forEach(function(elem) {
      if (typeof elem !== 'number') throw `${propName} must only contain numbers`;
    });
  }
};

export default Range;
