import Styled from 'styled-components';

const HeaderStyled = Styled.header`
  align-items: center;
  align-content: center;
  height: 100px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;

  @media (min-width: 769px) {
    width: 90%;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 100%;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
`;

export default HeaderStyled;
