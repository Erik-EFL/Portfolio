import styled from 'styled-components';
import theme from '../../../../components/Themes/Themes';

const TextArea = styled.article`
  width: 100%;
  padding: 0 20px;
  font-size: 1rem;
  line-height: 1.2;
  text-align: left;
  text-justify: distribute-all-lines;
  color: ${theme.defaults.color};
  overflow-y: scroll;
  color: #ffffffcb;

  /* Works on Firefox */
  scrollbar-width: thin;
  scrollbar-color: blue orange;

  /* Works on Chrome, Edge, and Safari */
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 20px;
    background-color: #fff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #202024;
    border-radius: 20px;
    border: 1px solid #fff;
  }

  @media (min-width: 1025px) {
    height: 55vh;
    margin-bottom: 100px;
  }

  @media (min-width: 769px) and (max-width: 1024px)  {
    height: 50vh;
  }

  @media (min-width: 399.3px) and (max-width: 768px) {
    height: 23vh;
  }

  @media (min-width: 320px) and (max-width: 399.2px) {
    height: 23vh;
  }
`;

export default TextArea;
