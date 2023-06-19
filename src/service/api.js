import axios from "axios";

const BASE_URL = "https://dummyjson.com/comments";

axios.defaults.baseURL = BASE_URL;

export const getCommentsApi = () => {
  return axios.get().then((res) => res);
};
