import React from 'react';

import { homeObjOne } from '../resources/content';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Info from '../components/Information';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Info {...homeObjOne}/>
    </Layout>
  )
}

export default Home;