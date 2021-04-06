import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080/api";
axios.defaults.withCredentials = true;
export default axios;