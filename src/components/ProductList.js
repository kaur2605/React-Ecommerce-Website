import React, { Component } from "react"
import Product from "./Product"
import { Link } from "react-router-dom"
import Title from "./Title"
import { ProductConsumer } from "../context"

export default class ProductList extends Component {
  render() {
    return (
      <div className="container">
        <Title name=" our" title="products"></Title>
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
