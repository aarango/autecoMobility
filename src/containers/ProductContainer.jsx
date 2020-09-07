import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  useParams,
} from 'react-router-dom';
import ProductViewer from '../components/Product';

function ProductContainer() {

  const { id } = useParams();
  const [products, setProducts] = useState([]);

  const API_URL = 'https://api.mercadolibre.com';
  const ID_SELECT = id;
  const API_TOKEN = 'APP_USR-260721409686760-090719-cc11d3617254a5471d42a7f5c2004676-137761565';

  useEffect(() => {
    async function getProduct() {
      const res = await axios.get(`${API_URL}/items/${ID_SELECT}?access_token=${API_TOKEN}`);
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
