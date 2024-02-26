import apiRequest from "services/api-request";
import ENDPOINTS from "services/rest-endpoints";

export const attemptLogin = (data) =>
  apiRequest({
    method: "post",
    url: `${ENDPOINTS.AUTH}`,
    data: data,
  });

export const createAccount = (data) =>
  apiRequest({
    method: "post",
    url: `/alumni`,
    data: data,
  });
