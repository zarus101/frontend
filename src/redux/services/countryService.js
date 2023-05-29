import axios from "axios";
import { BACKEND_URL } from "./Helper";

const API_URL = `${BACKEND_URL}/country/`;
const createCountry = async (formData) => {
  const response = await axios.post(API_URL, formData);
  return response.data;
};

const getAllCountry = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const getCountryBySlug = async (slug) => {
  const response = await axios.get(API_URL + slug);
  return response.data;
};

const getCountryById = async (id) => {
  const response = await axios.get(`${API_URL}/country-id/${id}`);
  return response.data;
};

const updateCountry = async (id, formData) => {
  const response = await axios.patch(`${API_URL}/${id}`, formData);
  return response.data;
};

const deleteCountry = async (id) => {
  const response = await axios.delete(API_URL + id);
  return response.data;
};

const CountryService = { createCountry, getAllCountry, getCountryBySlug, getCountryById, updateCountry, deleteCountry };

export default CountryService;
