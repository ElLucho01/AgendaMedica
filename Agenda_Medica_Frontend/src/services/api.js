import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8081/api",
});

api.defaults.headers.common["Authorization"] =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbl90ZXN0Iiwicm9sZXMiOlsiUk9MRV9BRE1JTiJdLCJpYXQiOjE3ODMwNjAzNTIsImV4cCI6MTc4MzE0Njc1Mn0.XYUpm9-x8QwGAQ__cf6BISqIzdvZjhMctXb1vlP_UDw";

export default api;