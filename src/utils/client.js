import Request from 'axios'
import Helpers from './helpers'

const client = () => {
  Request.defaults.baseURL = Helpers.getBaseApiUrl()

  const token = Helpers.getAccessToken()

  const headersDefault = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }

  const defaultOptions = token ? {
    headers: {
      Authorization: `Bearer ${token}`,
      ...headersDefault
    },
  } : {
    headers: {
      ...headersDefault
    }
  }

  // Add a Request
  Request.interceptors.request.use(
    config => config,
    error => Promise.reject(error),
  )

  // Add a response.
  Request.interceptors.response.use(
    response => response,
    error => Promise.reject(error),
  )

  return {
    get: (url, options = {}) => Request.get(url, {
      ...defaultOptions, ...options
    }),
    post: (url, data, options = {}) => Request.post(url, data, {
      ...defaultOptions, ...options
    }),
    put: (url, data, options = {}) => Request.put(url, data, {
      ...defaultOptions, ...options
    }),
    patch: (url, data, options = {}) => Request.patch(url, data, {
      ...defaultOptions, ...options
    }),
    delete: (url, options = {}) => Request.delete(url, {
      ...defaultOptions, ...options
    }),
  }
}

export default client
