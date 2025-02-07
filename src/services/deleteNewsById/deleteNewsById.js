import { API_URL } from "../../config/config";

export async function deleteNewsById(id) {
  const response = await fetch(API_URL + `/deleteNews/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data.status;
}
