import apiRequest from "services/api-request";
import ENDPOINTS from "services/rest-endpoints";

export const getAllMenus = (params = {}) =>
  apiRequest({
    method: "get",
    url: ENDPOINTS.MENUS,
    params: params,
  });

export const getMenu = (ID, params = {}) =>
  apiRequest({
    method: "get",
    url: `${ENDPOINTS.MENUS}/${ID}`,
    params: params,
  });

export const postMenu = (data) =>
  apiRequest({
    method: "post",
    url: ENDPOINTS.MENUS,
    data: data,
  });

export const patchMenu = (data) =>
  apiRequest({
    method: "patch",
    url: `${ENDPOINTS.MENUS}/${data?.id}`,
    data: data,
  });
export const deleteMenu = (ID) =>
  apiRequest({
    method: "delete",
    url: `${ENDPOINTS.MENUS}/${ID}`,
  });
