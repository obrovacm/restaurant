import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import RegisterApp from "../components/register/register-app"

const Register = () => (
  <Layout>
    <SEO title="home" />
    <h1>Register simulator</h1>
    <p>RECEIPT: bip-bop</p>
    <hr />
    <RegisterApp />
  </Layout>
)

export default Register
