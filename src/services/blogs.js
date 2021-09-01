import axios from "axios";
const baseUrl = "/api/blogs";

const getAll = async () => {
  const { data } = await axios.get(baseUrl);
  return data;
};
const login = async (credentials) => {
  const { data } = await axios.post(baseUrl, credentials);
};

export default { getAll, login };
