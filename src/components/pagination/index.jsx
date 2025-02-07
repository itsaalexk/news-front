import React, { useEffect } from "react";
import { Pagination } from "react-bootstrap";
import { useSearchParams } from "react-router";

const PaginationComponent = ({ totalPages, onPageChange }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) ?? 1;

  useEffect(() => {
    if (!searchParams.get("page")) {
      setSearchParams({ page: 1 });
    }
  }, [searchParams, setSearchParams]);

  const handlePageClick = (pageNumber) => {
    if (pageNumber !== currentPage) {
      setSearchParams({ page: pageNumber });
      onPageChange(pageNumber);
    }
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
      <p>Página actual: {currentPage}</p>
    </div>
  );
};

export default PaginationComponent;
