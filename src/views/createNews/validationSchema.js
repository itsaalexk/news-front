import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  title: Yup.string().required("El título es obligatorio"),
  author: Yup.string().required("El autor es obligatorio"),
  description: Yup.string().required("La descripción es obligatoria"),
  content: Yup.string().required("El contenido es obligatorio"),
});
