import axios from "axios";
export default axios.create({
  baseURL: "https://employee-management-client.onrender.com/api",
  headers: {
    "Content-type": "application/json"
  }
});