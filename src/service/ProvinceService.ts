// apiService.js
import axios from "axios";

const API_BASE_URL = "https://vapi.vnappmob.com"; // Replace with your API base URL

const apiService = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
/*
  BachHH2
  Get data from API
  7/3/2023
*/
export const getProvince = async (endpoint, params = {}) => {
  try {
    const response = await apiService.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error("API Request Failed:", error);
    throw error;
  }
};
export const getDistrict = async (endpoint, params = {}) => {
  try {
    const response = await apiService.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error("API Request Failed:", error);
    throw error;
  }
};
/*
  BachHH2
  Post data API
  7/3/2023
*/
export const postData = async (endpoint, data) => {
  try {
    const response = await apiService.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("API Request Failed:", error);
    throw error;
  }
};
/*
  BachHH2
  Put data API
  7/3/2023
*/
export const updateData = async (endpoint, data) => {
  try {
    const response = await apiService.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("API Request Failed:", error);
    console.log("Error Response:", error.response);
    throw error;
  }
};
