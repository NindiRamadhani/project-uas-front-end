import axios from "axios";

const api = axios.create({
  baseURL: "localhost:9000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;