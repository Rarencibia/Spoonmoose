import React from 'react'
import Navbar from './reuseable/Navbar';
import MainPortrait from './homepageComp/MainPortrait';
import HomepageBody from './homepageComp/HomepageBody';
import HomepageIntro from './homepageComp/HomepageIntro';

function App() {
  return (
    <div>
      <MainPortrait />
      <Navbar />
      <HomepageIntro />
      <HomepageBody />
    </div>
  );
}

export default App;
