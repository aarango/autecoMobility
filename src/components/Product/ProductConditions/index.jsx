import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';

function ProductResum({ condition, selleraddress, quanty, acceptsmercadopago, warranty }) {

  return (
    <>
      <Typography variant='h6' component='span'>
        Información de compra
      </Typography>
      <br />
      <Typography variant='body1' component='span'>
        Garantía:
        <br />
        <small><li>{warranty || 'Sin definir' }</li></small>
      </Typography>
      <Typography variant='body1' component='span'>
        Condición:
        <br />
        <small>
          <li>
            {condition === 'new' ? 'Nuevo' : 'No definida'}
          </li>
        </small>
      </Typography>
      <Typography variant='body1' component='span'>
        Ubicación:
        <br />
        <small>
          <li>
            {selleraddress && selleraddress.city.name ? selleraddress.city.name : null }
          </li>
        </small>
      </Typography>
      <Typography variant='body1' component='span'>
        Unidades disponibles:
        <br />
        <small>
          <li>
            {quanty > 0 ? quanty : ' ' }
          </li>
        </small>
      </Typography>
      <Typography variant='body1' component='span'>
        Medios de Pago:
        <br />
        <small>
          <li>
            {acceptsmercadopago === true ? 'Mercado Pago': 'PSE' }
          </li>
        </small>
      </Typography>

    </>
  );
};

export default ProductResum;

