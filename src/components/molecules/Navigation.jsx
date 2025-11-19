import React, { useState } from "react";
import "../../styles/components/Navigation.scss";

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <nav className="nav-wrapper">
      <ul className={`nav ${isActive ? "active" : ""}`} id="nav">
        <li>
          <a href="#home" onClick={closeMenu}>
            Início
          </a>
        </li>
        <li>
          <a href="#about" onClick={closeMenu}>
            Sobre
          </a>
        </li>
        <li>
          <a href="#projects" onClick={closeMenu}>
            Projetos
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>
            Contato
          </a>
        </li>
      </ul>
      <div
        className={`menu-toggle ${isActive ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navigation;
