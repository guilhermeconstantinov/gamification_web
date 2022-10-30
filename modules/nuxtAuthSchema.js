import { LocalScheme } from '~auth/runtime'

export default class BackendScheme extends LocalScheme {
  async login(endpoint, { reset = true } = {}) {
    if (!this.options.endpoints.login) {
      return
    }

    if (reset) {
      this.$auth.reset({ resetInterceptor: false })
    }

    const _endpoint = {
      ...endpoint,
      data: {
        ...endpoint.data,
        grant_type: 'password',
        client_secret: process.env.NUXT_ENV_API_CLIENT_SECRET,
        client_id: process.env.NUXT_ENV_API_CLIENT_ID,
        scope: '*',
      },
    }

    const response = await this.$auth.request(
      _endpoint,
      this.options.endpoints.login
    )
    this.updateTokens(response)
    if (!this.requestHandler.interceptor) {
      this.initializeRequestInterceptor()
    }

    if (this.options.user.autoFetch) {
      await this.fetchUser(this.options.endpoints.user)
    }

    return response
  }
}
