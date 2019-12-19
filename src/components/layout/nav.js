import React, { Component } from "react"
import { Link } from "gatsby"

import navCss from "./nav.module.scss"

const navItems = [
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
]

export default class Nav extends Component {
  state = {
    navOn: false,
  }

  navToggle = event => {
    this.setState({
      navOn: !this.state.navOn,
    })
  }

  renderNavItems = () => {
    return navItems.map(({ text, linkTo }, i) => (
      <Link
        key={i}
        to={linkTo}
        activeClassName={navCss.active}
        className={navCss.navItem}
      >
        <li>{text}</li>
      </Link>
    ))
  }

  render() {
    const { navOn } = this.state
    const { title } = this.props

    const navItemComponents = this.renderNavItems()

    return (
      <nav className={navCss.nav}>
        <div className={navCss.title}>
          <h1>
            <Link to="/">{title}</Link>
          </h1>
        </div>
        <ul className={`${navCss.list} ${navOn && navCss.listOn}`}>
          {navItemComponents}
        </ul>
        <button
          className={`${navCss.navBtn} ${navOn && navCss.btnListOn}`}
          onClick={this.navToggle}
        >
          <p>{navOn ? "X" : "O"}</p>
        </button>
      </nav>
    )
  }
}
