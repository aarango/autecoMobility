import React from 'react';
import ReelProduct from './ReelProduct';

function Main({ selecteDate }) {
  return (
    <div className='main'>
      <ReelProduct selecteDate={selecteDate} />
    </div>
  );
}

export default Main;
