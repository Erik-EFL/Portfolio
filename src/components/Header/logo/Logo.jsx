import React from 'react';
import LogoStyle from './Logo.style';
import logo from './image.svg'

export default function Logo() {
  return (
    <LogoStyle className='logo'>
      <img src={logo} alt="Logotipo" />
    </LogoStyle>
  );
}
