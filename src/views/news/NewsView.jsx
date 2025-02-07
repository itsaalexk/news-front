import React from "react";
import { Spinner } from "react-bootstrap";
import { useGetAllNews } from "../../hooks/getAllNews";

import { NewContainer } from "../../components/NewContainer/NewContainer";

const NewsView = () => {
  const { data, loading, setPage, handleArchive, noData, handleDelete } =
    useGetAllNews();

  if (loading) {
    return <Spinner animation="border" />;
  }

  if (noData) {
    return (
      <h1 className="text-center mt-4">
        No hay noticias que mostrar en este momento. 😞
      </h1>
    );
  }

  return (
    <NewContainer
      pageTitle="Noticias Destacadas"
      data={data}
      onArchive={handleArchive}
      onDelete={handleDelete}
      setPage={setPage}
    />
  );
};

export default NewsView;
