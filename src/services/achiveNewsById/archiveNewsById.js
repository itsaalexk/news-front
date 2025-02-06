import { API_URL } from "../../config/config";

export async function achiveNewsById(id) {
  const response = await fetch(API_URL + `/archiveNews/${id}`);
  const data = await response.json();
  return data;
}
