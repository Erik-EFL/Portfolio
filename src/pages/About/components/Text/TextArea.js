import styled from 'styled-components';
import theme from '../../../../components/Themes/Themes';

const TextArea = styled.article`
  width: 100%;
  padding: 12px;
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
  text-align: justify;
  text-justify: inter-word;
  color: ${theme.defaults.color};
  max-height: 70vh;
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
`;

export default TextArea;
