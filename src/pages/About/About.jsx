import { Container, Grid } from '@mui/material';
import React from 'react'
import Text from './components/Text/Text'
import Video from './components/Video/Video'

function About() {
  return (
    <>
      <Container maxWidth='lg'>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={8} lg={6} sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto'
          }}>
            <Video />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={6} sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto'
          }}>
            <Text />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default About
