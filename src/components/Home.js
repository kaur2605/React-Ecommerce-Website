import React from "react"
import ric from "../ric.jpg"
import PopularProductList from "./PopularProductList"

export default function Home() {
  return (
    <div>
      <div class="bann">
        <img src={ric} alt="log" width="100%"></img>
        <h2 className="welcome">
          <span className="spn">Welcome to Online grocery Store</span>
        </h2>
      </div>
      <div className="sect">
        <h3 className="PP">Hurry up!!! Order Now</h3>
        <p>
          <em>
            Explore our full range of lentils, spices, nuts, chutneys, snacks
            and more. Check out our new products and special offers below!!!
          </em>
        </p>

        <strong>
          FREE Shipping on orders above 500kr. Shipping charge is 49kr. on
          orders below 500kr. Shipping on ALL ORDERS to local areas around
          Copenhagen.
        </strong>
      </div>
      <PopularProductList />
    </div>
  )
}
