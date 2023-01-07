import React from 'react';
import HeaderStyled from './Header.style';
import Nav from './Components/nav/Nav';
import Logo from './Components/logo/Logo';

export default function Header() {
  return (
    <>
      <HeaderStyled>
        <Logo />
        <Nav />
      </HeaderStyled>
    </>
  );
}
