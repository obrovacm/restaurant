import React, { Component } from "react"
import { Link } from "gatsby"

import css from "./nav.module.scss"

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
        activeClassName={css.active}
        className={css.navItem}
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
      <nav className={css.nav}>
        <div className={css.title}>
          <h1>
            <Link to="/">{title}</Link>
          </h1>
        </div>
        <ul className={`${css.list} ${navOn && css.listOn}`}>
          {navItemComponents}
        </ul>
        <button
          className={`${css.navBtn} ${navOn && css.btnListOn}`}
          onClick={this.navToggle}
        >
          <p>{navOn ? "X" : "O"}</p>
        </button>
      </nav>
    )
  }
}
