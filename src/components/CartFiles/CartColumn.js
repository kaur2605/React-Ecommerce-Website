import React from 'react'

export default function CartColumn() {
 return (
  <div className="container-fluid d-none d-lg-block text-center">
   <div className="row">
    <div className="col-10 mx-auto col-lg-2">
     <p className="uppercase">Products</p>
    </div>
    <div className="col-10 mx-auto col-lg-2">
     <p className="uppercase"> Name of Product</p>
    </div>
    <div className="col-10 mx-auto col-lg-2">
     <p className="uppercase">Price</p>
    </div>
    <div className="col-10 mx-auto col-lg-2">
     <p className="uppercase">Quantity</p>
    </div>
    <div className="col-10 mx-auto col-lg-2">
     <p className="uppercase">Remove</p>
    </div>
    <div className="col-10 mx-auto col-lg-2">
     <p className="uppercase">Total</p>
    </div>
   </div>

  </div>
 )
}

