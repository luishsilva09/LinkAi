import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000",
});
console.log("process", process.env.REACT_APP_BASE_URL);
export default instance;
