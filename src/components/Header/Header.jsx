import React from 'react';
import HeaderStyled from './Header.style';
import Nav from './nav/Nav';
import Logo from './logo/Logo';

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
