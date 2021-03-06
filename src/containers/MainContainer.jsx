import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  useParams,
} from 'react-router-dom';
import MainComponent from '../components/Main';
import config from '../enviroment/config';

function MainContainer() {

  const { query, offset } = useParams();
  const [products, setProducts] = useState([]);
  const [pagingTotal, setPaginTotal] = useState(1000);

  const API_URL = config.URL;
  const API_LIMIT = config.LIMIT;
  const API_TOKEN = config.TOKEN;

  useEffect(() => {
    async function getProducts() {
      const res = await axios.get(`${API_URL}/sites/MCO/search?q=${query}&offset=${offset || 0}&limit=${API_LIMIT}&access_token=${API_TOKEN}`);
      setPaginTotal(res.data.paging.total);
      setProducts(res.data.results);
    }
    getProducts();
  }, [query, offset]);

  return (
    <MainComponent
      products={products}
      limit={API_LIMIT}
      pagingTotal={pagingTotal}
    />
  );
}

export default MainContainer;
