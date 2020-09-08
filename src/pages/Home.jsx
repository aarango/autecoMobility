import React from 'react';
import Widges from '../components/Widges';
import CategoryContainer from '../containers/CategoryContainer';

function Home() {
  return (
    <div style={{ display: 'flex', padding: '15px' }}>
      <CategoryContainer />
      <Widges />
    </div>
  );
}

export default Home;
