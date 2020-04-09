// Core
import { createGlobalStyle } from "styled-components";
// Fonts
import { Thameen_Book, Thameen_DemiBold, Thameen_Light } from "assets/fonts";

const GlobalStyle = createGlobalStyle`
  // colors
:root {
    --c-white: #FFFFFF;
    --c-blue: #1D6AE5;
    --с-gray-light: #F3F4F8;
    --с-gray-dark: #30363D;
    --c-purple: #945DFF;
  }
  @font-face {
     font-family: "Thameen";
     src:
     url(${Thameen_Book}) format("opentype");
     font-weight: 400;
  }
  @font-face {
     font-family: "Thameen";
     src:
     url(${Thameen_DemiBold}) format("opentype");
     font-weight: 600;
  }
  @font-face {
     font-family: "Thameen";
     src:
     url(${Thameen_Light}) format("opentype");
     font-weight: 300;

  }
  [dir="rtl"] body {
  font-family: Thameen, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
       font-weight: 400;
  }
 input, text-num {
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
 }
`;

export default GlobalStyle;
