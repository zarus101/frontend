import axios from "axios";
import { BACKEND_URL } from "./Helper";

const API_URL = `${BACKEND_URL}/contact/`;
const createContact = async (contactData) => {
  const response = await axios.post(API_URL, contactData);
  return response.data;
};

const getAllContact = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const deleteContact = async (id) => {
  const response = await axios.delete(API_URL + id);
  return response.data;
};

const ContactService = { createContact, getAllContact, deleteContact };

export default ContactService;
