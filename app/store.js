module.exports = {
  get: function get (key) {
    JSON.parse(window.localStorage.getItem(key))
  },
  set: function set (key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
}
