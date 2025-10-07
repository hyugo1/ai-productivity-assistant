// ai.js

import axios from 'axios';

const API_URL = "http://localhost:8000"; //backend URL

export const summarizeText = async (text) => {
  const res = await axios.post(`${API_URL}/summarize`, { text });
  return res.data.summary;
};

export const generateEmail = async (prompt) => {
  const res = await axios.post(`${API_URL}/generate-email`, { prompt });
  return res.data.email;
};