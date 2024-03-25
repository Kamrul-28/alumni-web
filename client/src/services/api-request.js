import { hasParam, isObject } from "utils/check";
import TokenStore from "helpers/token-store";

const formatErrorResponse = (error_response) => {
  if (isObject(error_response)) {
    const { value, message } = error_response || {};

    if (message.includes("=>") && message.includes("/n")) {
      const splited_parts = message.split("/n");
      const error_fields = {};

      for (let field_error of splited_parts) {
        const [field, error_value] = field_error.split("=>");

        if (!field && !error_value) continue;
        error_fields[field.trim()] = error_value.trim();
      }
      return { status_code: value, message: error_fields };
    }

    return { status_code: value, message: message };
  }
};

const apiRequest = async ({ method, url, params, data, timeout = 20 * 1000 }) => {
  const query_params = new URLSearchParams(params);

  const api_route = hasParam(params) ? `${url}?${query_params}` : url;
  const base_url = `${import.meta.env.VITE_SERVER_DOMAIN}${api_route}`;

  const tokenStore = new TokenStore("access");
  const access_token = tokenStore.getToken();

  const controller = new AbortController();
  const signal = controller.signal;

  const api_response = await fetch(base_url, {
    method: method,
    signal: signal,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${access_token}`,
    },
    body: JSON.stringify(data),
  });

  // const timout_id = setTimeout(() => controller.abort(), timeout);
  const response_data = await api_response.json();

  // clearTimeout(timout_id);

  if (api_response.ok) {
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.info("success", response_data);
    }
    return response_data;
  } else {
    const error_resoponse = formatErrorResponse(response_data);
    const error = new Error("An error occurred while interacting with api.");
    error.info = {
      status_code: error_resoponse.status_code || api_response.status,
      message: error_resoponse.message || api_response.statusText,
    };

    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.info("error", error.info);
    }
    return Promise.reject(error);
  }
};

export default apiRequest;
