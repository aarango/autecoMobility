import React from 'react';
import './index.css';

function Widges() {
  return (
    <div className='widges'>
      <iframe
        title='frame'
        src='https://www.auteco.com.co/'
        width='400'
        height='100%'
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling='no'
        frameBorder='5'
        allow='encrypted-media'
      />
    </div>
  );
}

export default Widges;
