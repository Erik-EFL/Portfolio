import React from 'react';
import { NavLink } from 'react-router-dom';
import NavMenu from './Nav.style';

export default function Nav() {
  return (
    <NavMenu>
      <i href="https://www.linkedin.com/in/erikferreiralima/" target="_blank"class="icon ri-linkedin-fill"></i>
      <i href="https://github.com/Erik-EFL" target="_blank"  className="icon ri-github-line"></i>
      <i href="https://www.instagram.com/oi.erik.lima/" target="_blank"  class="icon ri-instagram-line"></i>

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
