import axios from "axios";

export const useFetch = async (url, params) => {
  console.log(params);
  return await axios.get(url, { params });
};
