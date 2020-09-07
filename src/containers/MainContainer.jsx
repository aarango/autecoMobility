import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  useParams,
} from 'react-router-dom';
import MainComponent from '../components/Main';

function MainContainer() {

  const { query, offset } = useParams();

  const [products, setProducts] = useState([]);
  const [seletedOffset, setSelectedOffset] = useState(offset || 1);
  const [pagingTotal, setPaginTotal] = useState(1000);

  const API_URL = 'https://api.mercadolibre.com';
  const API_LIMIT = '5';
  const API_TOKEN = 'APP_USR-260721409686760-090700-7459401b27ae83760afe5a31cdf590ca-137761565';

  useEffect(() => {
    async function getProducts() {
      const res = await axios.get(`${API_URL}/sites/MCO/search?q=${query}&offset=${seletedOffset}&limit=${API_LIMIT}&access_token=${API_TOKEN}`);
      setPaginTotal(res.data.paging.total);
      setProducts(res.data.results);
    }
    getProducts();
  }, [query, seletedOffset]);

  return (
    <MainComponent
      products={products}
      currentSelected={(s) => setSelectedOffset(s)}
      limit={API_LIMIT}
      pagingTotal={pagingTotal}
    />
  );
}

export default MainContainer;
