import React from 'react';
import ReelProduct from './ReelProduct';
import Pagination from './FeetPagination';
import './index.css';

function Main({ products, currentSelected, limit, pagingTotal }) {
  return (
    <div className='main'>
      <ReelProduct products={products} />
      <Pagination currentSelected={currentSelected} limit={limit} paging={pagingTotal} />
    </div>
  );
}

export default Main;
