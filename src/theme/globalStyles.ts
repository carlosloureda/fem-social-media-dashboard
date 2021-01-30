import { css } from "@emotion/react";
import { defaultFontSize } from "./variables";

const GlobalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-family: "Poppins", sans-serif;
    line-height: 26px;
  }
  body {
    box-sizing: border-box;
    font-size: ${defaultFontSize};
    font-weight: 400;
  }
  html {
    font-size: 62.5%;
  }
`;

export default GlobalStyles;
