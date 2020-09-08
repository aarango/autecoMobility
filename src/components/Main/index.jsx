import React from 'react';
import ReelProduct from './ReelProduct';
import Pagination from './FeetPagination';
import './index.css';

function Main({ products, limit, pagingTotal }) {
  return (
    <div className='main'>
      <ReelProduct products={products} />
      <Pagination limit={limit} paging={pagingTotal} />
    </div>
  );
};

export default Main;
