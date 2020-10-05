import React from 'react';

import { homeObjOne, homeObjTwo, homeObjThree } from '../resources/content';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Info from '../components/Information';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Info {...homeObjOne}/>
      <Info {...homeObjTwo} />
      <Info {...homeObjThree} />
    </Layout>
  )
}

export default Home;