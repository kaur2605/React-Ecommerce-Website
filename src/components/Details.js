import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context"
import ButtonBox from './Button'

export default class Details extends Component {
  render() {
    return <ProductConsumer>
      {value => {

        const { id, company, img, info, price, title, inCart } = value.detailProduct;
        return (
          <div className="container py-5">
            <div className="row">
              <div className="col-10 mx-auto d-flex text-center text-blue my-5 ">
              <Link to="/"> <i class="fas fa-arrow-left"></i><ButtonBox className = "mr-5" >Back to Products</ButtonBox></Link>
                <h2>{title}</h2>
              </div>
            </div>


            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3">
                <img src={img} alt="product" className="img-fluid" />

              </div>

              <div className="col-10 mx-auto col-md-6 text-capitalize my-3">
                <h2>
                  model: {title}
                </h2>
                <h4 className="text-uppercase, text-muted">made by: {company}</h4>
                <h4 className="text-uppercase, text-blue">
                  <strong>Price: <span>DKK</span>
                    {price}
                  </strong>
                </h4>
                <p className="text-capitalize font-weight-bold mt-3 mb-0"> Some infor about Product : </p>
                <p className="text-muted"> {info}</p>

                <div>

                  <ButtonBox
                    cart
                    disabled={inCart ? true : false} onClick={() => {
                      value.addtoCart(id);
                      value.openModel(id);
                    }
                    }
                  >
                    {inCart ? 'InCart' : 'Add to Cart'}
                  </ButtonBox>
                </div>

              </div>

            </div>
          </div>

        )

      }}

    </ProductConsumer>;
  }
}
