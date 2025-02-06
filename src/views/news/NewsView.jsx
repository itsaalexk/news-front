import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { NewsCard } from "../../components/NewsCard";
import { EachOf } from "../../utils/EachOf";
import { useGetAllNews } from "../../hooks/getAllNews";
import PaginationComponent from "../../components/pagination";
import { ToastContainer } from "react-toastify";

const NewsView = () => {
  const { data, loading, setPage, handleArchive, noData } = useGetAllNews();

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
    <>
      <Container className="my-4">
        <h1 className="text-center mb-4">Noticias Destacadas</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
          <EachOf
            items={data?.news}
            render={(item) => (
              <NewsCard
                onArchive={() => handleArchive(item?._id)}
                title={item?.title}
                description={item?.description}
                image={item?.image}
                content={item?.content}
                author={item?.author}
                date={item?.date}
                dateArchived={item?.fechaArchivado}
              />
            )}
            WrapperComponent={Col}
          />
        </Row>
      </Container>
      {data?.totalPages.length > 0 && (
        <PaginationComponent
          totalPages={data?.totalPages}
          onPageChange={setPage}
        />
      )}
      <ToastContainer />
    </>
  );
};

export default NewsView;
