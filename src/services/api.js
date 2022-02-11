import axios from "axios";

const BASE_URL = "https://lunar-clothes.herokuapp.com";

function configToken(token) {
  const headers = { headers: { Authorization: `Bearer ${token}` } };
  return headers;
}
function getProducts(token) {
  console.log(configToken(token));
  return axios.get(`${BASE_URL}/catalog`);
}

export default { getProducts };
