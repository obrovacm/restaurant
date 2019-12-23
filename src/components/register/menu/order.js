import React, { Component } from "react"

import styles from "./order.module.scss"

export default class CurrentOrder extends Component {
  getTotalPrice = () => {
    const { order } = this.props
    return order.reduce((sum, item) => sum + item.price, 0)
  }

  renderOrder = () => {
    const { order, removeOrderItem } = this.props
    return order.map((item, i) => (
      <div
        className={styles.sameRow}
        key={i}
        onClick={() => removeOrderItem(i)}
        onKeyDown={e => {
          // prevents tab-triggering of func
          if (e.keyCode === 13) removeOrderItem(i)
        }}
        role="menuitem"
        tabIndex={0}
      >
        <div>{item.name}</div>
        <div>{item.price}</div>
      </div>
    ))
  }

  render() {
    const renderOrder = this.renderOrder()
    const total = this.getTotalPrice()
    return (
      <>
        <div className={styles.sameRow}>
          <div>items:</div>
          <div>price [din.]</div>
        </div>
        <div className={styles.order}>{renderOrder}</div>
        <hr />
        <div className={styles.sameRow}>
          <button>submit</button>
          <div>{total}</div>
        </div>
      </>
    )
  }
}
