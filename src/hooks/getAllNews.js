import { useEffect, useState } from "react";
import { getAllNews } from "../services/getAllNews";
import { useNavigate, useSearchParams } from "react-router";
import { achiveNewsById } from "../services/achiveNewsById/archiveNewsById";
import { launchToast } from "../utils/launchToast";
import { restoreNewsById } from "../services/restoreNewsById/restoreNewsById";
import { deleteNewsById } from "../services/deleteNewsById/deleteNewsById";
import { createNews } from "../services/createNews/createNews";

export function useGetAllNews(archived = false) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const noData = data?.news?.length === 0;
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q");

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const response = await getAllNews(page, archived, searchQuery);
      setData(response);
      setLoading(false);
    }
    getData();
  }, [page, archived, searchQuery]);

  async function handleArchive(id) {
    const status = await achiveNewsById(id);
    if (status.archivedNews.achieved === true) {
      launchToast("success", "Noticia archivada correctamente");
      const response = await getAllNews(1, archived);
      setData(response);
      return;
    }
    launchToast("error", "No se pudo archivar la noticia");
  }

  async function handleRestore(id) {
    const status = await restoreNewsById(id);
    if (status.archivedNews.achieved === false) {
      launchToast("success", "Noticia restaurada correctamente");
      const response = await getAllNews(1, archived);
      setData(response);
      return;
    }
    launchToast("error", "No se pudo restaurar la noticia");
  }

  async function handleDelete(id) {
    const deleteStatus = await deleteNewsById(id);
    if (deleteStatus === 200) {
      launchToast("success", "Noticia eliminada correctamente");
      const response = await getAllNews(1, archived);
      setData(response);
      return;
    }
  }

  async function handleCreate(news) {
    const response = await createNews(news);
    if (response.status === 201) {
      launchToast("success", "Noticia creada correctamente");
      const response = await getAllNews(1, archived);
      setData(response);
      navigate("/news");
      return;
    }
    launchToast("error", "No se pudo crear la noticia");
  }

  return {
    data,
    loading,
    setPage,
    handleArchive,
    handleRestore,
    noData,
    handleDelete,
    handleCreate,
  };
}
