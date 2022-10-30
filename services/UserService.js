export default ($http) => ({
  async fetch(options) {
    const { data } = await $http.get('users', options)

    return data
  },

  async register(options) {
    const { data } = await $http.post('register', options)

    return data
  },
})
