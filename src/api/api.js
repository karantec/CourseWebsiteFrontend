// src/api/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true, // important: include session cookie in requests
  // timeout: 10000,
});

export default api;
