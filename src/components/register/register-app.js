import React, { Component } from "react"

import Menu from "./menu/menu"
import Illustrator from "./illustrator/illustrator"
import Receipt from "./receipt/receipt"

export default class RegisterApp extends Component {
  state = {}

  render() {
    return (
      <div>
        <Menu />
        <Illustrator />
      </div>
    )
  }
}
