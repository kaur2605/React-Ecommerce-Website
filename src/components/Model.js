import React, { Component } from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context"
import ButtonBox from './Button'

export default class Model extends Component {
 render() {
  return (
   <ProductConsumer>
    {(value) => {

     const { modelopen, closeModel } = value;
     const { img, title, price } = value.modelProduct;

     if (!modelopen) {
      return null;
     }
     else {
      return (

       <ModelContainer>
        <div className="container">
         <div className="row">
          <div id="model" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
           <h3>item added added </h3>
           <img src={img} alt="product" className="img-fluid" />
           <h5>{title}</h5>
           <h5 className="text-muted">Price : $ {price}</h5>
           <Link to="/">
            <ButtonBox onClick={() => closeModel()}>Continue shopping
            </ButtonBox>
           </Link>
           <Link to="/Cart">
            <ButtonBox cart onClick={() => closeModel()}>Go To Cart
            </ButtonBox>
           </Link>
          </div>
         </div>
        </div>
       </ModelContainer>
      )

     }
    }}

   </ProductConsumer>
  )
 }
}

const ModelContainer = styled.div`
position: fixed;
top:0;
bottom:0;
left:0;
right:0;
background: rgba(0,0,0,0.3);
display:flex;
align-items: center;
justify-content: center;

#model{
 background:var(--mainwhite);
}

`;
