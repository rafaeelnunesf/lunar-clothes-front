import axios from "axios";

// const BASE_URL = "https://lunar-clothes.herokuapp.com";
const BASE_URL = "http://localhost:5000";

function createConfig(token) {
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

function postBag(data) {
  return axios.post(`${BASE_URL}/mybag`, data);
}

function getBag(token) {
  return axios.get(`${BASE_URL}/mybag`);
}

function postAddress(data, token) {
  const config = createConfig(token);
  return axios.post(`${BASE_URL}/add-new-address`, data, config);
}
function postPaymentMethod(data, token) {
  const config = createConfig(token);
  return axios.post(`${BASE_URL}/add-new-payment-method`, data, config);
}
function getAddress(token) {
  const config = createConfig(token);
  return axios.get(`${BASE_URL}/add-new-address`, config);
}
function getPaymentMethod(token) {
  const config = createConfig(token);
  return axios.get(`${BASE_URL}/add-new-payment-method`, config);
}

const api = {
  getProducts,
  postSignUp,
  postSignIn,
  getSizes,
  postBag,
  getBag,
  postAddress,
  postPaymentMethod,
  getAddress,
  getPaymentMethod,
};

export default api;
