import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { I18nextProvider } from 'react-i18next'

import AuthenticatedRoute from './AuthenticatedRoute'
import RestrictedRoute from './RestrictedRoute'
import RedirectRoute from './RedirectRoute'
import { history, store } from '../store'
import i18n from '../locales/i18n'

//Layout Component.
import AuthLayout from '../layouts/AuthLayout'

import Dashboard from '../views/dashboard/Dashboard'
import Login from '../views/auth/Login'
import NoMatch from '../views/error/404'

const routes = (
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <RedirectRoute exact path="/" redirectPath="/dashboard"/>
          <AuthenticatedRoute exact path="/dashboard" component={Dashboard} layout={AuthLayout}/>
          <RestrictedRoute exact path="/login" component={Login}/>

          <Route component={NoMatch}/>
        </Switch>
      </Router>
    </Provider>
  </I18nextProvider>
)

export default routes
