import { colors, fonts } from "./variables";

interface iTheme {
  colors: any;
  fonts: any;
}

const primaryColors = {
  btnPrimary: "green",
  btnSecondary: "blue",
  btnTertiary: "red",
  ...colors.primary,
};

export const lightTheme: iTheme = {
  colors: {
    bgPrimary: colors.light.white,
    bgSecondary: colors.light.cardGrey,
    fontPrimary: colors.light.darkGrayishBlue,
    primary: colors.light.veryPaleBlue,
    ...primaryColors,
  },
  fonts,
};

export const darkTheme: iTheme = {
  colors: {
    bgPrimary: colors.dark.veryDarkBlue2,
    bgSecondary: colors.light.cardGrey,
    fontPrimary: colors.dark.font,
    primary: colors.dark.desaturatedBlue,
    ...primaryColors,
  },
  fonts,
};
