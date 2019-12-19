import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "../../styles/base.css"
import css from "./layout.module.scss"

import Nav from "./nav"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
          description
        }
      }
    }
  `)

  return (
    <div className={css.layout}>
      <Nav title={data.site.siteMetadata.title} />

      <div className={css.underNav}>
        <main className={css.pageContent}>{children}</main>
        <footer className={css.footer}>
          © {new Date().getFullYear()}, developed by
          {` `}
          <a href="https://www.milos.netlify.com">
            {data.site.siteMetadata.author}
          </a>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
