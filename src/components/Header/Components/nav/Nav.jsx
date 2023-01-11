import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuMobile from '../Mobile/NavMobile/Menu.mobile';
import  { NavMenu, Container } from './Nav.style';

export default function Nav() {
  return (
    <NavMenu className='navMenu'>
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
