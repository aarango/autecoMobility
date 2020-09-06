import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import './index.css';

export default function SingleProduct({ image, title, seller, price, originalprice, shipping, installments, region }) {

  const currencyFormat = (num) => {
    return `$${num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
  };

  const percentCalcule = (price, originalprice) => {
    return (
      <span className='singleProduct_percent'>
        {parseFloat(((originalprice / price) - 1) * 100).toFixed(0)}
        % OFF
      </span>
    );

  };

  return (
    <ListItem className='singleProduct'>
      <div className='singleProduct__left'>
        <img alt={title} src={image} />
      </div>
      <div className='singleProduct__information'>
        <div className='singleProduct__title'>
          <h2>{title}</h2>
          <p>{seller}</p>
        </div>
        {originalprice ? (
          <div className='singleProduct__price_original'>
            <s>
              {currencyFormat(originalprice)}
            </s>
          </div>
        ) : null }
        <div className='singleProduct__price'>
          <span>
            {currencyFormat(price)}
            {' '}
            {originalprice ? percentCalcule(price, originalprice) : null }
          </span>
        </div>
        {installments ? (
          <div className='singleProduct_percent'>
            <span>
              Hasta
              {' '}
              {installments.quantity}
              {' '}
              x
              { currencyFormat(installments.amount)}
            </span>
          </div>
        ) : null }
        {region ? (
          <div>
            <small>
              {region.state_name}
            </small>
          </div>
        ) : null }
        { shipping.free_shipping === true ? (
          <div className='singleProduct__sendType'>
            <span>Envio Gratis</span>
          </div>
        ) : null }
      </div>
    </ListItem>
  );
}
