import { Container, Grid } from '@mui/material';
import React from 'react';
import { CardStyled } from './Card.styled';
import Data from './utils/data';

export default function Card() {
  return (
    <Container container component="main" sx={{
      maxWidth: '900px',
    }}>
      <Grid container spacing={2} xs={12} sm={12} md={12} lg={12} sx={{
        gap: '30px',
        justifyContent: 'center',
      }}>
        {Data?.map((item, index) => (
          <CardStyled key={index}>
              <h3>{ item.type}</h3>
              { item.skills.map((skill, index) => (
                <div key={index} style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                  <h4>{ skill.name }</h4>
                  {
                    item.type === 'Languages'
                    ? <p>{ skill.level }</p>
                    : <p>{` Level: ${ skill.level }`}</p>
                    }
                  </div>
                ))}
          </CardStyled>
        ))}
      </Grid>
    </Container>
  );
}
