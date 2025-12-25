// src/api/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://coursewebsite-1.onrender.com",
  withCredentials: true,
});

export default api;
