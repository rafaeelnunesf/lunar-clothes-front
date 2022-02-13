import axios from "axios";

// const BASE_URL = "https://lunar-clothes.herokuapp.com";
const BASE_URL = "http://localhost:5000";

function configToken(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
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

function postBag(data, token) {
  return axios.post(`${BASE_URL}/mybag`, data, configToken(token));
}

function getBag(token) {
  return axios.get(`${BASE_URL}/mybag`, configToken(token));
}

const api = {
  getProducts,
  postSignUp,
  postSignIn,
  getSizes,
  postBag,
  getBag,
};

export default api;
