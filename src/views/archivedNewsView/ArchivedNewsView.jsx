import React from "react";
import { Spinner } from "react-bootstrap";
import { useGetAllNews } from "../../hooks/getAllNews";

import { NewContainer } from "../../components/NewContainer/NewContainer";

const AchivedNewsView = () => {
  const isArchived = true;
  const { data, loading, setPage, noData, handleRestore } =
    useGetAllNews(isArchived);

  if (loading) {
    return <Spinner animation="border" />;
  }

  if (noData) {
    return (
      <h1 className="text-center mt-4">
        No hay noticias archivadas que mostrar en este momento. 😞
      </h1>
    );
  }

  return (
    <NewContainer
      pageTitle="Noticias Archivadas"
      data={data}
      onRestore={(id) => handleRestore(id)}
      setPage={setPage}
    />
  );
};

export default AchivedNewsView;
