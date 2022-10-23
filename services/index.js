import UserService from '~/services/UserService'

export default ($http) => ({
  user: UserService($http),
})
