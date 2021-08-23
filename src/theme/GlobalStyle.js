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

    // 400px
    @media only screen and (max-width: 25em) {
        font-size: 95%;
    }
}

body {
    font-family: 'Open Sans', sans-serif;
    color: ${({ theme }) => theme.defaultText};
}

.link {
    border-radius: 2px;
    color: ${({ theme }) => theme.defaultText};
    text-decoration: none;
    border-bottom: 2px solid #1B2E40;
    padding: 1px 2px;
    cursor: pointer;

    &:hover {
        background: #1B2E40;
        color: #fff;
    }
}
`;

export default GlobalStyle;
