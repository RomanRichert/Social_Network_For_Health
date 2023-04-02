import React, { useState } from "react";
import ReactPaginate from 'react-paginate'
import Story from '../Story';
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
      {
        currentItems &&  currentItems.map(el => <Story key = {el.id} {...el} />)
      }
      <ReactPaginate 
        breakLabel = '...'
        nextLabel = ' > '
        previousLabel = ' < '
        onPageChange = {handlePageClick}
        pageCount = {pageCount}
        pageClassName = {styles.page_item}
        breakLinkClassName = {styles.page_link}
        containerClassName = {styles.pagination}
        activeClassName = {styles.active}
        renderOnZeroPageCount = {null}
      />
    </>
  );
}
