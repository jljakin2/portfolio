import React, { useState } from "react";
import styled, { withTheme } from "styled-components";

import theme from "../theme/theme";

const StyledIcon = styled.svg`
  cursor: pointer;
`;

const LiveIcon = ({ light }) => {
  const [isHovered, setIsHovered] = useState(false);

  const fillStyle = isLight => {
    if (isLight) {
      return isHovered ? theme.inputBorder : theme.white;
    } else {
      return isHovered ? theme.btnHover : theme.mainBtn;
    }
  };

  return (
    <StyledIcon
      width="42px"
      height="30px"
      viewBox="0 0 49 37"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <g
        id="Main"
        stroke="none"
        stroke-width="1"
        fill="none"
        fillRule="evenodd">
        <g
          id="Desktop"
          transform="translate(-638.000000, -947.000000)"
          fill={fillStyle(light)}
          fillRule="nonzero">
          <g
            id="Live-Broadcasting"
            transform="translate(638.736723, 947.721923)">
            <path
              d="M43.3636364,36 L4.09090909,36 C1.83272727,36 0,34.1672727 0,31.9090909 L0,4.09090909 C0,1.83272727 1.83272727,0 4.09090909,0 L43.3636364,0 C45.6218182,0 47.4545455,1.83272727 47.4545455,4.09090909 L47.4545455,31.9090909 C47.4545455,34.1672727 45.6218182,36 43.3636364,36 Z M4.09090909,1.63636364 C2.74090909,1.63636364 1.63636364,2.74090909 1.63636364,4.09090909 L1.63636364,31.9090909 C1.63636364,33.2590909 2.74090909,34.3636364 4.09090909,34.3636364 L43.3636364,34.3636364 C44.7136364,34.3636364 45.8181818,33.2590909 45.8181818,31.9090909 L45.8181818,4.09090909 C45.8181818,2.74090909 44.7136364,1.63636364 43.3636364,1.63636364 L4.09090909,1.63636364 Z"
              id="Shape"></path>
            <path
              d="M14.7272727,24.5454545 L8.18181818,24.5454545 C7.73181818,24.5454545 7.36363636,24.1772727 7.36363636,23.7272727 L7.36363636,12.2727273 C7.36363636,11.8227273 7.73181818,11.4545455 8.18181818,11.4545455 C8.63181818,11.4545455 9,11.8227273 9,12.2727273 L9,22.9090909 L14.7272727,22.9090909 C15.1772727,22.9090909 15.5454545,23.2772727 15.5454545,23.7272727 C15.5454545,24.1772727 15.1772727,24.5454545 14.7272727,24.5454545 Z M39.2727273,24.5454545 L32.7272727,24.5454545 C32.2772727,24.5454545 31.9090909,24.1772727 31.9090909,23.7272727 L31.9090909,12.2727273 C31.9090909,11.8227273 32.2772727,11.4545455 32.7272727,11.4545455 L39.2727273,11.4545455 C39.7227273,11.4545455 40.0909091,11.8227273 40.0909091,12.2727273 C40.0909091,12.7227273 39.7227273,13.0909091 39.2727273,13.0909091 L33.5454545,13.0909091 L33.5454545,22.9090909 L39.2727273,22.9090909 C39.7227273,22.9090909 40.0909091,23.2772727 40.0909091,23.7272727 C40.0909091,24.1772727 39.7227273,24.5454545 39.2727273,24.5454545 Z M18,24.5454545 C17.55,24.5454545 17.1818182,24.1772727 17.1818182,23.7272727 L17.1818182,12.2727273 C17.1818182,11.8227273 17.55,11.4545455 18,11.4545455 C18.45,11.4545455 18.8181818,11.8227273 18.8181818,12.2727273 L18.8181818,23.7272727 C18.8181818,24.1772727 18.45,24.5454545 18,24.5454545 Z M25.3636364,24.5454545 C25.02,24.5454545 24.7090909,24.3245455 24.5945455,24.0054545 L20.5036364,12.5509091 C20.3481818,12.1254545 20.5690909,11.6590909 21.0027273,11.5036364 C21.4281818,11.3481818 21.8945455,11.5772727 22.05,12.0027273 L25.3636364,21.2972727 L28.6854545,12.0027273 C28.8327273,11.5772727 29.3072727,11.3563636 29.7327273,11.5036364 C30.1581818,11.6590909 30.3790909,12.1254545 30.2318182,12.5509091 L26.1409091,24.0054545 C26.0181818,24.3245455 25.7072727,24.5454545 25.3636364,24.5454545 Z"
              id="Shape"></path>
            <path
              d="M39.2727273,18.8181818 L32.7272727,18.8181818 C32.2772727,18.8181818 31.9090909,18.45 31.9090909,18 C31.9090909,17.55 32.2772727,17.1818182 32.7272727,17.1818182 L39.2727273,17.1818182 C39.7227273,17.1818182 40.0909091,17.55 40.0909091,18 C40.0909091,18.45 39.7227273,18.8181818 39.2727273,18.8181818 Z M40.9090909,8.18181818 C40.0090909,8.18181818 39.2727273,7.44545455 39.2727273,6.54545455 C39.2727273,5.64545455 40.0090909,4.90909091 40.9090909,4.90909091 C41.8090909,4.90909091 42.5454545,5.64545455 42.5454545,6.54545455 C42.5454545,7.44545455 41.8090909,8.18181818 40.9090909,8.18181818 Z"
              id="Shape"></path>
          </g>
        </g>
      </g>
    </StyledIcon>
  );
};

LiveIcon.defaultProps = {
  light: false,
};

export default withTheme(LiveIcon);
