import axios from "axios";

const BASE_URL = "http://localhost:5000";

function postSignUp(data) {
  const response = axios.post(`${BASE_URL}/auth/signup`, data);
  return response;
}

function postSignIn(data) {
  const response = axios.post(`${BASE_URL}/auth/signin`, data);
  return response;
}

export { postSignUp, postSignIn };
