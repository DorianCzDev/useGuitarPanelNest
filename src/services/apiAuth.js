import axios from "axios";
import { url as baseUrl } from "../utilities/url";

export async function loginUser(body) {
  try {
    const response = await axios.post(`${baseUrl}/auth/signin`, body);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function logoutUser() {
  try {
    const response = await axios.delete(`${baseUrl}/auth/signout`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function getCurrentUser() {
  try {
    const response = await axios.get(`${baseUrl}/users/whoami`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
