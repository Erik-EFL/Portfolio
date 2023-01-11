import { Container } from '@mui/system';
import styled from 'styled-components';

const HomeContainer = styled(Container)`
  display: flex;

  @media (min-width: 320px) and (max-width: 399.2px) {

  }

  @media (min-width: 399.3px) and (max-width: 768px) {
    margin-top: 20px;
  }

  @media (min-width: 768.1px) and (max-width: 1024px) {
    margin-top: 20px;
  }

  @media (min-width: 1024.1px) {
    margin-top: 30px;
  }
`;

export default HomeContainer;
