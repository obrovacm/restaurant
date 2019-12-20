import React, { Component } from "react"

export default class CurrentOrder extends Component {
  getTotalPrice = () => {
    const { order } = this.props
    return order.reduce((sum, item) => sum + item.price, 0)
  }

  renderItems = () => {
    const { order, removeOrder } = this.props
    return order.map((item, i) => (
      <p key={i} onClick={() => removeOrder(i)}>
        {item.name + " - " + item.price + " din."}
      </p>
    ))
  }

  render() {
    const renderItems = this.renderItems()
    const total = this.getTotalPrice()
    return (
      <>
        <div>{renderItems}</div>
        <hr />
        <div>{total}</div>
      </>
    )
  }
}
