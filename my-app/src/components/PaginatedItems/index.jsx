import React, { useState } from "react";
import { ReactPaginate } from 'react-paginate'

import styles from "./index.module.css";
export default function PaginatedItems({ itemsPerPage, items }) {

  const [itemOffset, setItemOffset] = useState(0)

  const endOffset = itemOffset + itemsPerPage
  const currentItems = items.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(items.length / itemsPerPage)

  const handlePageClick = event => {
    const newOffset = event.selected * itemsPerPage % items.length
    setItemOffset(newOffset)
  }
  return (
    <>
      <Items currentItems = {currentItems} />
      <ReactPaginate 
        breakLabel = '...'
        nextLabel = ' > '
        previousLabel = ' < '
        onPageChange = {handlePageClick}
        pageCount = {pageCount}
        renderOnZeroPageCount = {null}
      />
    </>
  );
}
