import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ButtonBox from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <Navwrapper className="navbar navbar-expand-sm  bg-primary px-sm-5">
        <Link to="/" className= "logo">
          <span>TheShopSmart</span>
        </Link>
        <Link to="/" className="nav-link text-dark">Home</Link>

        <ul className="navbar nav align-items-center">
          <li className="nav-item ml-1">

            <Link to="/Products" className="nav-link text-dark">
              {" "}
              Products
            </Link>

          </li>
        </ul>
        <Link to="/About" className="nav-link text-dark">About Us</Link>

        <Link to="/Cart" className="ml-auto">
          <ButtonBox>
            <span className="mr-2">
              <i className="fas fa-cart-plus"></i> my cart
            </span>
          </ButtonBox>
        </Link>
      </Navwrapper>
    );
  }
}
const Navwrapper = styled.nav`
  background:var(--lightgreen)!important;  

  .nav-link {
    font-size: 1.3rem;
    color: var(--mainwhite) !important;
  }
`
