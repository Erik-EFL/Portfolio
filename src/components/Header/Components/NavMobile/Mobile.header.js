import styled from 'styled-components';
import theme from '../../../Themes/Themes';

const Container = styled.nav`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    margin-right: 60px;
    color: #ffffffcb;

    button {
      border: none;
      margin-bottom: 4px;
      font-size: 15px;
    }

    .icon-social-mobile {
      display: none;
    }

    .menu.open {
      opacity: 1;
      display: block;
      position: absolute;
      margin-top: 90px;
      right: 0;
      transition: all 0.5s ease-in-out;
      .icon-social-mobile {
        display: flex;
        transition: all 0.5s ease-in-out;
      }
    }

    .menu {
      opacity: 0;
      display: none;
    }
`;

export default Container;
