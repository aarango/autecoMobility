import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import { useHistory, Link } from 'react-router-dom';
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
    idRoute.push(`/item/${id}`);
  };

  return (
    <ListItem className='singleProduct'>
      <div style={{ cursor: 'pointer' }} className='singleProduct__left'>
        <Link to={`/item/${id}`}>
          <img alt={title} src={image} />
        </Link>
      </div>
      <div className='singleProduct__information'>
        <div className='singleProduct__title' style={{ cursor: 'pointer' }}>
          <h2 className='responsive' id={id} onClick={handleClick}>
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
          <span className='responsive_price'>
            {currencyFormat(price)}
            {' '}
            {originalprice ? percentCalcule(price, originalprice) : null }
          </span>
        </div>
        {installments ? (
          <div className='singleProduct_percent'>
            <span className='responsive'>
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
            <span className='responsive'>Envio Gratis</span>
          </div>
        ) : null }
      </div>
    </ListItem>
  );
}
