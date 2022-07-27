import { useEffect, useState } from "react";
import { getInitialTheme } from "@/utils";
import { themes } from "@/common";

const useSwichMode = () => {
  const containerMain = document.getElementById("root");
  const [theme, setTheme] = useState(themes.dark);

  const setCurrentTheme = (theme: string) => {
    containerMain?.setAttribute("data-theme", theme);
    setTheme(theme);
  };

  useEffect(() => {
    setCurrentTheme(getInitialTheme());
  }, []);

  const changeMode = () => {
    let currentTheme = theme === themes.light ? themes.dark : themes.light;
    setCurrentTheme(currentTheme);
  };

  return { changeMode, theme };
};
export default useSwichMode;
