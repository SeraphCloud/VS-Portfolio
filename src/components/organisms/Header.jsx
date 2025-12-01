import React from 'react';
import Logo from '../atoms/Logo';
import Navigation from '../molecules/Navigation';
import '../../styles/components/Header.scss';

const Header = ({ activeSection }) => {
  return (
    <header className="header">
      <Logo />
      <Navigation activeSection={activeSection} />
    </header>
  );
};

export default Header;
