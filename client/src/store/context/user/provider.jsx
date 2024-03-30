import { createContext, useMemo, useReducer } from "react";

import TokenStore from "helpers/token-store";
import UserStore from "helpers/user-store";

export const Context = createContext();

export const SET_USER = "SET_USER";
export const SET_LOGIN = "SET_LOGIN";
export const SET_LOGOUT = "SET_LOGOUT";
export const SET_TOKEN = "SET_TOKEN";

const UserProvider = (props) => {
  const userStore = new UserStore();
  const accessTokenStore = new TokenStore("access");
  const refreshTokenStore = new TokenStore("refresh");

  const saved_user = userStore.getUser();
  const saved_token = accessTokenStore.getToken();

  const initial_state = {
    user: saved_user,
    is_login: Boolean(saved_token) ? true : false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case SET_LOGIN: {
        accessTokenStore.setToken(action.payload?.token);
        refreshTokenStore.setToken(action.payload?.refreshToken);
        return {
          ...state,
          is_login: true,
        };
      }
      case SET_USER: {
        userStore.setUser(action.payload);
        return {
          ...state,
          user: action.payload,
        };
      }
      case SET_LOGOUT: {
        refreshTokenStore.clearToken();
        accessTokenStore.clearToken();
        userStore.clearUser();

        return {
          ...state,
          user: null,
          is_login: false,
        };
      }
      default:
        throw new Error(`Action is not supported: ${action.type}`);
    }
  };

  const [state, dispatch] = useReducer(reducer, initial_state);
  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <Context.Provider value={value} {...props} />;
};

export default UserProvider;
