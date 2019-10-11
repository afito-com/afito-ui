import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const visuallyHiddenStyles = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  width: '1px'
};

const Label = styled.label`
  font-size: 14px;
  font-weight: 700;
  font-family: ${props => props.theme.AFITO_UI.bodyFont};
`;

const Wrapper = styled.div`
  position: relative;
  margin: 5px 0;
  box-sizing: border-box;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  border-bottom-right-radius: ${props => (props.dropdownVisible ? '0px' : '4px')};
  border-bottom-left-radius: ${props => (props.dropdownVisible ? '0px' : '4px')};
  background-color: white; /*rgb(241, 244, 246);*/
  border: 1px solid #d2dce0;
  width: 100%;
  outline: 0;
  font-size: 14px;
  font-weight: 700;
  font-family: ${props => props.theme.AFITO_UI.bodyFont};

  & input {
    border: 0;
    font-size: 14px;
    font-weight: 700;
    border-radius: 4px;
    outline: 0;
    box-sizing: border-box;
    padding: 15px 20px;
    width: 100%;
    font-family: ${props => props.theme.AFITO_UI.bodyFont};
  }

  &::placeholder {
    color: #828282;
  }

  & + .error-message {
    padding-left: 5px;
    margin: 0;
    color: ${props => props.theme.AFITO_UI.dangerColor};
    font-size: 14px;
    font-weight: 700;
    font-family: ${props => props.theme.AFITO_UI.bodyFont};
    width: 100%;
    text-align: left;

    &::before {
      font-family: 'Font Awesome 5 Free';
      font-weight: 900;
      content: '\f06a'+ ' ';
    }
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 49px;
  margin: 0 -1px;
  left: 0;
  right: 0;
  z-index: 100;
  box-shadow: 0px 16px 7px -10px rgba(200, 203, 216, 0.26);
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border: 1px solid #d2dce0;

  display: ${props => (props.dropdownVisible ? 'flex' : 'none')};
  flex-direction: column;
  width: 100%;
  max-height: 300px;
  overflow-y: scroll;
`;

const Item = styled.div`
  padding: 16px 20px;
  background: white;
  cursor: pointer;
  text-align: left;

  & + & {
    border-top: 1px solid #d2dce0;
  }

  &:hover {
    background: #f1f4f6;
  }
`;

function Searchbox({ items, name, placeholder, label, hideLabel, onItemClick, ...rest }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <Wrapper {...rest} dropdownVisible={dropdownVisible}>
        <Label style={hideLabel ? visuallyHiddenStyles : { textTransform: 'capitalize' }} htmlFor={name}>
          {label}
        </Label>
        <input
          autoComplete="off"
          id={name}
          name={name}
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onFocus={() => setDropdownVisible(true)}
          onBlur={() => {
            setDropdownVisible(false);
          }}
          onChange={e => {
            if (!dropdownVisible) setDropdownVisible(true);
            setInputValue(e.target.value);
          }}
        />
        <Dropdown dropdownVisible={dropdownVisible}>
          {items.length > 0 &&
            items
              .filter(i => i.name.indexOf(inputValue) > -1)
              .map((i, idx) => (
                <Item
                  key={i.value + '_' + idx}
                  onMouseDown={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    setInputValue(i.name);
                    setDropdownVisible(false);
                    onItemClick(i);
                  }}
                >
                  {i.name}
                </Item>
              ))}
        </Dropdown>
      </Wrapper>
    </>
  );
}

Searchbox.propTypes = {
  items: PropTypes.array,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
  onItemClick: PropTypes.func
};

export default Searchbox;
