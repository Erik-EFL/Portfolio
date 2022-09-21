import styled from "styled-components";

const Main = styled.main`

  @media (max-width: 600px) {
    footer {
      display: none;
    }
    .navTop {
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
