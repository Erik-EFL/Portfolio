import styled from "styled-components";

const Main = styled.main`

  @media (max-width: 600px) {
    footer {
      display: none;
    }
    .navTop {
      width: 100%;
      justify-content: center;
      align-items: center;
      align-content: center;
      margin-left: -50px;
      
      .link {
        display: none;
      }

      .icon-social-media {
        display: flex;
        position: absolute;
        right: -30px;
        top: -6px;
      }
    }
  }
`;

export default Main;
