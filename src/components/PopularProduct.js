import React, { Component } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { ProductConsumer } from "../context"
import PropTypes from "prop-types"

export default class PopularProduct extends Component {
  render() {
    const { id, img, price, title, inCart } = this.props.item
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {value => (
              <div
                className="img-container p-5"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/Details">
                  <img src={img} alt="product" className="card-img-top" />
                </Link>
                <button
                  className="cart-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {

                    value.addtoCart(id); value.openModel(id);
                  }
                  }
                >
                  {inCart ? (
                    <p className="text-capitalize mb-0">In cart</p>
                  ) : (
                      <i className="fas fa-cart-plus"></i>
                    )}
                </button>
              </div>

            )}

          </ProductConsumer>



          <div className="card-footer d-flex justify-content-between mb-0">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue font-italic">
              <span className="mr-2">$</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper >
    )
  }
}

PopularProduct.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

const ProductWrapper = styled.div`

.card{
  border-color: transparent;
  transition:all 1s linear;
}
.card-footer{
  background:transparent;
  transition:all 1s linear;
  border-top:transparent;
}&hover{
  .card{
    border: 0.04 solid black;
  }
}

.img-container {
  position: relative;
  overflow:hidden;
}
.card-img-top {
  transition: all 1s linear;
}

.img-container:hover .card-img-top
{
  transform: scale(1.2);
}


.cart-btn{
position: absolute;
bottom:0;
right:0;
padding: 0.3rem, 0.6rem;
background: var(--lightgreen);
font-size: 1.4rem;
border:none;
border-radius: 0.5rem 0 0 0;
transform: translate(100%,100%);
transition:all 1s linear;
}
.img-container:hover .cart-btn{
  transform: translate(0,0);
}


.cart-btn:hover {
  color: var(--lightblue);
  cursor:pointer
}

`;
