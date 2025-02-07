import { Container, Row } from "react-bootstrap";
import { EachOf } from "../../utils/EachOf";
import { NewsCard } from "../NewsCard";
import PaginationComponent from "../pagination";
import { ToastContainer } from "react-toastify";

export function NewContainer({
  pageTitle,
  data,
  onArchive,
  setPage,
  onRestore,
}) {
  console.log(data);
  return (
    <>
      <Container className="my-4">
        <h1 className="text-center mb-4">{pageTitle}</h1>
        <Row xs={1} md={2} lg={5} className="g-4">
          <EachOf
            items={data?.news}
            render={(item) => (
              <NewsCard
                onArchive={() => onArchive && onArchive(item?._id)}
                onRestore={() => onRestore && onRestore(item?._id)}
                title={item?.title}
                description={item?.description}
                image={item?.image}
                content={item?.content}
                author={item?.author}
                date={item?.date}
                dateArchived={item?.archiveDate}
                archived={item?.achieved}
              />
            )}
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
}
