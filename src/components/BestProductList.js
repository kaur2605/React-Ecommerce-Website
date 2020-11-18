import React, {Component} from "react"
import BestProduct from "./BestProduct"
import Title from "./Title"
import {ProductConsumer} from "../context"

export default class BestProductList extends Component {
  render() {
    return (
      <div className="container">
        <Title name="Popular" title="Products"></Title>
        <div className="row">
          <ProductConsumer>
            {(value) => {
              return value.items.map((item) => {
                console.log(item.id)
                return <BestProduct key={item.id} item={item}></BestProduct>
              })
            }}
          </ProductConsumer>
        </div>
      </div>
    )
  }
}
