import axios from "axios";

const dummyJson = axios.create({
  baseURL: "https://dummyjson.com/",
});

export default dummyJson;
