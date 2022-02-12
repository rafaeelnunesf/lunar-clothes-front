import axios from "axios";

// const BASE_URL = "https://lunar-clothes.herokuapp.com";
const BASE_URL = "http://localhost:5000";

function configToken(token) {
  const headers = { headers: { Authorization: `Bearer ${token}` } };
  return headers;
}
function getProducts() {
  return axios.get(`${BASE_URL}/catalog`);
}

function postSignUp(data) {
  return axios.post(`${BASE_URL}/auth/signup`, data);
}

function postSignIn(data) {
  return axios.post(`${BASE_URL}/auth/signin`, data);
}

export { postSignUp, postSignIn, getProducts };
