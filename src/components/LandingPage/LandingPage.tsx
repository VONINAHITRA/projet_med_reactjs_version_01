import { Container, Grid } from '@material-ui/core';
import React from 'react';
import About from './Layout/About/About';
import Body from './Layout/Body/Body';
import Footer from './Layout/Footer/Footer';
import Header from './Layout/Header/Header';

const LandingPage = () => {
  return (
    <Grid justify="center" container>
      <Grid item md={12} xs={12}>
         <Header/> 
      </Grid>
      <Grid item md={10} sm={10} xs={12}>
        <Body />
      </Grid>
      <Grid item md={12} sm={12} xs={12}>
        <About />
      </Grid>
      <Grid item md={12} xs={12}>
         <Footer/> 
      </Grid>
    </Grid>
  );
};

export default LandingPage;
