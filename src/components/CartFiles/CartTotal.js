import React from 'react';
import { Link } from 'react-router-dom';
import Paypal from './Paypal';

export default function CartTotal({ value, history }) {
  const { cartTotal, cartSubtotal, cartTax, clearCart } = value
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right text-capitalize">
          <Link to="/">

            <button className="btn btn-outline-danger text-uppercase mb-3 px-5"
              type="button" onClick={() => clearCart()}>
              clear Cart

     </button>
          </Link>
          <h5>
            <span className="text-title">SubTotal : $</span>
            <strong>{cartSubtotal}</strong>
          </h5>

          <h5>
            <span className="text-title">cartTax : $</span>
            <strong>{cartTax}</strong>
          </h5>
          <h5>
            <span className="text-title">cartTotal : $</span>
            <strong>{cartTotal}</strong>
          </h5>
          <Paypal total={cartTotal} clearCart={clearCart} history={history}
          ></Paypal>
        </div>
      </div>

    </div>
  )
}
