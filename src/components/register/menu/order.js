import React, { Component } from "react"

import styles from "./order.module.scss"

export default class CurrentOrder extends Component {
  state = {
    showMessage: false,
    submittedMessage: false,
  }

  getTotalPrice = () => {
    const { order } = this.props
    const total = order.reduce((sum, item) => sum + item.price, 0)
    return total.toFixed(2)
  }
  toggleSubmitMessage = () => {
    const { order } = this.props
    this.setState({
      submittedMessage: order.length === 0,
    })
  }

  showSubmitMessage = () => {
    this.setState({
      showMessage: true,
    })
    setTimeout(() => {
      this.setState({
        showMessage: false,
      })
    }, 3000)
    this.toggleSubmitMessage() //very important order, because next func will change relevant key in state
    this.props.submitOrder()
  }

  renderOrder = () => {
    const { order, removeOrderItem } = this.props
    const orderObject = {}

    order.forEach(item => {
      if (orderObject[item.name] === undefined) {
        orderObject[item.name] = 1
      } else {
        orderObject[item.name] += 1
      }
    })
    const orderObjectKeys = Object.keys(orderObject)
    orderObjectKeys.sort()

    return orderObjectKeys.map((key, i) => {
      const count = orderObject[key]
      const item = order.find(item => item.name === key)
      const price = (item.price * count).toFixed(2)

      return (
        <div
          className={styles.sameRow + " " + styles.orderItem}
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
    const { removeAllOrderItems } = this.props
    const { showMessage, submittedMessage } = this.state

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
        <div className={styles.order}>
          {renderOrder}
          <div
            className={
              styles.submitMsg + " " + (showMessage && styles.showSubmitMsg)
            }
          >
            <h1>
              {submittedMessage
                ? "Your list is empty! There's nothing to order."
                : "Your order has been submitted!"}
            </h1>
            <p>
              <small>(this is just a demo message)</small>
            </p>
          </div>
        </div>
        <hr />
        <div className={styles.totalPrice}>
          <button onClick={removeAllOrderItems}>remove order</button>
          <p>{total}</p>
        </div>
        <button className={styles.btn} onClick={this.showSubmitMessage}>
          submit order
        </button>
      </>
    )
  }
}
