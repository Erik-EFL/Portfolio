import { Grid } from '@mui/material';
import styled from 'styled-components';

export const CardStyled = styled(Grid)`
  width: 280px;
  padding: 20px;
  line-height: 15px;
  opacity: 100%;
  border-radius: 20px;
  border: 1px solid #a0a0a0;
  display: inline-block;
  box-shadow: -1px 1px 50px 0 rgba(0, 0, 0);



  h3 {
    background-attachment: fixed;
    width: 100%;
    margin: 0;
    margin-bottom: 15px;
    padding: 0;
  }

  h4 {
    margin-bottom: 15px;
    padding: 0;
    line-height: 16px;
  }

  p {
    padding: 0;
    margin-left: -10px;
  }
`;
