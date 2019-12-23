import React, { Component } from "react"

import styles from "./order.module.scss"

export default class CurrentOrder extends Component {
  getTotalPrice = () => {
    const { order } = this.props
    return order.reduce((sum, item) => sum + item.price, 0)
  }

  renderOrder = () => {
    const { order, removeOrderItem } = this.props
    const orderObject = {}

    // const uniqueItems = [...new Set(order)]
    order.forEach(item => {
      if (orderObject[item.name] === undefined) {
        orderObject[item.name] = 1
      } else {
        orderObject[item.name] += 1
      }
    })
    const orderObjectKeys = Object.keys(orderObject)
    console.log("orderObject:", orderObject)
    console.log("order:", order)

    return orderObjectKeys.map((key, i) => {
      const count = orderObject[key]
      const item = order.find(item => item.name === key)
      const price = item.price * count

      return (
        <div
          className={styles.sameRow}
          key={i}
          onClick={() => removeOrderItem(key)}
          onKeyDown={e => {
            // prevents tab-triggering of func
            if (e.keyCode === 13) removeOrderItem(key)
          }}
          role="menuitem"
          tabIndex={0}
        >
          <div>
            {count > 1 && count + "x "}
            {key}
          </div>
          <div>{price}</div>
        </div>
      )
    })
  }

  render() {
    const renderOrder = this.renderOrder()
    const total = this.getTotalPrice()
    return (
      <>
        <hr />
        <div className={styles.sameRow}>
          <div>
            <b>items</b>
          </div>
          <div>
            <b>price</b>
          </div>
        </div>
        <hr />
        <div className={styles.order}>{renderOrder}</div>
        <hr />
        <div className={styles.totalPrice}>
          <p>{total}</p>
        </div>
        <button className={styles.btn}>submit order</button>
      </>
    )
  }
}
