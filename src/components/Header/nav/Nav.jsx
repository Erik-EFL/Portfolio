import React from 'react';
import { NavLink } from 'react-router-dom';
import NavMenu from './Nav.style';

export default function Nav() {
  return (
    <NavMenu>
      <a className='icons' href="https://www.linkedin.com/in/erikferreiralima/" target="_blank"><i class="icon ri-linkedin-fill" /></a>
      <a className='icons' href="https://github.com/Erik-EFL" target="_blank"><i className="icon ri-github-line" /></a>
      <a className='icons' href="https://www.instagram.com/oi.erik.lima/" target="_blank"><i class="icon ri-instagram-line" /></a>

      <NavLink
        to="/"
        value='Home'
        className="link"
      >
        Home
      </NavLink>
      <NavLink
        to="/skills"
        value='Skills'
        className="link"
      >
        Skills
      </NavLink>
      <NavLink
        to="/projects"
        value='Projects'
        className="link"
      >
        Projects
      </NavLink>
    </NavMenu>
  );
}
