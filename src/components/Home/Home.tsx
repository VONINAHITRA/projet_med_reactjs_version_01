import React from 'react';
import { FormattedMessage } from 'react-intl';
import Parallax from '../Paralax/Paralax';

const Home = () => {
  return (
    <>
      <Parallax filter image="/bg4.jpg"></Parallax>
      <FormattedMessage id="home.title" />
    </>
  );
};
export default Home;
