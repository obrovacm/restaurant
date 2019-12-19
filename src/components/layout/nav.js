import React, { Component } from "react"
import { Link } from "gatsby"

export default class Nav extends Component {
  state = {
    navOn: false,
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
    this.setState({
      navOn: !this.state.navOn,
    })
  }

  render() {
    const { navItems, navOn } = this.state
    const { title } = this.props

    const navOnClass = navOn ? "show" : ""

    const navItemComponents = navItems.map(({ text, linkTo }, i) => (
      <Link key={i} to={linkTo} activeClassName={"active"} className="nav-item">
        <li>{text}</li>
      </Link>
    ))

    return (
      <nav className="nav">
        <div className="title">
          <h1>
            <Link to="/">{title}</Link>
          </h1>
        </div>
        <ul className={navOnClass}>{navItemComponents}</ul>
        <button className={`nav-btn ${navOnClass}`} onClick={this.navToggle}>
          <p>X</p>
        </button>
      </nav>
    )
  }
}
