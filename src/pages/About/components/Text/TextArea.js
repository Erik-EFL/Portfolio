import styled from 'styled-components';
import theme from '../../../../components/Themes/Themes';

const TextArea = styled.article`
  width: 100%;
  padding: 12px 20px 12px 12px;
  font-size: 1rem;
  line-height: 1.5;
  text-align: justify;
  text-justify: inter-word;
  color: ${theme.defaults.color};
  overflow-y: scroll;

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
    height: 60vh;
    margin-bottom: 100px;
  }

  @media (min-width: 769px) and (max-width: 1024px)  {
    height: 60vh;
    margin-bottom: 60px;

  }

  @media (min-width: 399.3px) and (max-width: 768px) {
    height: 37vh;
    margin-bottom: 60px;
  }

  @media (min-width: 320px) and (max-width: 399.2px) {
    height: 37vh;
    margin-bottom: 60px;
  }
`;

export default TextArea;
