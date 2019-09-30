import React, { PureComponent } from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import AuthLayout from '../layouts/AuthLayout'

class AuthenticatedRoute extends PureComponent {
  render() {
    const { component: Component, ...rest } = this.props

    const isAuthenticated = true

    if (isAuthenticated) {
      return (
        <Route
          {...rest}
          render={props => (
            <AuthLayout>
              <Component {...props}/>
            </AuthLayout>
          )}
        />
      )
    }

    return (
      <Route {...rest} render={props => (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}/>
      )}/>
    )
  }
}

AuthenticatedRoute.propTypes = {
  Component: PropTypes.any,
}

export default AuthenticatedRoute
