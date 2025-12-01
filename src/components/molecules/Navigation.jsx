import React, { useState } from 'react';
import '../../styles/components/Navigation.scss';

const Navigation = ({ activeSection }) => {
  const [isActive, setIsActive] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Início' },
    { href: '#about', label: 'Sobre' },
    { href: '#projects', label: 'Projetos' },
    { href: '#contact', label: 'Contato' },
  ];

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <nav className="nav-wrapper">
      <ul className={`nav ${isActive ? 'active' : ''}`} id="nav">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={activeSection === link.href.slice(1) ? 'active' : ''}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className={`menu-toggle ${isActive ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-expanded={isActive}
        aria-controls="nav"
        aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navigation;
