import "./Switch.scss";
import { themes } from "@/common";

const Switch = ({ changeMode, theme }: any) => {
  const isLightTheme = theme === themes.light;
  return (
    <div className="switch">
      <h1>devfinder</h1>
      <div className="switch__mode text-purple-200">
        <p>{isLightTheme ? "Light" : "Dark"}</p>
        <i
          className={`fas cursor-pointer ${
            isLightTheme ? "fa-sun" : "fa-moon"
          }`}
          onClick={changeMode}
        ></i>
      </div>
    </div>
  );
};

export default Switch;
