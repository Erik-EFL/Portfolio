import Styled from 'styled-components';

const HeaderStyled = Styled.header`
  align-items: center;
  align-content: center;
  height: 100px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  width: 90%;

  @media (max-width: 600px) {
    .logo {
      margin-left: -15px;
    }
  }

`;

export default HeaderStyled;
