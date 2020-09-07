import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import List from '@material-ui/core/List';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 560,
  },
}));

const productView = () => {
  const classes = useStyles();

  const [products, setProducts] = useState([]);
  const [idProduct, setIdProduct] = useState('MCO502145261');

  const API_URL = 'https://api.mercadolibre.com';
  const ID_SELECT = idProduct;
  const API_TOKEN = 'APP_USR-260721409686760-090622-0e88b953fed55b754c6d216970ad40ca-137761565';

  useEffect(() => {
    async function getProduct() {
      const res = await axios.get(`${API_URL}/items/${ID_SELECT}?access_token=${API_TOKEN}`);
      console.log('single', res.data);
      setProducts(res.data);
    }
    getProduct();
  }, [ID_SELECT]);

  return (
    <>
      <h1>Titulo</h1>
      <small>{products.base_price}</small>
      <br />
      <small>{products.original_price}</small>
      <h1>{products.title}</h1>
      <h1>{products.warranty}</h1>
      <h1>{products.condition}</h1>
      <img atl={products.title} src={products.thumbnail} />

    </>
  );

};

export default productView;
