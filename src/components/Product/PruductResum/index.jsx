import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';

function ProductConditions({ condition, soldquantity, title, originalprice, baseprice, availablequantity, warranty, shipping }) {

  // Función para dar formato número
  const currencyFormat = (num) => {
    return `$${num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
  };

  // Función para dar formato porcentaje
  const percentCalcule = (num1, num2) => {
    return (
      <span className='singleProduct_percent'>
        {parseFloat(((num1 / num2) - 1) * 100).toFixed(0)}
        % OFF
      </span>
    );
  };

  // Ramdom para Rating
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return (
    <>
      <Typography variant='body2' component='h1'>
        {condition === 'new' ? 'Nuevo' : null}
        {' '}
        -
        {' '}
        {soldquantity}
        {' '}
        vendidos
      </Typography>
      <br />
      <Typography variant='h1' component='h1'>
        {title}
        <br />
        <Rating name='read-only' value={getRandomInt(1, 6)} readOnly />
      </Typography>
      { originalprice ? (
        <Typography variant='body2' component='s'>
          {originalprice && currencyFormat(originalprice)}
        </Typography>
      ) :
        null}
      <br />
      <Typography variant='h4' component='span'>
        {baseprice && currencyFormat(baseprice)}
        {' '}
        {originalprice ? percentCalcule(baseprice, originalprice) : null }
      </Typography>
      <br />
      <Typography variant='h6' component='span'>
        {availablequantity >= 1 ? ' Stock Disponible' : 'Sin Stock' }
      </Typography>
      <br />
      <Typography className='singleProduct_percent' variant='body1' component='span'>
        {shipping && shipping.free_shipping === true ? 'Envío Grátis' : null }
      </Typography>
      <br />
      <Button variant='contained' color='primary'>
        Comprar Ahora
      </Button>
    </>
  );
};

export default ProductConditions;

