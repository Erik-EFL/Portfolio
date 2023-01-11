import styled from 'styled-components';
import theme from '../../../Themes/Themes';

const NavMenu = styled.nav`
//configuração do menu base
  display: flex;
  flex-direction: row;
  align-items: baseline;
  align-content: baseline;
  justify-content: baseline;
  gap: 10px;
  width: 100%;
  /* color: #ffffffcb; */

  @media (min-width: 840px) and (max-width: 1080px) {
    .completeMenu {
      margin-right: 50px;
    }
  }

`;

const Container = styled.div`
 //configuração do menu base
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 100%;
  gap: 20px;
  padding: 0 10px;


  .active {
    color: ${theme.defaults.color};
    text-decoration: none;
    transition: all 0.5s ease-in-out;
    font-size: 20px;
  }

  .inactive {
    color: ${theme.defaults.text};
    opacity: 0.6;
    text-decoration: none;
    transition: all 0.5s ease-in-out;
    font-size: 20px;

    &:hover {
      color: ${theme.defaults.text};
      opacity: 1;
      text-decoration: none;
      transition: all 0.5s ease-in-out;
    }
  }

  // break points
  @media (min-width: 838px) {
    .menuContacts {
      display: none;
    }
  }

  @media (min-width: 604px) and (max-width: 840px) {
    .active {
      font-size: 18px;
    }

    .inactive {
      font-size: 18px;
    }

    .menuContacts {
      .link.open {
        color: ${theme.defaults.color};
        text-decoration: none;
        transition: all 0.5s ease-in-out;
        font-size: 18px;
      }

      .link.exit {
        color: ${theme.defaults.text};
        opacity: 0.4;
        text-decoration: none;
        transition: all 0.5s ease-in-out;
        font-size: 18px;

        &:hover {
          color: ${theme.defaults.text};
          opacity: 1;
          text-decoration: none;
          transition: all 0.5s ease-in-out;
        }
      }
    }
  }

  @media (min-width: 320px) and (max-width: 603px) {
    .active {
      display: none;
    }
    .inactive {
      display: none;
    }

    .menuContacts {
      display: none;

      .link {
        display: none;
      }
      .menu {
        display: none;
      }
    }
  }
`;

export {
  NavMenu,
  Container,
};
