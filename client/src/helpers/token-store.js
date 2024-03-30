import LocalStore from "./local-store";
// import SessionStore from "./session-store";

class TokenStore {
  store_map = {
    access: new LocalStore("access_token"),
    refresh: new LocalStore("refresh_token"),
  };

  constructor(key_) {
    this.obj = this.store_map[key_];
  }

  setToken(token) {
    if (!token) {
      throw new Error("Token cannot be empty or null");
    }
    this.obj.setValue(token);
  }
  getToken() {
    return this.obj.getValue();
  }

  clearToken() {
    return this.obj.clearValue();
  }
}

export default TokenStore;
