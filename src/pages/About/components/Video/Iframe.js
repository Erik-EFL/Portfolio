import styled from 'styled-components';

const IFrameContainer = styled.iframe`
  width: 95%;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
  margin: auto;
  padding: 0 0 0 0;
  display: flex;

  @media (min-width: 400px) {
    height: 300px;
  }

  @media (min-width: 600px) {
    height: 300px;
  }

  @media (min-width: 768px) {
    height: 350px;
  }

  @media (min-width: 1024px) {
    height: 350px;
  }
`;

export default IFrameContainer;
