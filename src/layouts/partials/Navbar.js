import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import logo_light from '../../assets/Template/global_assets/images/logo_light.png'
import logo_icon_light from '../../assets/Template/global_assets/images/logo_icon_light.png'
import logo_dark from '../../assets/Template/global_assets/images/logo_dark.png'
import placeholder from '../../assets/Template/global_assets/images/placeholders/placeholder.jpg'

class Navbar extends PureComponent {
  render() {
    return (
      <div className="navbar navbar-expand-md navbar-light navbar-static">

        <div className="navbar-header navbar-dark d-none d-md-flex align-items-md-center">
          <div className="navbar-brand navbar-brand-md">
            <Link to="#" className="d-inline-block">
              <img src={logo_light} alt=""/>
            </Link>
          </div>

          <div className="navbar-brand navbar-brand-xs">
            <Link to="#" className="d-inline-block">
              <img src={logo_icon_light} alt=""/>
            </Link>
          </div>
        </div>

        <div className="d-flex flex-1 d-md-none">
          <div className="navbar-brand mr-auto">
            <Link to="#" className="d-inline-block">
              <img src={logo_dark} alt=""/>
            </Link>
          </div>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-mobile">
            <i className="icon-tree5"/>
          </button>

          <button className="navbar-toggler sidebar-mobile-main-toggle" type="button">
            <i className="icon-paragraph-justify3"/>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbar-mobile">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="#" className="navbar-nav-link sidebar-control sidebar-main-toggle d-none d-md-block">
                <i className="icon-paragraph-justify3"/>
              </Link>
            </li>
          </ul>

          <span className="navbar-text ml-md-3 mr-md-auto"/>

          <ul className="navbar-nav">
            <li className="nav-item dropdown dropdown-user">
              <Link to="#" className="navbar-nav-link dropdown-toggle" data-toggle="dropdown">
                <img src={placeholder} className="rounded-circle" alt=""/>
                <span>Victoria</span>
              </Link>

              <div className="dropdown-menu dropdown-menu-right">
                <Link to="#" className="dropdown-item"><i className="icon-user-plus"/> My profile</Link>
                <Link to="#" className="dropdown-item"><i className="icon-coins"/> My balance</Link>
                <Link to="#" className="dropdown-item"><i className="icon-comment-discussion"/> Messages <span
                  className="badge badge-pill bg-indigo-400 ml-auto">58</span></Link>
                <div className="dropdown-divider"/>
                <Link to="#" className="dropdown-item"><i className="icon-cog5"/> Account settings</Link>
                <Link to="#" className="dropdown-item"><i className="icon-switch2"/> Logout</Link>
              </div>
            </li>
          </ul>
        </div>

      </div>
    )
  }
}

export default Navbar
