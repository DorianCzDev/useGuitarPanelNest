import axios from "axios";
import { url as baseUrl } from "../utilities/url";

export async function deleteProductImageApi({ product, image }) {
  const { name } = product;
  const { cloudinary_image_id } = image;
  const url = `${baseUrl}/products/image/${name}?public_id=${cloudinary_image_id}`;
  try {
    const response = await axios.delete(url);
    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
