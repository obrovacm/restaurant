import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Nav from "./nav"
import "../../styles/base.css"
import "../../styles/main.scss"

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
    <div className="layout">
      <Nav title={data.site.siteMetadata.title} />

      <div className="under-nav">
        <main className="page-content">{children}</main>
        <footer className="footer">
          © {new Date().getFullYear()}, built by
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
