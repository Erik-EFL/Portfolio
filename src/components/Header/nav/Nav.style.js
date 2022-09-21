import styled from 'styled-components';
import theme from '../../Themes/Themes'

const NavMenu = styled.nav`
  @media (max-width: 900px) {
    position: relative;
    width: 200px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    padding: 0 25px;
    margin-right: 56px;
    align-items: center;
    justify-content: center;
    align-content: center;
    grid-gap: 25px;

    button {
      border: none;
      margin-bottom: 4px;
      font-size: 15px;
    }

    .link {
      display: block;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0.4;
      text-decoration: none;
      transition: all 0.5s ease-in-out;
    }

    .icon-social-media {
      display: none;
    }

    .menu.active {
      opacity: 1;
      display: block;
      position: absolute;
      margin-top: 90px;
      right: -24px;
      transition: all 0.5s ease-in-out;
      .icon-social-media {
        display: flex;
        transition: all 0.5s ease-in-out;
      }
    }

    .menu {
      opacity: 0;
      display: none;
    }
  }

  @media (min-width: 900px) {
    width: 350px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    padding: 0 25px;
    margin-right: 56px;
    align-items: center;
    justify-content: center;
    align-content: center;
    grid-gap: 25px;


    button {
      display: none;
    }

    .link {
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0.4;
      text-decoration: none;
      transition: all 0.5s ease-in-out;
    }

    .menu.active {
      display: none;
    }

    .menu {
      display: none;
    }
  }

  .link:hover {
    opacity: 1;
  }

  .link.active {
    text-decoration: none;
    opacity: 1;
    transition: all 0.5s ease-in-out;
    color: ${theme.defaults.color};
  }

`;

export default NavMenu;
