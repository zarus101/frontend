import axios from "axios";
import { BACKEND_URL } from "./Helper";

const API_URL = `${BACKEND_URL}/faq/`;
const createFaq = async (faqData) => {
  const response = await axios.post(API_URL, faqData);
  return response.data;
};

const getAllFaq = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const getFaqById = async (slug) => {
  const response = await axios.get(API_URL + slug);
  return response.data;
};



const deleteFaq = async (id) => {
  const response = await axios.delete(API_URL + id);
  return response.data;
};

const FaqService = { createFaq, getAllFaq, getFaqById, deleteFaq };

export default FaqService;
