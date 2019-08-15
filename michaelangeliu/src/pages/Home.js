import React from 'react';
import Hourglass from '../components/Hourglass';
import {
  SiteTitle,
  Navigation
 } from '../components/Navigation';

import './Home.scss';

function Home() {
  return (
    <div className="home">
      <SiteTitle />
      <Navigation />
      <Hourglass />
    </div>
  );
}

export default Home;