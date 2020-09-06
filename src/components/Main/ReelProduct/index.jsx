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

export default function ReelProduct({ selecteDate }) {
  const classes = useStyles();

  const [products, setProducts] = useState([]);
  console.log('Reell', selecteDate);

  const API_URL = 'https://api.mercadolibre.com';
  const search = selecteDate;
  const API_LIMIT = '10';
  const API_TOKEN = 'APP_USR-260721409686760-090603-6bc6f90c466847e92223b0e1e63a5627-137761565';

  useEffect(() => {
    async function getProducts() {
      const res = await axios.get(`${API_URL}/sites/MCO/search?q=${search}&offset=0&limit=${API_LIMIT}&access_token=${API_TOKEN}`);
      console.log(res.data.results);
      setProducts(res.data.results);
    }
    getProducts();
  }, [search]);

  return (
    <List className={classes.root}>
      {
        products.map((product) => (
          <Product
            title={product.title}
            image={product.thumbnail}
            price={product.price}
            originalprice={product.original_price}
            shipping={product.shipping}
            installments={product.installments}
            region={product.address}

          />
        ))
      }
    </List>
  );
}
