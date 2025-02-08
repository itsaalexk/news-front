import { API_URL } from "../../config/config.js";

export async function createNews(news) {
  const response = await fetch(API_URL + `/createNews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(news),
  });
  return response.json();
}
