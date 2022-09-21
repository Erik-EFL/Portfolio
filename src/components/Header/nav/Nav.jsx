import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Icons from './Icosn';
import NavMenu from './Nav.style';

export default function Nav() {
  const [ isActive, setIsActive ] = useState(false)
  const [ isActiveBtn, setIsActiveBtn ] = useState(false)

  return (
    <NavMenu className='navTop'>
      <Icons />
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
      <button
        className={`link ${isActive === true ? "active" : "inactive"}`}
        type='button'
        onClick={ () => {
          setIsActive(!isActive),
          setIsActiveBtn(!isActiveBtn)
        } }
      >
        Contacts
      </button>
      <div className={`menu ${isActive === true ? "active" : "inactive"}`}>
        <Icons />
      </div>
    </NavMenu>
  );
}
