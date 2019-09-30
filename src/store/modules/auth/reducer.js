const initialState = {
  isAuthenticated: false,
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'AUTH_LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true
      }
    case 'AUTH_LOGIN_FAIL': {
      return {
        ...state,
        isAuthenticated: false
      }
    }
    default:
      return state
  }
}
