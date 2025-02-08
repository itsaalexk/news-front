import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "./validationSchema";
import { useGetAllNews } from "../../hooks/getAllNews";

export const CreateNews = () => {
  const { handleCreate } = useGetAllNews();
  const initialValues = {
    title: "",
    author: "",
    description: "",
    content: "",
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="mb-4 text-center">Crear Nueva Noticia</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values) => await handleCreate(values)}
          >
            {({ isValid, dirty }) => (
              <Form>
                <div className="row mb-3">
                  <div className="col-md-6">
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
                  <div className="col-md-6">
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

                <div className="mb-3 text-center">
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
