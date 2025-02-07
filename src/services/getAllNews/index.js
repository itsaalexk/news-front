import { API_URL } from "../../config/config";

export async function getAllNews(page, archived = false) {
  const queryParams = new URLSearchParams({
    page,
    ...(archived && { archived: true }),
  });

  const response = await fetch(`${API_URL}/getAllNews?${queryParams}`);
  return response.json();
}
