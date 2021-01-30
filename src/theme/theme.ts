import { colors } from "./variables";

const primaryColors = {
  btnPrimary: "green",
  btnSecondary: "blue",
  btnTertiary: "red",
};

export const lightTheme = {
  colors: {
    primary: colors.light.veryPaleBlue,
    ...primaryColors,
  },
};

export const darkTheme = {
  colors: {
    primary: colors.dark.veryDarkBlue2,
    ...primaryColors,
  },
};
