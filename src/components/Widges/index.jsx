import React from 'react';

function Widges() {
  return (
    <div style={{ height: 'auto' }}>
      <iframe
        title='frame'
        src='https://www.auteco.com.co/'
        width='340'
        height='100%'
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling='no'
        frameBorder='0'
        allow='encrypted-media'
      />
    </div>
  );
}

export default Widges;
