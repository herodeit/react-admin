import React from 'react'
import { Link } from "react-router-dom"

class Header extends React.PureComponent {
  render() {
    return (
      <div className="page-header page-header-light">
        <div className="page-header-content header-elements-md-inline">
          <div className="page-title d-flex">
            <h4>
              <i className="icon-arrow-left52 mr-2"/>
              <span className="font-weight-semibold">Home</span> - Dashboard
            </h4>
            <Link to="#" className="header-elements-toggle text-default d-md-none"><i className="icon-more"/></Link>
          </div>
        </div>

        <div className="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
          <div className="d-flex">
            <div className="breadcrumb">
              <Link to="#" className="breadcrumb-item"><i className="icon-home2 mr-2"/> Home</Link>
              <span className="breadcrumb-item active">Dashboard</span>
            </div>

            <Link to="#" className="header-elements-toggle text-default d-md-none"><i className="icon-more"/></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
