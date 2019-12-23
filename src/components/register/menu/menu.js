import React, { Component } from "react"

import Product from "./product"
import Order from "./order"
import ItemIcon from "./itemIcon"

import styles from "./menu.module.scss"

export default class Menu extends Component {
  state = {
    items: [
      new Product("water", 105, "drink"),
      new Product("juice", 165, "drink"),
      new Product("coffee", 130, "drink"),
      new Product("tea", 120, "drink"),
      new Product("beer", 190, "drink"),
      new Product("fish", 600, "food"),
      new Product("chicken", 510, "food"),
      new Product("chips", 220, "food"),
      new Product("popcorn", 200, "food"),
      new Product("ice cream", 350, "food"),
      new Product("fruit salad", 420, "food"),
      new Product("baklava", 400, "food"),
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

    const uniqueCategories = allCategories.filter(
      (item, index, self) =>
        // console.log("item", index, ":", item, "\nself: ", self)
        // self refers to allCategories[] list
        self.indexOf(item) === index
    )

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
  removeOrderItem = index => {
    let newStateOrder = [...this.state.order]
    newStateOrder.splice(index, 1)
    console.log("stateOrder", newStateOrder)
    this.setState({
      order: newStateOrder,
    })
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
            // bug: tab selection triggers onKeyDown func
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
          <div className={styles.menuItems}>{menuItems}</div>
        </div>
        <hr />
        <Order
          order={this.state.order}
          removeOrderItem={this.removeOrderItem}
        />
      </>
    )
  }
}
