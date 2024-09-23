import axios from "axios";
import { url as baseUrl } from "../utilities/url";

export async function getDeliveryMethodsApi() {
  const url = `${baseUrl}/delivery`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function createDeliveryMethodApi(data) {
  const url = `${baseUrl}/delivery`;
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function deleteDeliveryMethodApi(id) {
  const url = `${baseUrl}/delivery/${id}`;
  try {
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function getDeliveryMethodApi(isEditing) {
  if (!isEditing) return null;
  const url = `${baseUrl}/delivery/${isEditing}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function updateDeliveryMethodApi({ isEditing, data }) {
  const url = `${baseUrl}/delivery/${isEditing}`;
  try {
    const response = await axios.patch(url, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
