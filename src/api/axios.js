import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000", // তোমার backend যেই port এ চলছে
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
