import { useEffect, useState } from "react";
import { getAllNews } from "../services/getAllNews";
import { achiveNewsById } from "../services/achiveNewsById/archiveNewsById";
import { launchToast } from "../utils/launchToast";
import { restoreNewsById } from "../services/restoreNewsById/restoreNewsById";

export function useGetAllNews(archived = false) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const noData = data?.news?.length === 0;

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const response = await getAllNews(page, archived);
      setData(response);
      setLoading(false);
    }
    getData();
  }, [page, archived]);

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

  return { data, loading, setPage, handleArchive, handleRestore, noData };
}
