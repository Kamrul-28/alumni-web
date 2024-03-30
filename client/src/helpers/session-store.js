class SessionStore {
  store_map = {
    access_token: `${import.meta.env.VITE_LOCAL_DB_PREFIX}_access_token`,
  };

  constructor(key_) {
    this.key = this.store_map[key_];
  }

  setValue(value) {
    if (!value) {
      throw new Error("value cannot be empty or null");
    }
    sessionStorage.setItem(this.key, value);
  }

  getValue() {
    return sessionStorage.getItem(this.key);
  }

  clearValue() {
    sessionStorage.removeItem(this.key);
  }
}

export default SessionStore;
