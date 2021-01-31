import { css, Global, useTheme } from "@emotion/react";

const GlobalStyles = () => {
  const theme: any = useTheme();

  return (
    <Global
      styles={css`
        @import url(${theme.fonts.url});
        *,
        *::after,
        *::before {
          margin: 0;
          padding: 0;
          box-sizing: inherit;
          font-family: ${theme.fonts.family}, sans-serif;
          font-size: ${theme.fonts.defaultFontSize};
          line-height: ${theme.fonts.defaultLineHeight};
        }
        body {
          box-sizing: border-box;
          font-weight: 400;
          width: 100%;
          height: 100vh;
          background-color: ${theme.colors.bgPrimary || "white"};
          /* color: ${theme.colors.primaryFont || "black"}; */
        }

        html {
          font-size: 62.5%;
        }
      `}
    />
  );
};

export default GlobalStyles;
