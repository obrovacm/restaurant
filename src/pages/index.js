import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="home" />
    <h1>Welcome to my restaurant practice app!</h1>
    <p>I created this web-app in order to practice my React.js skills.</p>
    <p>
      The goal was to simulate a <b>cash register</b> interface that waiters in
      modern restaurants use.
    </p>
    <p>
      This kind of application can be implemented in any kind of website that's
      promoting a company or a small business. All selling products could be
      shown this way in order to easily provide basic information to the
      potential costumer.
    </p>
    <p>
      Additionally, this app could be improved to send actual orders to the
      store and to charge costumers on spot.
    </p>
    <p>
      Take a look around. Click on the big <b>O</b> in the top right corner.
    </p>
  </Layout>
)

export default IndexPage
