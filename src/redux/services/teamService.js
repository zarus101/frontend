import axios from "axios";
import { BACKEND_URL } from "./Helper";

const API_URL = `${BACKEND_URL}/team/`;
const createTeam = async (formData) => {
  const response = await axios.post(API_URL, formData);
  return response.data;
};

const getAllTeam = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const getTeamBySlug = async (slug) => {
  const response = await axios.get(API_URL + slug);
  return response.data;
};

const getTeamById = async (id) => {
  const response = await axios.get(`${API_URL}/country-id/${id}`);
  return response.data;
};

const updateTeam = async (id, formData) => {
  const response = await axios.patch(`${API_URL}/${id}`, formData);
  return response.data;
};

const deleteTeam = async (id) => {
  const response = await axios.delete(API_URL + id);
  return response.data;
};

const TeamService = { createTeam, getAllTeam, getTeamBySlug, getTeamById, updateTeam, deleteTeam};

export default TeamService;
