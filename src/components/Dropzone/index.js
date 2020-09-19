import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactDropzone from 'react-dropzone';

Dropzone.propTypes = {
  onDrop: PropTypes.func.isRequired,
  multiple: PropTypes.bool.isRequired,
  children: PropTypes.node,
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.object
};

function Dropzone({ onDrop, multiple, children, width, height, style }) {
  const DropzoneContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 50px;

    @media screen and (max-width: 500px) {
      margin: 50px 10px;
    }
  `;

  const Dropzone = styled(ReactDropzone)`
    width: ${props => (props.width ? `${props.width}px` : '100%')};
    height: ${props => (props.height ? `${props.height}px` : '300px')};
    max-width: 500px;
    /*min-height: 300px;*/
    cursor: pointer;
    position: relative;
    border-width: 2px;
    border-color: black;
    border-style: dashed;
    border-radius: 8px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: ${props => (props.multiple ? 'flex-start' : 'center')};
    overflow: hidden;

    &:hover {
      border-color: ${props => props.theme.AFITO_UI.secondaryColor};
    }

    & img {
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 400px;
      max-height: 250px;
      width: auto;
      height: auto;
      padding: 10px;
      box-sizing: border-box;

      & + & {
        padding-left: 20px;
      }
    }

    & span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 66%;
    }
  `;

  return (
    <DropzoneContainer style={style}>
      <Dropzone width={width} height={height} onDrop={onDrop} multiple={multiple} accept="image/*">
        {children}
      </Dropzone>
    </DropzoneContainer>
  );
}

export default Dropzone;
