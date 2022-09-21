import React from 'react';
import { NavLink } from 'react-router-dom';
import NavMenu from './Nav.style';
import { BiBookOpen, BiHome, BiBriefcase } from "react-icons/bi";


export default function NavMobile() {
  return (
    <NavMenu>
      <NavLink
        to="/"
        value='Home'
        className="link"
      >
        <h1><BiHome /></h1>
        <p>Home</p>
      </NavLink>
      <NavLink
        to="/skills"
        value='Skills'
        className="link"
      >
       <h1><BiBriefcase /></h1>
       <p>Skills</p>
      </NavLink>
      <NavLink
        to="/projects"
        value='Projects'
        className="link"
      >
       <h1><BiBookOpen /></h1>
        <p>Projects</p>
      </NavLink>
    </NavMenu>
  );
}
