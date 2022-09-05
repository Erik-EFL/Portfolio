import React from 'react';
import LogoStyle from './Logo.style';
import logo from './image.svg'

export default function Logo() {
  return (
    <LogoStyle>
      <img src={logo} alt="Logotipo" />
    </LogoStyle>
  );
}
