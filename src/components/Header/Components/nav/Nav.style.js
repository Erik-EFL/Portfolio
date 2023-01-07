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

  @media (min-width: 501px) and (max-width: 768px) {
    .icon-social-media {
      display: none;
    }
  }

  @media (min-width: 320px) {
    .icon-social-media {
      display: flex;
    }
  }
`;

const Container = styled.div`
 //configuração do menu base
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 0 10px;


  .active {
    color: ${theme.defaults.color};
    text-decoration: none;
    transition: all 0.5s ease-in-out;
  }

  .inactive {
    color: ${theme.defaults.text};
    opacity: 0.4;
    text-decoration: none;
    transition: all 0.5s ease-in-out;

    &:hover {
      color: ${theme.defaults.text};
      opacity: 1;
      text-decoration: none;
      transition: all 0.5s ease-in-out;
    }
  }

  // break points
  @media (min-width: 769px) {
    .menuContacts {
      display: none;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    .menuContacts {
      .link.open {
        color: ${theme.defaults.color};
        text-decoration: none;
        transition: all 0.5s ease-in-out;
      }

      .link.exit {
        color: ${theme.defaults.text};
        opacity: 0.4;
        text-decoration: none;
        transition: all 0.5s ease-in-out;

        &:hover {
          color: ${theme.defaults.text};
          opacity: 1;
          text-decoration: none;
          transition: all 0.5s ease-in-out;
        }
      }
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
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

    .icon-social-media {
      display: flex;
    }
  }
`;

export {
  NavMenu,
  Container,
};
