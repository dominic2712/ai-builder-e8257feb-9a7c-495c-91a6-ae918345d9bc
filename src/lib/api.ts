import axios from 'axios';

const API_URL = 'https://api.example.com';

export const fetchItems = async () => {
  const response = await axios.get(`${API_URL}/items`);
  return response.data;
};