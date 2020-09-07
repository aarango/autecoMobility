
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Product from '../SingleProduct';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 760,
  },
}));

export default function ReelProduct({ products = [] }) {
  const classes = useStyles();
  console.log(products);
  return (
    <List className={classes.root}>
      {
        products.map((product) => (
          <Product
            id={product.id}
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
