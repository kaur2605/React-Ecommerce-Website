import React, { Component } from "react";
import { Link } from "react-router-dom";
import Title from "../Title";
import CartColumn from "./CartColumn";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../context"
import CartList from "./CartList";
import CartTotal from "./CartTotal";

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <>
                  <Title name="Your" title="Cart"></Title>
                  <CartColumn />
                  <CartList value={value} />
                  <CartTotal value={value}></CartTotal>               </>

              )
            }
            else {
              return (
                <>
                  <EmptyCart />

                </>
              )

            }


          }}

        </ProductConsumer>


      </section>
    );
  }
}
