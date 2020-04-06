import axios from "axios";

export const baseUrl = process.env.API + "/api/v1";
export const domainUrl = process.env.API;
const token = () => localStorage.getItem("token");

export const ax = axios.create({
  baseURL: process.env.API + "/api/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: `JWT ${token()}`,
  },
});

ax.interceptors.request.use(function (config) {
  if (config.remove_token) {
    delete config.headers.Authorization;
  } else {
    config.headers.Authorization = `JWT ${token()}`;
  }
  return config;
});

ax.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      localStorage.clear();
      window.location.reload();
    }
    return error.response;
  }
);

export const api = {};
