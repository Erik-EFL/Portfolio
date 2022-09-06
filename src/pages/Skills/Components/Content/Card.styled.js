import { Grid } from '@mui/material';
import styled from 'styled-components';

export const CardStyled = styled(Grid)`
  width: 280px;
  padding: 20px;
  line-height: 15px;
  opacity: 100;
/*   background: rgba( 255, 255, 255, 0.35 );
  backdrop-filter: blur( 5.5px );
    -webkit-backdrop-filter: blur( 5.5px ); */
  border-radius: 20px;
  border: 1px solid #a0a0a0;
  display: inline-block;
  box-shadow: 0 8px 32px 0 rgba( 0, 0, 0, 0.37 );

  h3 {
    background: transparent;
    width: 100%;
    margin: 0;
    margin-bottom: 15px;
    padding: 0;
  }

  h4 {
    background: transparent;
    margin-bottom: 15px;
    padding: 0;
    line-height: 16px;
  }

  p {
    background: transparent;
    padding: 0;
    margin-left: -10px;
  }

  div {
    background: transparent;
  }
`;
