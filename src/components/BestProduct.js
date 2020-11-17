import React, {Component} from "react"
import Product from "./Product"
import Title from "./Title"
import {ProductConsumer} from "../context"

export default class BestProduct extends Component {
  render() {
    return (
      <div className="container">
        <Title name="Popular" title="Products"></Title>
        <div className="row">
          <ProductConsumer>
            {(value) => {
              return value.products.map((product) => {
                return <Product key={product.id} product={product}></Product>
              })
            }}
          </ProductConsumer>
        </div>
      </div>
    )
  }
}
