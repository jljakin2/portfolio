import React, { useState } from "react";
import styled, { withTheme } from "styled-components";

import theme from "../theme/theme";

const StyledIcon = styled.svg`
  cursor: pointer;
`;

const DevIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a href="https://dev.to/jljakin2" target="_blank" rel="noreferrer">
      <StyledIcon
        width="48px"
        height="28px"
        viewBox="0 0 48 28"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <g
          id="Main"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd">
          <g
            id="Desktop"
            transform="translate(-232.000000, -5674.000000)"
            fill={isHovered ? theme.btnHover : theme.mainBtn}
            fill-rule="nonzero">
            <g id="Group-3" transform="translate(232.000000, 5674.000000)">
              <g id="Path-2" transform="translate(12.000000, 9.678000)">
                <path
                  d="M1.24,9.656 C2.06,9.656 2.5,9.518 2.9,9.14 C3.38,8.664 3.42,8.426 3.42,4.778 C3.42,0.99 3.38,0.892 2.84,0.456 C2.48,0.138 1.92,-4.4408921e-14 1.16,-4.4408921e-14 L8.8817842e-15,-4.4408921e-14 L0.04,4.838 L0.12,9.696 L1.24,9.656 Z"
                  id="Path"></path>
              </g>
              <path
                d="M0,28 L48,28 L48,0 L0,0 L0,28 Z M30.5,7.138 C31.3,7.138 32,7.178 32,7.238 C32,7.356 34.32,16.24 34.52,16.816 C34.6,17.114 35.16,15.428 35.98,12.256 L37.3,7.258 L38.78,7.178 C39.58,7.138 40.24,7.178 40.24,7.258 C40.24,7.536 36.9,19.91 36.64,20.504 L36.66,20.504 C36.32,21.356 35.38,22.07 34.66,22.07 C34.3,22.07 33.76,21.772 33.32,21.296 C32.68,20.662 32.42,20.046 31.68,17.172 L29.88,10.45 L28.98,7.138 L30.5,7.138 L30.5,7.138 Z M19.76,14.654 C19.76,8.666 19.78,8.348 20.26,7.754 C20.72,7.14 20.76,7.14 24.02,7.14 L27.3,7.14 L27.3,9.698 L22.36,9.698 L22.36,13.208 L25.4,13.208 L25.4,15.746 L23.96,15.826 L22.46,15.886 L22.46,19.396 L24.9,19.456 L27.3,19.536 L27.3,22.074 L24.1,22.074 C21.04,22.074 20.9,22.054 20.36,21.48 L19.76,20.924 L19.76,14.654 L19.76,14.654 Z M9.42,7.118 L12.22,7.118 C15.56,7.118 16.54,7.474 17.42,8.902 C17.96,9.756 18,10.094 18.06,14 C18.16,18.422 18.02,19.414 17.12,20.544 C16.24,21.694 15,22.07 12.06,22.07 L9.42,22.07 L9.42,7.118 Z"
                id="Shape"></path>
            </g>
          </g>
        </g>
      </StyledIcon>
    </a>
  );
};

export default withTheme(DevIcon);
