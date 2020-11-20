import React, { Component } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import ButtonBox from "./Button"

export default class Navbar extends Component {
  render() {
    return (
      <>

        <Navwrapper className="navbar navbar-expand-sm  bg-primary px-sm-5">
          <Link to="/">
            <span className="logo1">TheShop</span>
            <span className="logo2">Smart</span>
          </Link>

          <ul className="navbar nav align-items-center">
            <li className="nav-item ml-1">
              <Link to="/Products" className="nav-link text-dark">
                <span className="nav-item">All Products</span>
              </Link>
            </li>

          </ul>
          <Link to="/About" className="nav-link text-dark">
            <span className="nav-item">About Us</span>
          </Link>

          <div className="search">
            <input type="search" className="query" placeholder="Search.."></input><i class="fas fa-search search-icon"></i>
          </div>

          <Link to="/Cart" className="ml-auto">
            <ButtonBox>
              <span className="mr-2">
                <i className="fas fa-cart-plus"></i> <span className="nav-item">My Cart</span>
              </span>
            </ButtonBox>
          </Link>
        </Navwrapper>

        <Navwrapper className="navbar navbar-expand-sm  bg-primary px-sm-5">
          <Link to="/">
            <span className="items">Essentials</span>
          </Link>

          <ul className="navbar nav align-items-center">

            <li className="nav-item ml-1">
              <Link to="/" className="nav-link text-dark">
                <span className="items">Essentials</span><i class="fas fa-angle-down"></i>
              </Link>
              <div className="essentials-list">
                <a href="#">All</a>
                <a href="#">Tinned Products</a>
                <a href="#">Ghee/Oils</a>
                <a href="#">Teas/Drinks</a>
                <a href="#">Vegetables</a>
                <a href="#">Flour</a>
              </div>
            </li>


            <li className="nav-item ml-1">
              <Link to="/" className="nav-link text-dark">
                <span className="items">Grains</span><i class="fas fa-angle-down nav-icon"></i>
              </Link>
              <div className="grains-list">
                <a href="#">All</a>
                <a href="#">Rice/Quinoa</a>
                <a href="#">Flour/Milk Powder</a>
                <a href="#">Wheat Grains/Couscous</a>
                <a href="#">Corn</a>
                <a href="#">Soya</a>
              </div>
            </li>

            <li className="nav-item ml-1">
              <Link to="/" className="nav-link text-dark">
                <span className="items">Lentils</span><i class="fas fa-angle-down"></i>
              </Link>
              <div className="lentils-list">
                <a href="#">All</a>
                <a href="#">Dried Lentils, Beans/Peas</a>
                <a href="#">Soya Products</a>
                <a href="#">Tinned Lentils/Beans</a>
              </div>
            </li>

            <li className="nav-item ml-1">
              <Link to="/" className="nav-link text-dark">
                <span className="items">Spices</span><i class="fas fa-angle-down nav-icon"></i>
              </Link>
              <div className="spices-list">
                <a href="#">All</a>
                <a href="#">Spice/Herb Jars</a>
                <a href="#">Food Colourings/Essences</a>
                <a href="#">Sugar</a>
              </div>
            </li>

            <li className="nav-item ml-1">
              <Link to="/" className="nav-link text-dark">
                <span className="items">Snacks</span><i class="fas fa-angle-down nav-icon"></i>
              </Link>
              <div className="snacks-list">
                <a href="#">All</a>
                <a href="#">Makana Pops</a>
                <a href="#">Pappadoms</a>
                <a href="#">Chutneys, Pickles/Sauces</a>
                <a href="#">Namkeen/Daria Lentil Snacks</a>
                <a href="#">Flavoured Nuts</a>
                <a href="#">Raisins</a>
              </div>
            </li>
          </ul>

        </Navwrapper>
      </>

    )
  }
}
const Navwrapper = styled.nav`
  background: var(--lightgreen) !important;

  .nav-link {
    font-size: 1.3rem;
    color: var(--mainwhite) !important;
  }
`
