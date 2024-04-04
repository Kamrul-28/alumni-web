class LocalStore {
  store_map = {
    refresh_token: `${import.meta.env.VITE_LOCAL_DB_PREFIX}_refresh_token`,
    access_token: `${import.meta.env.VITE_LOCAL_DB_PREFIX}_access_token`,
  };

  constructor(key_) {
    this.key = this.store_map[key_];
  }

  setValue(value) {
    if (!value) {
      throw new Error("value cannot be empty or null");
    }
    localStorage.setItem(this.key, value);
  }
  getValue() {
    return localStorage.getItem(this.key);
  }

  clearValue() {
    localStorage.removeItem(this.key);
  }
}

export default LocalStore;
