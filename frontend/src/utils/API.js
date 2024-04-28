import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
export default axios.create({
  baseURL: `http://localhost:8000/api/`,
});