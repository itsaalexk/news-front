import { ArchiveIcon, TrashIcon } from "lucide-react";
import React, { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { parseDate } from "../../helpers/parseDate";
import { ModalComponent } from "../Modal/ModalComponent";

export function NewsCard({
  title,
  description,
  date,
  content,
  author,
  dateArchived,
  image,
  onArchive,
  onRestore,
  archived,
  onDelete,
}) {
  const [showModal, setShowModal] = useState(false);

  function handleDelete() {
    onDelete();
    setShowModal(false);
  }

  return (
    <>
      <Card className="h-100 shadow-sm w-100">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title className="font-weight-bold">{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <small>
              {parseDate(date)} | Por {author}
            </small>
          </Card.Subtitle>
          <Card.Text>{description}</Card.Text>
          <Card.Text>
            <small className="text-muted">
              {content.length > 100
                ? `${content.substring(0, 100)}...`
                : content}
            </small>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="bg-white border-top-0">
          <Row className="mt-2">
            <Col className="d-grid">
              <Button
                onClick={() => setShowModal(true)}
                variant="danger"
                size="sm"
              >
                <TrashIcon className="mr-2" /> Eliminar
              </Button>
            </Col>
            <Col className="d-grid">
              <Button
                onClick={archived ? onRestore : onArchive}
                variant="outline-secondary"
                size="sm"
              >
                <ArchiveIcon className="mr-2" />
                {archived ? "Restaurar" : "Archivar"}
              </Button>
            </Col>
          </Row>
          {archived && (
            <Row className="mt-2">
              <Col>
                <small className="text-muted">
                  Archivado el: {dateArchived}
                </small>
              </Col>
            </Row>
          )}
        </Card.Footer>
      </Card>
      {showModal && (
        <ModalComponent
          show={showModal}
          onDeleteConfirm={handleDelete}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}
