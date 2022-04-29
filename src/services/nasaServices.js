import axios from "axios";

const baseUrl = process.env.REACT_APP_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export const getImage = (date) =>
  axios.get(`${baseUrl}?api_key=${apiKey}&date=${date}`);
