import { API_URL } from "../../config/config";

export async function getAllNews(page) {
  const response = await fetch(API_URL + `/getAllNews?page=${page}`);
  const data = await response.json();
  return data;
}
