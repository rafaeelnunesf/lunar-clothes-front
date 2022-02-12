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

function getSizes(id) {
  return axios.get(`${BASE_URL}/catalog/${id}`);
}

function postBag(data) {
  return axios.post(`${BASE_URL}/mybag`, data);
}

function getBag(token) {
  return axios.get(`${BASE_URL}/mybag`);
}

const api = {
  configToken,
  getProducts,
  postSignUp,
  postSignIn,
  getSizes,
  postBag,
  getBag,
};

export default api;
