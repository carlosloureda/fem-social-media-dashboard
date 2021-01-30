import { colors, fonts } from "./variables";

const primaryColors = {
  btnPrimary: "green",
  btnSecondary: "blue",
  btnTertiary: "red",
  ...colors.primary,
};

export const lightTheme = {
  colors: {
    bgPrimary: colors.light.white,
    fontPrimary: colors.light.darkGrayishBlue,
    primary: colors.light.veryPaleBlue,
    ...primaryColors,
  },
  fonts,
};

export const darkTheme = {
  colors: {
    bgPrimary: colors.dark.veryDarkBlue2,
    fontPrimary: colors.dark.font,
    primary: colors.dark.veryDarkBlue2,
    ...primaryColors,
  },
  fonts,
};
