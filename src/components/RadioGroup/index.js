import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Radio = styled.label`
  font-family: ${props => props.theme.AFITO_UI.bodyFont};
  font-weight: 600;
  height: 40px;
  min-width: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: ${props => (props.selected ? '1px solid #57c59b' : '1px solid #d9e2e5')};
  background: ${props => (props.selected ? '#57c59b' : 'white')};
  color: ${props => (props.selected ? 'white' : '#334150')};
  cursor: pointer;
  box-shadow: ${props => (props.selected ? '0px 4px 7.6px 0.4px rgba(20, 75, 157, 0.24)' : 'none')};
  margin-right: 10px;
  margin-top: 10px;

  & input[type='radio'] {
    display: none;
  }
`;

function RadioGroup({ items = [], name, onSelectionChange, defualtOption, ...rest }) {
  const [selected, setSelected] = useState(defualtOption);

  return (
    <Wrapper onChange={onSelectionChange} {...rest}>
      {items.map((item, index) => {
        return (
          <Radio key={item.value + '_' + index} selected={selected === index} onClick={() => setSelected(index)}>
            <input type="radio" name={name} value={item.value} defaultChecked={selected === index} />
            {item.label}
          </Radio>
        );
      })}
    </Wrapper>
  );
}

RadioGroup.propTypes = {
  items: PropTypes.array,
  name: PropTypes.string.isRequired,
  onSelectionChange: PropTypes.func
};

export default RadioGroup;
