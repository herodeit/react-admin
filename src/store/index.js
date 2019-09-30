import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'

import rootReducers from './rootReducer'
import rootSagas from './rootSaga'
import Helper from '../utils/helpers'

// Create a history of your choosing (we're using a browser history in this case).
const browserHistory = createBrowserHistory()

// create the saga middleware.
const sagaMiddleware = createSagaMiddleware()

const middleware = [routerMiddleware(browserHistory), sagaMiddleware]

let enhancers = compose

if (Helper.env('NODE_ENV') === 'development' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
}

const composedEnhancers = enhancers(
  applyMiddleware(...middleware),
)

export const store = createStore(rootReducers, composedEnhancers)
export const history = syncHistoryWithStore(browserHistory, store)

sagaMiddleware.run(rootSagas)

