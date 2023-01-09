import { Grid } from '@mui/material';
import styled from 'styled-components';

export const CardStyled = styled(Grid)`
  width: 280px;
  padding: 20px;
  line-height: 15px;
  opacity: 1;
  border-radius: 20px;
  border: 1px solid #a0a0a0;
  display: inline-block;
  box-shadow: 0 8px 32px 0 rgba( 0, 0, 0, 0.37 );
  backdrop-filter: blur( 10px );
  color: #ffffffcb;
  background: transparent;

  h4 {
  background: transparent;
  margin-bottom: 0;
  padding: 0;
  }

  p {
  background: transparent;
  padding: 0;
  margin-left: -10px;
  }

  div {
  background: transparent;
  }

  .card-header {
  align-items: center;
  background: transparent;
  border-bottom: 1px solid #a0a0a0;
  display: flex;
  justify-content: space-between;
  margin-top: -12px;
  padding: 0;
  width: 100%;
  }
`;
