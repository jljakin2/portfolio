import { MobileMenuStateProvider } from "../lib/context/mobileMenuState";
import { ToastStateProvider } from "../lib/context/showToast";
import styled, { ThemeProvider } from "styled-components";
import theme from "../theme/theme";
import GlobalStyle from "../theme/GlobalStyle";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
