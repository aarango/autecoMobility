import React from 'react';
import Widges from '../components/Widges';
import Sidebar from '../components/SideBar';
import MainContainer from '../containers/MainContainer';

function Home() {
  return (
    <div style={{ display: 'flex', padding: '15px' }}>
      <Sidebar />
      <MainContainer />
      <Widges />
    </div>
  );
}

export default Home;
