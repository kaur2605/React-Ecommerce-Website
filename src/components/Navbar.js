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
          <ul className="navbar nav items align-items-center">
            <li className="nav-item dropdown ml-1">
              <span className="items">Essentials</span><i class="fas fa-angle-down dropdown"></i>
              <div className="Dropdown-list">
                <Link to='/Products' className="dropdown-items"> All</Link>
                <Link to='/Products' className="dropdown-items"> Jar Products</Link>
                <Link to='/Products' className="dropdown-items"> Ghee/Oils</Link>
                <Link to='/Products' className="dropdown-items"> Teas/Drinks</Link>
                <Link to='/Products' className="dropdown-items"> Flour</Link>
              </div>
            </li>

            <li className="nav-item dropdown ml-1">
              <span className="items">Grains</span><i class="fas fa-angle-down dropdown"></i>
              <div className="Dropdown-list">
                <Link to='/Products' className="dropdown-items"> All</Link>
                <Link to='/Products' className="dropdown-items"> Rice</Link>
                <Link to='/Products' className="dropdown-items"> Flour</Link>
                <Link to='/Products' className="dropdown-items"> Soya</Link>
              </div>
            </li>

            <li className="nav-item dropdown ml-1">
              <span className="items">Lentils</span><i class="fas fa-angle-down"></i>
              <div className="Dropdown-list">
                <Link to='/Products' className="dropdown-items"> All</Link>
                <Link to='/Products' className="dropdown-items"> Dried Lentils, Beans/Peas</Link>
                <Link to='/Products' className="dropdown-items"> Soya Products</Link>
              </div>
            </li>

            <li className="nav-item dropdown ml-1">
              <span className="items">Spices</span><i class="fas fa-angle-down nav-icon"></i>
              <div className="Dropdown-list">
                <Link to='/Products' className="dropdown-items"> All</Link>
                <Link to='/Products' className="dropdown-items"> Spice/Herb Jars</Link>
                <Link to='/Products' className="dropdown-items"> Spice Blends/Mixes</Link>
                <Link to='/Products' className="dropdown-items"> Food Colourings/Essences</Link>
                <Link to='/Products' className="dropdown-items"> Sugar</Link>
              </div>
            </li>

            <li className="nav-item dropdown ml-1">
              <span className="items">Snacks</span><i class="fas fa-angle-down nav-icon"></i>
              <div className="Dropdown-list">
                <Link to='/Products' className="dropdown-items"> All</Link>
                <Link to='/Products' className="dropdown-items"> Chutneys, Pickles/Sauces</Link>
                <Link to='/Products' className="dropdown-items"> Namkeen/Daria Lentil Snacks</Link>
                <Link to='/Products' className="dropdown-items"> Flavoured Nuts</Link>
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
