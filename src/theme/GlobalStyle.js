import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: inherit;

}

html {
    font-size: 100%; // 16px
    box-sizing: border-box;
}

body {
    font-family: 'Open Sans', sans-serif;
    color: ${({ theme }) => theme.defaultText};
}
`;

export default GlobalStyle;
