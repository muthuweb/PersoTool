const storage = localStorage

export default {
  get(key) {
    return storage.getItem(key)
  },
  set(key, val) {
    return storage.setItem(key, val)
  },
  remove(key) {
    return storage.removeItem(key)
  },
  clear() {
    return storage.clear()
  }
}
