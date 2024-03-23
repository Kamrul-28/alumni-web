import { createContext, useMemo, useReducer } from "react";

import TokenStore from "helpers/token-store";
import UserStore from "helpers/user-store";

export const Context = createContext();

export const SET_USER = "SET_USER";
export const SET_LOGIN = "SET_LOGIN";
export const SET_LOGOUT = "SET_LOGOUT";

const UserProvider = (props) => {
  const userStore = new UserStore();
  const tokenStore = new TokenStore("access");

  const saved_user = userStore.getUser();
  const saved_token = tokenStore.getToken();

  const initial_state = {
    user: saved_user,
    token: saved_token,
    is_login: Boolean(saved_token) ? true : false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case SET_LOGIN: {
        tokenStore.setToken(action.payload);
        return {
          ...state,
          is_login: true,
          token: action.payload,
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
        tokenStore.clearToken();
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
