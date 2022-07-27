import { themes } from "@/common";

const getInitialTheme = (): string => {
  const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = isDarkTheme ? themes.dark : themes.light;
  return initialTheme;
};

export default getInitialTheme;
