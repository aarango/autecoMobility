import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import './index.css';

export default function SingleProduct({ image, title, seller, price }) {
  return (
    <ListItem className='singleProduct'>
      <div className='singleProduct__left'>
        <img alt='' src={image} />
      </div>
      <div className='singleProduct__information'>
        <div className='singleProduct__title'>
          <h2>{title}</h2>
          <p>{seller}</p>
        </div>
        <div className='singleProduct__price'>
          <span>$ 720,000</span>
        </div>
        <div className='singleProduct__sendType'>
          <span>{price}</span>
        </div>
      </div>
    </ListItem>
  );
}
