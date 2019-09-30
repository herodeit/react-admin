import { call, put, fork, takeLatest } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import AuthService from '../../../services/auth'

function* login(action) {
  try {
    yield call(AuthService.login)
  } catch (e) {
    yield put(push('/'))
  }
}

function* logout(action) {
  try {
    yield call(AuthService.logout)
  } catch (e) {
    yield put(push('/'))
  }
}

function* watchAuthRequest() {
  yield takeLatest('AUTH_LOGIN_REQUEST', login)
  yield takeLatest('AUTH_LOGOUT_REQUEST', logout)
}

export default [
  fork(watchAuthRequest)
]
