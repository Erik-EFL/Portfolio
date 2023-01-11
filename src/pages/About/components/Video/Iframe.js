import styled from 'styled-components';

const IFrameContainer = styled.iframe`
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
  padding: 0;

  @media (min-width: 320px) and (max-width: 399.2px) {
    width: 100%;
    height: 250px;
  }

  @media (min-width: 399.3px) and (max-width: 768px) {
    width: 100%;
    height: 250px;
  }

  @media (min-width: 769px) {
    width: 100%;
    height: 412px;
    margin-bottom: 70px;
  }
`;

export default IFrameContainer;
