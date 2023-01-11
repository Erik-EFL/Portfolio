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

  @media (min-width: 604px) and (max-width: 840px)  {
    .icon-social-media {
      display: none;
    }
  }

  @media (min-width: 320px) and (max-width: 603px)  {
    .icon-social-media {
      display: flex;
    }
  }
`;

export default HeaderStyled;
