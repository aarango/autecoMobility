import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useStyles, theme } from './style';
import ProductImages from '../ProductImages/index';
import ProductResum from '../PruductResum/index';
import ProductConditions from '../ProductConditions';

function ProductDetail({ products = [] }) {
  const classes = useStyles();

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <Paper className={classes.paper}>
                <ProductImages
                  title={products.title}
                  pictures={products.pictures}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <Paper className={classes.paper}>
                    <ProductResum
                      condition={products.condition}
                      soldquantity={products.sold_quantity}
                      title={products.title}
                      originalprice={products.original_price}
                      baseprice={products.base_price}
                      availablequantity={products.available_quantity}
                      warranty={products.warranty}
                      shipping={products.shipping}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Paper className={classes.paper}>
                    <ProductConditions
                      attributes={products.attributes}
                      selleraddress={products.seller_address}
                      condition={products.condition}
                      quanty={products.initial_quantity - products.sold_quantity}
                      acceptsmercadopago={products.accepts_mercadopago}
                      originalprice={products.original_price}
                      baseprice={products.base_price}
                      availablequantity={products.available_quantity}
                      warranty={products.warranty}
                      shipping={products.shipping}
                    />
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

        </div>
      </ThemeProvider>
    </>
  );
};

export default ProductDetail;

