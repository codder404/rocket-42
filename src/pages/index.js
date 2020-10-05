import React from 'react';

import { homeObjOne, homeObjTwo, homeObjThree } from '../resources/content';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Info from '../components/Information';
import Services from '../components/Services';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Info {...homeObjOne}/>
      <Info {...homeObjTwo} />
      <Services />
      <Info {...homeObjThree} />
    </Layout>
  )
}

export default Home;