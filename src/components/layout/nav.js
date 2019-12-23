import React, { Component } from "react"
import { Link } from "gatsby"

import styles from "./nav.module.scss"

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

  navToggle = () => {
    this.setState({
      navOn: !this.state.navOn,
    })
  }

  renderNavItems = () => {
    return navItems.map(({ text, linkTo }, i) => (
      <Link
        key={i}
        to={linkTo}
        activeClassName={styles.active}
        className={styles.navItem}
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
      <nav className={styles.nav}>
        <div className={styles.title}>
          <h1>
            <Link to="/">{title}</Link>
          </h1>
        </div>
        <button
          className={`${styles.navBtn} ${navOn && styles.btnListOn}`}
          onClick={this.navToggle}
        >
          <p>O</p>
        </button>
        <ul className={`${styles.list} ${navOn && styles.listOn}`}>
          {navItemComponents}
        </ul>
      </nav>
    )
  }
}
