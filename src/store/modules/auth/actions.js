export const types = {
  AUTH_LOGIN_REQUEST: 'AUTH_LOGIN_REQUEST',
  AUTH_LOGOUT_REQUEST: 'AUTH_LOGOUT_REQUEST',
}

export default {
  loginRequest({ user, password }) {
    return {
      type: types.AUTH_LOGIN_REQUEST,
      payload: { user, password }
    }
  },

  logoutRequest(token) {
    return {
      type: types.AUTH_LOGOUT_REQUEST,
      payload: { token }
    }
  }
}
