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
    bgSecondary: colors.light.cardBackground,
    bgTertiary: colors.light.darkGrey,
    fontPrimary: colors.light.primaryFont,
    fontSecondary: colors.light.fontSecondary,
    primary: colors.light.veryPaleBlue,
    separatorColor: colors.light.separatorColor,
    ...primaryColors,
  },
  fonts,
};

export const darkTheme: iTheme = {
  colors: {
    bgPrimary: colors.dark.veryDarkBlue2,
    bgSecondary: colors.dark.cardBackground,
    bgTertiary: colors.dark.lightBlueGrey,
    fontPrimary: colors.dark.primaryFont,
    fontSecondary: colors.dark.fontSecondary,
    primary: colors.dark.desaturatedBlue,
    separatorColor: colors.dark.lightBlueGrey,
    ...primaryColors,
  },
  fonts,
};
