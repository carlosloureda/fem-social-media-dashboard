export const colors = {
  primary: {
    limeGreen: "#1db489",
    brightRed: "#dc414c",
    facebook: "#198ff5",
    twitter: "#1ca0f2",
    instagram:
      "linear-gradient(225deg, #df4896 0%, #ee877e 50.91%, #fdc366 100%);",
    youtube: "#c4032a",
    font: "#1D1F29",
  },
  dark: {
    veryDarkBlue1: "#1e202a",
    veryDarkBlue2: "#1f212e",
    darkDesaturatedBlue: "#252a41",
    desaturatedBlue: "#8b97c6",
    white: "#ffffff",
    toggle: "linear gradient(#378fe6, #3eda82)",
    font: "#1D1F29",
    cardBackground: "#252B42",
    primaryFont: "#8C98C6",
    fontSecondary: "#ffffff",
    // primaryFont: "#fff",
    lightBlueGrey: "#333A55",
  },
  light: {
    white: "#ffffff",
    veryPaleBlue: "#f5f7ff",
    lightGrayishBlue: "#f0f2fa",
    darkGrayishBlue: "#63687e",
    darkGrey: "#E1E4F0",
    veryDarkBlue: "#1e202a",
    toggle: "#aeb3cb",
    cardBackground: "#F1F3FA",
    // primaryFont: "#63687d",
    primaryFont: "#63687d",
    fontSecondary: "#1D1F29",
    separatorColor: "#848bab",
  },
};

/* 
  If we used rems on mediaqueries they are always realted to the default browser
  font-size, we cannot ever overrite (it won't work). Check this awesome post on stackoverflow:
  https://stackoverflow.com/questions/47409585/using-rem-units-in-media-queries-and-as-width#answer-51993054
*/
export const breakpoints = {
  desktop: "1444px",
  mobileSmall: "375px",
};

export const fonts = {
  defaultFontSize: "1.2rem",
  defaultLineHeight: "1.5rem",
  hugeFontSize: "1.4rem", //overview and headings
  family: "Inter",
  url:
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap",
  weightNormal: 400,
  weightBold: 700,
};

const variables = {
  colors,
  breakpoints,
  fonts,
};

export default variables;
