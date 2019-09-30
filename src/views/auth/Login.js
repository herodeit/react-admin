import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'

class Login extends React.Component {
  render() {
    return (
      <div style={{height: '100vh'}}>
        <div className="page-content">
          <div className="content-wrapper">
            <div className="content d-flex justify-content-center align-items-center">

              <form className="login-form">
                <div className="card mb-0">
                  <div className="card-body">
                    <div className="text-center mb-3">
                      <img src={logo} alt="" className="logo-login"/>
                    </div>

                    <div className="form-group form-group-feedback form-group-feedback-left">
                      <input type="text" className="form-control" placeholder="Username"/>
                      <div className="form-control-feedback">
                        <i className="icon-user text-muted"/>
                      </div>
                    </div>

                    <div className="form-group form-group-feedback form-group-feedback-left">
                      <input type="password" className="form-control" placeholder="Password"/>
                      <div className="form-control-feedback">
                        <i className="icon-lock2 text-muted"/>
                      </div>
                    </div>

                    <div className="form-group d-flex align-items-center">

                      <div className="form-check mb-0">
                        <label className="form-check-label">
                          <div className="uniform-checker border-primary-600 text-primary-800">
                            <span className="checked">
                              <input type="checkbox" className="form-check-input-styled-primary" defaultChecked={false} data-fouc=""/>
                            </span>
                          </div>
                          Remember
                        </label>
                      </div>
                      <a href="#" className="ml-auto">Forgot password?</a>
                    </div>

                    <div className="form-group">
                      <button type="submit" onClick={(e) => { e.preventDefault();  this.props.history.push('/')}} className="btn btn-primary btn-block">Sign in <i
                        className="icon-circle-right2 ml-2"/></button>
                    </div>

                    <div className="form-group text-center text-muted content-divider">
                      <span className="px-2">Don't have an account?</span>
                    </div>

                    <div className="form-group">
                      <Link to="#" className="btn btn-light btn-block">Sign up</Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
