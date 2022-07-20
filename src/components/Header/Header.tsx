import "./Header.scss";

import { Search, Switch } from "@/components";

const Header = () => {
  return (
    <header className="header">
      <Switch />
      <Search />
    </header>
  );
};

export default Header;
