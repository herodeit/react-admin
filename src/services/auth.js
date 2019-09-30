import Client from '../utils/client'

/**
 * AuthService.
 */
class AuthService {
  login = (credentials) => {
    return Client().post('/login', credentials)
  }

  logout = () => {
    return Client().post('/logout')
  }
}

const instance = new AuthService()

Object.freeze(instance)

export default instance
