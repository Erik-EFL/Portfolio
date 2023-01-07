import styled from "styled-components";
import Themes from "../Themes/Themes";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 0;
  padding: 1rem;
  letter-spacing: 0.1rem;
  width: 100%;
  background: ${Themes.defaults.background};
  z-index: 12;
`;
