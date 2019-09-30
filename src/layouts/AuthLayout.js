import React, { PureComponent, Fragment } from 'react'

import Navbar from './partials/Navbar'
import SideBar from './partials/SideBar'
import Footer from './partials/Footer'
import Header from './partials/Header'

class AuthLayout extends PureComponent {
  render() {
    return (
      <Fragment>
        <Navbar/>

        <div className="page-content">
          <SideBar/>

          <div className="content-wrapper">
            <Header/>
            <div className="content">
              {this.props.children}
            </div>
            <Footer/>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default AuthLayout
