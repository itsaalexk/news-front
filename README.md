# Prueba Técnica: Aplicación de Noticias en React

Este proyecto consiste en una aplicación de noticias en React. Los usuarios pueden interactuar con las noticias a través de varias funcionalidades: archivar, eliminar y crear nuevas noticias. Además, el componente permite subir imágenes a través de un back-end y cuenta con varios tests para asegurar su correcto funcionamiento.

## Funcionalidades

### 1. **Página de Noticias**

- Se muestra una lista de noticias con sus respectivos títulos, descripciones e imágenes.
- Los botones de cada noticia permiten:
  - **Archivar**: Cuando el usuario pulsa el botón "Archivar", la noticia se mueve a una sección de "archivados".
  - **Eliminar**: Cuando el usuario pulsa el botón "Eliminar", la noticia se elimina completamente de la base de datos.

### 2. **Página para Crear Noticias**

- Los usuarios pueden crear nuevas noticias a través de un formulario.
- **Campos del formulario**:
  - Título
  - Descripción
  - Imagen (Actualmente gestionada por el back-end)
- Al crear una nueva noticia, esta se añade a la página principal de noticias.

### 3. **Página de Noticias Archivadas**

- Se muestra una lista con las noticias que han sido archivadas por el usuario.

### 4. **Subida de Imágenes**

- La subida de imágenes ahora es gestionada por el back-end, lo que permite a los usuarios añadir imágenes sin necesidad de realizar la carga desde el front-end.

## Despliegue del Frontend

La aplicación frontend está desplegada en Vercel. Puedes acceder a ella en el siguiente enlace:

[Frontend Desplegado en Vercel](https://news-front-theta.vercel.app/)

## Instrucciones para Levantar el Proyecto

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/news-frontend.git
   cd news-frontend
   ```
2. **Agregar la siguiente variable de entorno dentro del ENV**
   ```bash
   VITE_API_URL=https://secret-lil-alex-itsaalex-5dd72c8d.koyeb.app/api
   ```
