import axios from "axios";
import { BACKEND_URL } from "./Helper";

const API_URL = `${BACKEND_URL}/service/`;
const createService = async (formData) => {
  const response = await axios.post(API_URL, formData);
  return response.data;
};

const getAllService = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const getServiceBySlug = async (slug) => {
  const response = await axios.get(API_URL + slug);
  return response.data;
};

const getServiceById = async (id) => {
  const response = await axios.get(`${API_URL}/country-id/${id}`);
  return response.data;
};

const updateService = async (id, formData) => {
  const response = await axios.patch(`${API_URL}/${id}`, formData);
  return response.data;
};

const deleteService = async (id) => {
  const response = await axios.delete(API_URL + id);
  return response.data;
};

const ServiceService = { createService, getAllService, getServiceBySlug, getServiceById, updateService, deleteService };

export default ServiceService;
