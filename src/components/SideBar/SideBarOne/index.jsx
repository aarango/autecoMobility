import React from 'react';
import './index.css';

function SideBarOne({ Icon, title, options = [] }) {
  return (
    <div className='sidebarOne'>
      <h3>{title}</h3>
      {
        options.map((item) => (
          <div key={item.id} className='sidebarOne__item'>
            <Icon />
            <p>
              {`${item.name} (${item.results})`}
            </p>
          </div>
        ))
      }
    </div>
  );
}

export default SideBarOne;
