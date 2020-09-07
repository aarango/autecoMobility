import React, { useState } from 'react';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import './index.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(6),
    //padding: theme.spacing(6),
    maxWidth: '1200px',

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  typography: {
    color: '#333333',
  },
  button: {
    fontStyle: 'italic',
  },
}));

const theme = createMuiTheme();
theme.typography.h1 = {
  textAlign: 'left',
  fontSize: '1rem',
  '@media (min-width:600px)': {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.3rem',
    color: '#333333',
  },
};

function ProductDetail({ products = [] }) {
  const classes = useStyles();
  const [value, SetValue] = useState('');

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
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid item sm={8}>
              <Paper className={classes.paper}>
                <img alt={products.title} width='500rem' height='500px' src={products.secure_thumbnail} />
              </Paper>
            </Grid>
            <Grid item sm={4}>
              <Paper className={classes.paper}>
                <Typography variant='body2' component='h1'>
                  {products.condition === 'new' ? 'Nuevo' : null}
                  {' '}
                  -
                  {' '}
                  {products.sold_quantity}
                  {' '}
                  vendidos
                </Typography>
                <br />
                <Typography variant='h1' component='h1'>
                  {products.title}
                  <br />
                  <Rating name='read-only' value={getRandomInt(1, 6)} readOnly />
                </Typography>
                { products.original_price ? (
                  <Typography variant='body2' component='s'>
                    {products.original_price && currencyFormat(products.original_price)}
                  </Typography>
                ) :
                  null}
                <br />
                <Typography variant='h4' component='span'>
                  {products.base_price && currencyFormat(products.base_price)}
                  {' '}
                  {products.original_price ? percentCalcule(products.base_price, products.original_price) : null }
                </Typography>
                <br />
                <Typography variant='h6' component='span'>
                  {products.available_quantity >= 1 ? ' Stock Disponible' : 'Sin Stock' }
                </Typography>
                <br />
                <Typography variant='body1' component='span'>
                  {products.warranty}
                </Typography>
                <Button variant='contained' color='primary'>
                  Comprar Ahora
                </Button>

              </Paper>
            </Grid>
          </Grid>

        </div>
      </ThemeProvider>
    </>
  );
};

export default ProductDetail;

