import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NewsCard } from "../../components/NewsCard";
import { EachOf } from "../../utils/EachOf";

const newsItems = [
  {
    id: 1,
    titulo: "Última Hora: Ocurre Evento Importante",
    descripcion:
      "Un evento significativo ha tenido lugar que impactará a muchas personas...",
    fecha: "2023-05-15",
    contenido:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.",
    autor: "Juan Pérez",
    fechaArchivado: null,
    imagen: "https://dummyimage.com/300x200/000/fff&text=Noticia+Importante",
  },
  {
    id: 2,
    titulo: "Avance Tecnológico: Nueva Innovación Revelada",
    descripcion:
      "Científicos han hecho un descubrimiento revolucionario en el campo de...",
    fecha: "2023-05-14",
    contenido:
      "Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.",
    autor: "María García",
    fechaArchivado: "2023-05-16",
    imagen: "https://dummyimage.com/300x200/000/fff&text=Noticias+Tecnológicas",
  },
];
const NewsView = () => {
  return (
    <Container className="my-4">
      <h1 className="text-center mb-4">Latest News</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        <EachOf
          items={newsItems}
          render={(item) => (
            <NewsCard
              title={item.title}
              description={item.descripcion}
              image={item.imagen}
              content={item.contenido}
              author={item.autor}
              date={item.fecha}
              dateArchived={item.fechaArchivado}
            />
          )}
          WrapperComponent={Col}
        />
      </Row>
    </Container>
  );
};

export default NewsView;
