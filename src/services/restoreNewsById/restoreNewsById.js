import { API_URL } from "../../config/config";

export async function restoreNewsById(id) {
  const response = await fetch(API_URL + `/restoreNews/${id}`);
  const data = await response.json();
  return data;
}
