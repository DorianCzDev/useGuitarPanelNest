import axios from "axios";
import { url as baseUrl } from "../utilities/url";
export async function getReportedReviewsApi(page) {
  let url = `${baseUrl}/reviews`;
  if (page) {
    url = `${url}?page=${page}`;
  } else {
    url = `${url}?page=1`;
  }
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function deleteReportedReviewApi(id) {
  const url = `${baseUrl}/reviews/${id}`;
  try {
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function deleteReviewFromReportedApi(id) {
  const url = `${baseUrl}/reviews/${id}`;
  try {
    const response = await axios.patch(url);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
