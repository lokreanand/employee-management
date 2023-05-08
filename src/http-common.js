import axios from "axios";
export default axios.create({
  baseURL: "https://employee-management-client1.onrender.com/api",
  headers: {
    "Content-type": "application/json"
  }
});