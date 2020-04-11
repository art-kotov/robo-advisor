import axios from "axios";

export const baseUrl = process.env.REACT_APP_API + "/api/v1";
export const domainUrl = process.env.REACT_APP_API;
const token = () => localStorage.getItem("token");

export const ax = axios.create({
  baseURL: baseUrl,
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
  delete config.headers.Authorization;
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

export const api = {
  account: {
    register: (data) =>
      ax({
        method: "POST",
        url: "/account/register/",
        data: data,
        remove_token: true,
      }),
    signIn: (data) =>
      ax({
        method: "POST",
        url: "/account/sign-in/",
        data: data,
        remove_token: true,
      }),
  },
};
