import React, { Component } from "react"

import Product from "./product"
import CurrentOrder from "./current-order"

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
      new Product("ice Cream", 350, "food"),
      new Product("fruit Salad", 420, "food"),
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
  addOrder = item => {
    this.setState({
      order: [...this.state.order, item],
    })
  }
  removeOrder = index => {
    let newStateOrder = [...this.state.order]
    newStateOrder.splice(index, 1)
    console.log("stateOrder", newStateOrder)
    this.setState({
      order: newStateOrder,
    })
  }

  renderProducts = () => {
    return this.state.items
      .filter(item => item.category === this.state.selectedCategory)
      .map((item, i) => (
        <p key={i} onClick={() => this.addOrder(item)}>
          {item.name + " - " + item.price + " din."}
        </p>
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
          >
            {category}
          </div>
        )
      })
  }

  render() {
    const shownProducts = this.renderProducts()
    const categories = this.renderCategories()

    // console.log("menu props:", this.props)
    // console.log("this.state.categories:", this.state.categories)
    // console.log("this.state.selectedCategory:", this.state.selectedCategory)

    console.log(this.state.order)

    return (
      <>
        <hr />
        <div className={styles.menu}>
          <div className={styles.categories}>{categories}</div>
          <div>{shownProducts}</div>
        </div>
        <hr />
        <CurrentOrder order={this.state.order} removeOrder={this.removeOrder} />
      </>
    )
  }
}