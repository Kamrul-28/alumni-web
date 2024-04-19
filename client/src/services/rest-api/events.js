import apiRequest from "services/api-request";
import ENDPOINTS from "services/rest-endpoints";

export const getAllEvents = (params = {}) =>
  apiRequest({
    method: "get",
    url: ENDPOINTS.EVENTS,
    params: params,
  });

export const getEvent = (ID, params = {}) =>
  apiRequest({
    method: "get",
    url: `${ENDPOINTS.EVENTS}/${ID}`,
    params: params,
  });

export const postEvent = (data) =>
  apiRequest({
    method: "post",
    url: ENDPOINTS.EVENTS,
    data: data,
  });

export const patchEvent = (data) =>
  apiRequest({
    method: "patch",
    url: `${ENDPOINTS.EVENTS}/${data?.id}`,
    data: data,
  });
export const deleteEvent = (ID) =>
  apiRequest({
    method: "delete",
    url: `${ENDPOINTS.EVENTS}/${ID}`,
  });
