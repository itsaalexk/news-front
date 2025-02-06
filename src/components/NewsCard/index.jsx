import { ArchiveIcon, TrashIcon } from "lucide-react";
import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

export function NewsCard({
  title,
  description,
  date,
  content,
  author,
  dateArchived,
  image,
  onArchive,
}) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="font-weight-bold">{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <small>
            {new Date(date).toLocaleDateString("es-ES")} | Por {author}
          </small>
        </Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Card.Text>
          <small className="text-muted">
            {content.length > 100 ? `${content.substring(0, 100)}...` : content}
          </small>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="bg-white border-top-0">
        <Row>
          <Col className="d-grid">
            <Button variant="outline-primary" size="sm">
              Leer Más
            </Button>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col className="d-grid">
            <Button variant="outline-danger" size="sm">
              <TrashIcon className="mr-2" /> Eliminar
            </Button>
          </Col>
          <Col className="d-grid">
            <Button onClick={onArchive} variant="outline-secondary" size="sm">
              <ArchiveIcon className="mr-2" /> Archivar
            </Button>
          </Col>
        </Row>
        {dateArchived && (
          <Row className="mt-2">
            <Col>
              <small className="text-muted">
                Archivado el:{" "}
                {new Date(dateArchived).toLocaleDateString("es-ES")}
              </small>
            </Col>
          </Row>
        )}
      </Card.Footer>
    </Card>
  );
}
