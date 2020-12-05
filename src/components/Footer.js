import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div class="container text-center text-md-left">
        <div class="row">
          <div class="foliage"></div>
          <div class="col-md-3 mx-auto">
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">
              Informations
           </h5>
            <ul class="list-unstyled">
              <li>
                <a href="#!">Return</a>
              </li>
              <li>
                <a href="#!">Delivery</a>
              </li>
              <li>
                <a href="#!">Terms & Conditions</a>
              </li>
              <li>
                <a href="#!">others</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 mx-auto">
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Account</h5>

            <ul class="list-unstyled">
              <li>
                <a href="#!">Sign up</a>
              </li>
              <li>
                <a href="#!">Log In</a>
              </li>
              <li>
                <a href="#!">Contact us</a>
              </li>
            </ul>
          </div>

          <div class="col-md-3 mx-auto">
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Social</h5>

            <ul class="list-unstyled">
              <li>
                <a href="#!">Facebook</a>
              </li>
              <li>
                <a href="#!">Instagram</a>
              </li>
              <li>
                <a href="#!">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row footer-bottom">
        <div class="col-md-2 text-center py-3">© 2020 Copyright:</div>
        <div className="col-md-8 text-center py-3">
          <span class="px-2">Email: rajputricky@outlook.com</span>
          <span class="px-2">Phoneno : 98763113</span>
          <span class="px-2">CVR: 78342153</span>
        </div>
        <div class="col-md-2"></div>
      </div>
    </footer>
  )
}
