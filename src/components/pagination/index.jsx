import React, { useState } from "react";
import { Pagination } from "react-bootstrap";
import { useSearchParams } from "react-router";

const PaginationComponent = ({ totalPages, onPageChange }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) ?? 1;

  const handlePageClick = (pageNumber) => {
    setSearchParams({ page: pageNumber });
    onPageChange(pageNumber);
  };

  const renderPaginationItems = () => {
    const items = [];
    for (let i = 1; i <= totalPages; i++) {
      items.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </Pagination.Item>
      );
    }
    return items;
  };

  return (
    <div>
      <Pagination>
        <Pagination.Prev
          disabled={currentPage === 1}
          onClick={() => handlePageClick(currentPage - 1)}
        />
        {renderPaginationItems()}
        <Pagination.Next
          disabled={currentPage === totalPages}
          onClick={() => handlePageClick(currentPage + 1)}
        />
      </Pagination>
      <p>Pagina actual: {currentPage}</p>
    </div>
  );
};

export default PaginationComponent;
