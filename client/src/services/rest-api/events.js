import apiRequest from "services/api-request";
import ENDPOINTS from "services/rest-endpoints";

export const totalEvents = (params = {}) =>
  apiRequest({
    method: "get",
    url: ENDPOINTS.EVENTS,
    params: params,
  });

export const eventDetails = (ID, params = {}) =>
  apiRequest({
    method: "get",
    url: `${ENDPOINTS.EVENTS}/${ID}`,
    params: params,
  });

export const creatEvent = (data) =>
  apiRequest({
    method: "post",
    url: ENDPOINTS.EVENTS,
    data: data,
  });

export const updateEvent = (data) =>
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
