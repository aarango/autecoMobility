import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import { useHistory } from 'react-router-dom';
import './index.css';

export default function SingleProduct({ image, title, seller, price, originalprice, shipping, installments, region, id }) {

  const idRoute = useHistory();

  // Función para dar formato número
  const currencyFormat = (num) => {
    return `$${num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
  };

  // Función para dar formato porcentaje
  const percentCalcule = (price, originalprice) => {
    return (
      <span className='singleProduct_percent'>
        {parseFloat(((originalprice / price) - 1) * 100).toFixed(0)}
        % OFF
      </span>
    );
  };

  // Enviando ID Click
  const handleClick = (event) => {
    event.preventDefault();
    console.log('id--1,', id);
    idRoute.push(`/${id}`);
  };

  return (
    <ListItem className='singleProduct'>
      <div style={{ cursor: 'pointer' }} className='singleProduct__left'>
        <img alt={title} src={image} onClick={handleClick} />
      </div>
      <div className='singleProduct__information'>
        <div className='singleProduct__title' style={{ cursor: 'pointer' }}>
          <h2 id={id} onClick={handleClick}>
            {title}
          </h2>
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
