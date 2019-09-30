import React, { PureComponent } from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

class RestrictedRoute extends PureComponent {
  render() {
    const { Component, ...rest } = this.props
    const isAuthenticated = false

    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: '/top',
                state: { from: props.location }
              }}
            />
          ) : (
            <Component {...props}/>
          )
        }
      />
    )
  }
}

RestrictedRoute.propTypes = {
  Component: PropTypes.element,
}

export default RestrictedRoute
