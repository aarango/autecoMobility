import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import {
  useParams,
} from 'react-router-dom';
import ProductViewer from '../components/Product';

import config from '../enviroment/config';
import { Context } from '../Context';

function ProductContainer() {

  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const { token } = useContext(Context);

  const ID_SELECT = id;
  const API_URL = config.URL;

  useEffect(() => {
    async function getProduct() {
      const res = await axios.get(`${API_URL}/items/${ID_SELECT}?access_token=${token}`);
      console.log('singleProduct', res.data);
      setProducts(res.data);
    }
    getProduct();
  }, [ID_SELECT]);

  return (
    <ProductViewer
      products={products}
    />
  );
}

export default ProductContainer;
