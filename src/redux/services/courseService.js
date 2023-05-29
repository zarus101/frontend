import axios from "axios";
import { BACKEND_URL, myAxios } from "./Helper";

const API_URL = `${BACKEND_URL}/course/`;
const createCourse = async (formData) => {
  const response = await axios.post(API_URL, formData);
  return response.data;
};

const getAllCourse = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const getCourseBySlug = async (slug) => {
  const response = await myAxios.get(`/course/${slug}`);
  return response.data;
};

const getCourseById = async (id) => {
  const response = await myAxios.get(`/course/course-id/${id}`);
  return response.data;
};

const updateCourse = async (id, formData) => {
  const response = await myAxios.patch(`/course/${id}`, formData);
  return response.data;
};

const deleteCourse = async (id) => {
  const response = await axios.delete(API_URL + id);
  return response.data;
};

const CourseService = { createCourse, getAllCourse, getCourseBySlug, getCourseById, updateCourse, deleteCourse };

export default CourseService;
