import React from "react"
import logo from "./dtnart_head.png"
import { Link } from "gatsby"
import "./style.css"

class Header extends React.Component {
  render() {
    const { location } = this.props

    // const blogLinkStyle = {
    //   paddingBottom: location.pathname === "/" ? `5px` : `0px`,
    //   boxShadow: location.pathname === "/" ? `0px 1px 0px 0px black` : `none`,
    // }

    // const contactLinkStyle = {
    //   paddingBottom: location.pathname === "/work" ? `5px` : `0px`,
    //   boxShadow:
    //     location.pathname === "/contact" ? `0px 1px 0px 0px black` : `none`,
    // }

    // const workLinkStyle = {
    //   paddingBottom: location.pathname === "/work" ? `5px` : `0px`,
    //   boxShadow:
    //     location.pathname === "/work" ? `0px 1px 0px 0px black` : `none`,
    // }
    // const aboutLinkStyle = {
    //   paddingBottom: location.pathname === "/about" ? `5px` : `0px`,
    //   boxShadow:
    //     location.pathname === "/about" ? `0px 1px 0px 0px black` : `none`,
    // }

    return (
      <div className="header-main">
        <Link className="logo-link" to={`/`}>
          <img src={logo} alt="22 Boxes logo" className="logo-img" />
        </Link>

        <div className="header-nav">
          <ul className="nav-ul">

            <li className="nav-li">
              <h1 className="li-h1">
                <Link className="li-link" to={`/`} activeStyle={{ color: "red" }}>
                  Work
                </Link>
              </h1>

              <h1 className="li-h1" >
                <Link className="li-link" to={`/about`} activeStyle={{ color: "red" }}>
                  About
                </Link>
              </h1>

              <h1 className="li-h1">
                <Link className="li-link" to={`/contact`} activeStyle={{ color: "red" }}>
                  Contact
                </Link>
              </h1>


            </li>


          </ul>
        </div>
      </div>
    )
  }
}

export default Header
