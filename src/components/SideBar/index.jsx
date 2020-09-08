import React from 'react';
import StoreIcon from '@material-ui/icons/Store';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SideBarOne from './SideBarOne';
import './index.css';

const Icons = [StoreIcon, MonetizationOnIcon, LocationOnIcon];

function SideBar({ category, resultTotal, filterAvailable }) {
  const currencyFormat = (num) => {
    return `${num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} resultados`;
  };
  return (
    <div className='sidebar'>
      <h2>{category}</h2>
      <p>
        {resultTotal && currencyFormat(resultTotal)}
      </p>
      {
        filterAvailable && filterAvailable.slice(0, 3).map((filter, index) => <SideBarOne key={filter.id} Icon={Icons[index]} title={filter && filter.name} options={filter && filter.values} />)
      }
    </div>
  );
}

export default SideBar;
