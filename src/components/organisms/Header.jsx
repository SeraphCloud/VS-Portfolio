import React from "react";
import Logo from "../atoms/Logo";
import Navigation from "../molecules/Navigation";
import "../../styles/components/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
