import { useEffect, useState } from "react";
import { getAllNews } from "../services/getAllNews";
import { achiveNewsById } from "../services/achiveNewsById/archiveNewsById";
import { launchToast } from "../utils/launchToast";

export function useGetAllNews() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const noData = data?.news?.length === 0;

  useEffect(() => {
    async function getData() {
      const response = await getAllNews(page);
      setData(response);
      setLoading(false);
    }
    getData();
  }, [page]);

  async function handleArchive(id) {
    const status = await achiveNewsById(id);
    if (status.archivedNews.achieved === true) {
      launchToast("success", "Noticia archivada correctamente");
      const response = await getAllNews(1);
      setData(response);
      return;
    }
    launchToast("No se pudo archivar la noticia");
  }

  return { data, loading, setPage, handleArchive, noData };
}
