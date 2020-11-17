import React from "react"
import ric from "../ric.jpg"
import BestProduct from "./BestProduct"

export default function Home() {
  return (
    <div>
      <img src={ric} width="100%"></img>
      <BestProduct />
    </div>
  )
}
