export default ($http) => ({
  async fetch(options) {
    const { data } = await $http.get('users', options)

    return data
  },
})
