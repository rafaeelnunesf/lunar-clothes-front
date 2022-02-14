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

function postBag(data, token) {
  return axios.post(`${BASE_URL}/mybag`, data, createConfig(token));
}

function getBag(token) {
  return axios.get(`${BASE_URL}/mybag`, createConfig(token));
}

function deleteProduct(id, token) {
  return axios.delete(`${BASE_URL}/mybag/${id}`, createConfig(token));
}

function updateQuantityProduct(id, token, quantity) {
  return axios.put(
    `${BASE_URL}/mybag/${id}`,
    { quantity },
    createConfig(token)
  );
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

function deleteMyBagProducts(token) {
  return axios.delete(`${BASE_URL}/delete/checkout`, createConfig(token));
}

function sendEmail(token) {
  const config = createConfig(token);
  return axios.get(`${BASE_URL}/checkout`, config);
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
  deleteProduct,
  updateQuantityProduct,
  deleteMyBagProducts,
  sendEmail,
};

export default api;
