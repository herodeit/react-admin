import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import authReducer from './modules/auth/reducer'

export default combineReducers({
  auth: authReducer,
  routing: routerReducer,
  form: formReducer,
})
