export default ($http) => ({
  async fetch(options) {
    const { data } = await $http.get('users', options)

    return data
  },

  async register(options) {
    const { data } = await $http.post('register', options)

    return data
  },

  async validationCode(options) {
    const { data } = await $http.post('validation-code', options)

    return data
  },

  async readValidationCode(options) {
    const { data } = await $http.post('read-validation-code', options)

    return data
  },

  async simulation(options) {
    const { data } = await $http.post('simulation', options)

    return data
  },

  async generateNumber(options) {
    const { data } = await $http.post('generate-number', options)

    return data
  },
})
