import apiRequest from "services/api-request";
import ENDPOINTS from "services/rest-endpoints";

export const attemptLogin = (data) =>
  apiRequest({
    method: "post",
    url: `${ENDPOINTS.AUTH}/login`,
    data: data,
  });

export const attemptLogout = (data) =>
  apiRequest({
    method: "post",
    url: `${ENDPOINTS.AUTH}/logout`,
    data: data,
  });

export const postRefreshToken = (data) =>
  apiRequest({
    method: "post",
    url: `${ENDPOINTS.AUTH}/refresh-token`,
    data: data,
  });

export const forgetPassword = (data) =>
  apiRequest({
    method: "post",
    url: `${ENDPOINTS.AUTH}/forget-password`,
    data: data,
  });

export const resetPassword = (data) =>
  apiRequest({
    method: "post",
    url: `${ENDPOINTS.AUTH}/reset-password`,
    data: data,
  });

export const createAccount = (data) =>
  apiRequest({
    method: "post",
    url: `/alumni`,
    data: data,
  });
