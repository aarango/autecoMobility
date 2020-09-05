import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import axios from 'axios';
import Product from '../SingleProduct';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 560,
  },
}));

export default function ReelProduct() {
  const classes = useStyles();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const res = await axios.get('https://api.mercadolibre.com/sites/MCO/search?q=llantas%20carros&offset=0&limit=1&access_token=APP_USR-260721409686760-090504-109fefed438d4a4466e1aac3224454f5-137761565');
      console.log(res.data.results);
      setProducts(res.data.results);
    }
    getProducts();
  }, []);

  return (
    <List className={classes.root}>
      {
        products.map((product) => <Product title={product.title} image={product.thumbnail} />)
      }
    </List>
  );
}
