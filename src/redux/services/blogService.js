import axios from "axios";
import { BACKEND_URL } from "./Helper";

const API_URL = `${BACKEND_URL}/blog/`;
const createBlog = async (formData) => {
  const response = await axios.post(API_URL, formData);
  return response.data;
};

const getAllBlog = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const getBlogBySlug = async (slug) => {
  const response = await axios.get(API_URL + slug);
  return response.data;
};

const getBlogById = async (id) => {
  const response = await axios.get(`${API_URL}/country-id/${id}`);
  return response.data;
};

const updateBlog = async (id, formData) => {
  const response = await axios.patch(`${API_URL}/${id}`, formData);
  return response.data;
};

const deleteBlog = async (id) => {
  const response = await axios.delete(API_URL + id);
  return response.data;
};

const BlogService = { createBlog, getAllBlog, getBlogBySlug, getBlogById, deleteBlog, updateBlog };

export default BlogService;
