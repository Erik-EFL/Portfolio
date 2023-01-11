import React from 'react';
import Icons from './Components/Icons/Icons_social';
import Logo from './Components/logo/Logo';
import Nav from './Components/nav/Nav';
import HeaderStyled from './Header.style';

export default function Header() {
  return (
    <>
      <HeaderStyled>
        <Logo />
        <Nav />
        <Icons />
      </HeaderStyled>
    </>
  );
}
