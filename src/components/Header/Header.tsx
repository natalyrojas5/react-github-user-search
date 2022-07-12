import "./Header.scss";

import { Search } from "../Search";
import { Switch } from "../Switch";

const Header = () => {
  return (
    <header className="header">
      <Switch />
      <Search />
    </header>
  );
};

export default Header;
