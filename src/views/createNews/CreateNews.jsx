import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";

// Definimos el esquema de validación aquí mismo para asegurarnos de que esté disponible
const validationSchema = Yup.object().shape({
  title: Yup.string().required("El título es obligatorio"),
  author: Yup.string().required("El autor es obligatorio"),
  description: Yup.string().required("El resumen es obligatorio"),
  content: Yup.string().required("El contenido es obligatorio"),
});

export const CreateNews = () => {
  const initialValues = {
    title: "",
    author: "",
    description: "",
    content: "",
  };

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
    console.log("Enviando datos al backend...");
    setSubmitting(false);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="mb-4">Crear Nueva Noticia</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isValid, dirty, errors, touched }) => (
              <Form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Título de la Noticia
                  </label>
                  <Field type="text" name="title" className="form-control" />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="author" className="form-label">
                    Autor
                  </label>
                  <Field type="text" name="author" className="form-control" />
                  <ErrorMessage
                    name="author"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Resumen de la Noticia
                  </label>
                  <Field
                    as="textarea"
                    name="description"
                    className="form-control"
                    rows="3"
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="content" className="form-label">
                    Contenido de la Noticia
                  </label>
                  <Field
                    as="textarea"
                    name="content"
                    className="form-control"
                    rows="5"
                  />
                  <ErrorMessage
                    name="content"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="mb-3">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={!(isValid && dirty)}
                  >
                    Publicar Noticia
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          <div className="mt-4 alert alert-info">
            Nota: La imagen principal de la noticia se generará automáticamente
            desde el backend.
          </div>
        </div>
      </div>
    </div>
  );
};
