import _ from 'lodash'

/**
 * Helpers Class.
 */
class Helpers {
  getAccessToken = () => {
    return localStorage.getItem('access_token') || null
  }

  getBaseApiUrl = () => {
    return process.env.REACT_APP_BASE_API_URL || 'http://localhost/api'
  }

  getAppEnv = () => {
    return process.env.NODE_ENV || 'development'
  }

  env = (key, valueDefault = null) => {
    return _.get(process.env, key, valueDefault)
  }
}

const instance = new Helpers()

Object.freeze(instance)

export default instance
