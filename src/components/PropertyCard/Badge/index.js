import React from 'react';
import PropTypes from 'prop-types';

Badge.propTypes = {
  children: PropTypes.node.isRequired
};

function Badge({ children }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2.417in"
      height="2.431in"
      style={{
        position: 'absolute',
        top: '-36px',
        left: '-43px'
      }}
    >
      <path
        fillRule="evenodd"
        fill="rgb(47, 115, 89)"
        d="M33.344,121.312 L43.187,121.312 L43.187,161.594 L33.344,161.594 L33.344,121.312 Z"
      ></path>
      <path
        fillRule="evenodd"
        fill="rgb(47, 115, 89)"
        d="M127.312,26.469 L167.625,26.469 L167.625,36.312 L127.312,36.312 L127.312,26.469 Z"
      ></path>
      <path
        fillRule="evenodd"
        fill="rgb(87, 197, 155)"
        d="M33.344,160.681 L33.344,120.378 L127.203,26.469 L167.685,26.469 L33.344,160.681 Z"
      ></path>
      <text
        kerning="auto"
        fontFamily="Nunito"
        fill="white"
        fontSize="18"
        fontWeight="bolder"
        style={{ transform: 'translate(50px, 90px) rotate(-45deg)' }}
      >
        <tspan>
          <tspan x="0" dy="1.6em">
            {children}
          </tspan>
        </tspan>
      </text>
    </svg>
  );
}

export default Badge;
