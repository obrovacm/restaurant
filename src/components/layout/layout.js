import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "../../styles/base.css"
import styles from "./layout.module.scss"

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
    <div className={styles.layout}>
      <Nav title={data.site.siteMetadata.title} />

      <div className={styles.underNav}>
        <main className={styles.pageContent}>{children}</main>
        <footer className={styles.footer}>
          © {new Date().getFullYear()}, developed by
          {` `}
          <a href="https://milos.netlify.com/">
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
