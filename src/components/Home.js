import React from "react"
import ric from "../ric.jpg"
import BestProductList from "./BestProductList"

export default function Home() {
  return (
    <div>
      <div class="bann">
        <img src={ric} alt="log" width="100%"></img>
        <h2 className="welcome">
          <span class="spn">Welcome to Online grocery Store</span>
        </h2>
      </div>
      <div className="sect">
        <h3>Hurry up !Order Now</h3>
        <p>
          Explore our full range of lentils, spices, nuts, chutneys, snacks and
          more. Check out our new products and special offers below!
        </p>

        <strong>
          FREE Shipping on orders over kr 500! kr49 Shipping on orders below
          kr500 FREE Shipping on ALL ORDERS to local areas around Copenhagen
        </strong>
      </div>
      <BestProductList />
    </div>
  )
}
