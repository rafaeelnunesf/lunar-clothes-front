import axios from "axios";

const BASE_URL = "https://mock-api.driven.com.br/api/v2/trackit";

function postSignUp(data) {
  const response = axios.post(`${BASE_URL}/auth/signup`, data);
  return response;
}

function postSignIn(data) {
  const response = axios.post(`${BASE_URL}/auth/signin`, data);
  return response;
}

export { postSignUp, postSignIn };
