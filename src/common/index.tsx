import { Theme, IObjectKeys } from "../type";

const light: Theme = {
  backgroundColor: "#fff",
  color: "#000",
  secondaryColor: "#cecece",
};

const dark: Theme = {
  backgroundColor: "#000",
  color: "#fff",
  secondaryColor: "#cecece",
};

export const ThemeDict: IObjectKeys = {
  light: light,
  dark: dark,
};
