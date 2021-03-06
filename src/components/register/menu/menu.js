import React, { Component } from "react"

import Product from "./product"
import Order from "./order"
import ItemIcon from "./itemIcon"

import styles from "./menu.module.scss"

export default class Menu extends Component {
  state = {
    items: [
      new Product("water", 105.9, "drinks"),
      new Product("juice", 165.5, "drinks"),
      new Product("coffee", 130, "drinks"),
      new Product("tea", 120, "drinks"),
      new Product("beer", 190, "drinks"),
      new Product("fish", 600.99, "food"),
      new Product("chicken", 510.5, "food"),
      new Product("chips", 220, "food"),
      new Product("popcorn", 200.31, "food"),
      new Product("ice cream", 350, "food"),
      new Product("fruit salad", 420, "food"),
      new Product("baklava", 400.12, "food"),
    ],
    categories: null,
    selectedCategory: null,
    order: [],
  }
  componentDidMount() {
    this.getCategories()
  }

  getCategories = () => {
    const allCategories = []

    this.state.items.forEach(item => {
      allCategories.push(item.category)
    })
    const uniqueCategories = [...new Set(allCategories)]

    this.setState({
      categories: uniqueCategories,
      selectedCategory: uniqueCategories[0],
    })
  }

  selectCategory = category => {
    this.setState({
      selectedCategory: category,
    })
  }
  addOrderItem = item => {
    this.setState({
      order: [...this.state.order, item],
    })
  }
  removeOrderItem = name => {
    let newStateOrder = [...this.state.order]
    const item = newStateOrder.find(item => item.name === name)
    const itemIndex = newStateOrder.indexOf(item)
    newStateOrder.splice(itemIndex, 1)
    console.log("stateOrder", newStateOrder)
    console.log("itemIndex", itemIndex)
    this.setState({
      order: newStateOrder,
    })
  }
  removeAllOrderItems = () => {
    this.setState({
      order: [],
    })
  }
  submitOrder = () => {
    console.log("Sending order details: bip-bop.")
    this.removeAllOrderItems()
  }

  renderItems = () => {
    return this.state.items
      .filter(item => item.category === this.state.selectedCategory)
      .map((item, i) => (
        <div
          key={i}
          className={styles.menuItem}
          onClick={() => this.addOrderItem(item)}
          onKeyDown={e => {
            if (e.keyCode === 13) this.addOrderItem(item)
          }}
          role="menuitem"
          tabIndex={0}
        >
          <ItemIcon name={item.name} />
          <p>{item.name}</p>
        </div>
      ))
  }

  renderCategories = () => {
    if (this.state.categories)
      return this.state.categories.map((category, i) => {
        let selectedClass =
          category === this.state.selectedCategory
            ? styles.selectedCategory
            : ""

        return (
          <div
            className={selectedClass}
            key={i}
            onClick={() => this.selectCategory(category)}
            onKeyDown={e => {
              if (e.keyCode === 13) this.selectCategory(category)
            }}
            role="menuitem"
            tabIndex={0}
          >
            <p>{category}</p>
          </div>
        )
      })
  }

  render() {
    const menuItems = this.renderItems()
    const categories = this.renderCategories()

    return (
      <>
        <hr />
        <div className={styles.menu}>
          <div className={styles.categories}>{categories}</div>
          <div className={styles.menuItems}>
            {menuItems}
            <div className={styles.menuItem}>
              {/* just a placeholder for flex-box */}
            </div>
          </div>
        </div>
        <Order
          order={this.state.order}
          removeOrderItem={this.removeOrderItem}
          removeAllOrderItems={this.removeAllOrderItems}
          submitOrder={this.submitOrder}
        />
      </>
    )
  }
}
