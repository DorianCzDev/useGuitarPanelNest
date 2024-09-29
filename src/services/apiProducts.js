import axios from "axios";
import { url as baseUrl } from "../utilities/url";

export async function getProductsApi(sortBy, name, page) {
  let url = `${baseUrl}/products`;
  if (page) {
    url = `${url}?page=${page}`;
  } else {
    url = `${url}?page=1`;
  }
  if (name) {
    url = `${url}&name=${name}`;
  }
  if (sortBy) {
    url = `${url}&sort=${sortBy}`;
  }

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function getProductApi(isEditing) {
  if (!isEditing) return null;

  let url = `${baseUrl}/products/panel/${isEditing}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function createProductApi(product) {
  let url = `${baseUrl}/products`;
  try {
    const response = await axios.post(url, product, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function updateProductApi(product) {
  let { id } = product;
  let url = `${baseUrl}/products/${id}`;
  console.log(product);
  try {
    const response = await axios.patch(url, product, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function deleteProductApi(product) {
  let { id } = product;
  let url = `${baseUrl}/products/${id}`;
  try {
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function changeProductInvenotryApi({
  isEditing: name,
  inventory,
  operation,
}) {
  let url = `${baseUrl}/products/inventory/${name}?quantity=${inventory}&operation=${operation}`;
  try {
    const response = await axios.patch(url);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
