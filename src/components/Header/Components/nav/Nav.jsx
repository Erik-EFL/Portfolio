import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuMobile from '../NavMobile/Menu.mobile';
import Icons from './Icosn';
import  { NavMenu, Container } from './Nav.style';

export default function Nav() {
  return (
    <NavMenu>
        <Icons />
        <Container className='completeMenu'>
          <NavLink
            to="/"
            value='Home'
            className={({isActive}) => (isActive ? 'active' : 'inactive')}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            value='About'
            className={({isActive}) => (isActive ? 'active' : 'inactive')}
          >
            About
          </NavLink>
          <NavLink
            to="/skills"
            value='Skills'
            className={({isActive}) => (isActive ? 'active' : 'inactive')}
          >
            Skills
          </NavLink>
          <NavLink
            to="/projects"
            value='Projects'
            className={({isActive}) => (isActive ? 'active' : 'inactive')}
          >
            Projects
          </NavLink>
          <MenuMobile />
        </Container>
      </NavMenu>
  );
}
