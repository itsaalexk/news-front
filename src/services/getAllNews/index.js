import { API_URL } from "../../config/config";

export async function getAllNews(page, archived = false, searchQuery = "") {
  console.log(searchQuery);
  const queryParams = new URLSearchParams({
    page,
    ...(archived && { archived: true }),
    ...(searchQuery && { q: searchQuery }),
  });

  const response = await fetch(`${API_URL}/getAllNews?${queryParams}`);
  return response.json();
}
