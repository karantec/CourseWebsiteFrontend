// src/api/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://coursewebsite-1.onrender.com",
  withCredentials: true, // important: include session cookie in requests
  // timeout: 10000,
});

export default api;
