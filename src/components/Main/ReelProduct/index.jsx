
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Product from '../SingleProduct';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 760,
    padding: theme.spacing(2, 0, 2, 0),
  },
}));

export default function ReelProduct({ products = [] }) {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      {
        products.map((product) => (
          <Product
            key={product.id}
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
