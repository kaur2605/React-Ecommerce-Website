import React, { Component } from "react"
import PopularProduct from "./PopularProduct"
import Title from "./Title"
import { ProductConsumer } from "../context"

export default class PopularProductList extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="PP">Popular Products</h2>
        <div className="row">
          <ProductConsumer>
            {(value) => {
              return value.items.map((item) => {
                console.log(item.id)
                return <PopularProduct key={item.id} item={item}></PopularProduct>
              })
            }}
          </ProductConsumer>
        </div>
      </div>
    )
  }
}
