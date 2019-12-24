import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

export default () => (
  <Layout>
    <SEO title="about" />
    <h1>About me</h1>
    <p>I'm a self-taught software developer from Novi Sad, Serbia.</p>
    <p>
      I'm trying to learn and practice programming on a daily basis. This app is
      marking a year since I started my first programming steps at{" "}
      <a href="https://www.freecodecamp.org/">
        <b>freeCodeCamp</b>
      </a>
      , although I did have a several months break due to unpredicted life
      situations.
    </p>
    <p>
      If you'd like to cooperate on some project, feel free to{" "}
      <a href="https://milos.netlify.com/">
        <b>contact me</b>
      </a>
      .
    </p>
  </Layout>
)
