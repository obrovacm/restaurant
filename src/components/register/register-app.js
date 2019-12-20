import React, { Component } from "react"

import Menu from "./menu/menu"
import Illustrator from "./illustrator/illustrator"
import Receipt from "./receipt/receipt"

export default class RegisterApp extends Component {
  state = {
    orders: [],
  }

  addOrder = newOrder => {
    this.setState({
      orders: [...this.state.orders, newOrder],
    })
    console.log("added order: ", newOrder)
  }

  render() {
    return (
      <>
        <Menu addOrder={this.addOrder} />
        <hr />
        <Receipt />
        <Illustrator />
      </>
    )
  }
}
