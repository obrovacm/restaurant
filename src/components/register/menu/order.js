import React, { Component } from "react"

import styles from "./order.module.scss"

export default class CurrentOrder extends Component {
  getTotalPrice = () => {
    const { order } = this.props
    return order.reduce((sum, item) => sum + item.price, 0)
  }

  renderItems = () => {
    const { order, removeOrder } = this.props
    return order.map((item, i) => (
      <div className={styles.sameRow} key={i} onClick={() => removeOrder(i)}>
        <div>{item.name}</div>
        <div>{item.price}</div>
      </div>
    ))
  }

  render() {
    const renderItems = this.renderItems()
    const total = this.getTotalPrice()
    return (
      <>
        <div className={styles.sameRow}>
          <div>items:</div>
          <div>price [din.]</div>
        </div>
        <div>{renderItems}</div>
        <hr />
        <div className={styles.sameRow}>
          <button>submit</button>
          <div>{total}</div>
        </div>
      </>
    )
  }
}
