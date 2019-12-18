import React, { Component } from "react"
import { Link } from "gatsby"

export default class Nav extends Component {
  state = {
    navOn: "hide",
    navItems: [
      {
        text: "home",
        linkTo: "/",
      },
      {
        text: "about",
        linkTo: "/about",
      },
      {
        text: "cash register",
        linkTo: "/register",
      },
    ],
  }

  navToggle = () => {
    if (this.state.navOn === "show") {
      this.setState({
        navOn: "hide",
      })
    } else {
      this.setState({
        navOn: "show",
      })
    }
  }

  renderNavItem = ({ text, linkTo }, i) => (
    <Link to={linkTo} activeClassName={"active"} className="nav-item">
      <li key={i}>{text}</li>
    </Link>
  )

  render() {
    const { navItems, navOn } = this.state
    const { title } = this.props

    return (
      <nav className="nav">
        <div className="title">
          <h1>
            <Link to="/">{title}</Link>
          </h1>
        </div>
        <ul className={navOn}>
          {navItems.map((navItem, i) => {
            return this.renderNavItem(navItem, i)
          })}
        </ul>
        <button className={`nav-btn ${navOn}`} onClick={this.navToggle}>
          <p>X</p>
        </button>
      </nav>
    )
  }
}
