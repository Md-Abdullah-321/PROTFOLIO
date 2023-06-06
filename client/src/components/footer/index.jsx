import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="w-full">
            <div className="w-full">
  {/* component */}
  <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" />
  <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />

  <footer className="relative bg-primary pt-8 pb-6">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap text-left lg:text-left">
        <div className="w-full lg:w-6/12 px-4">
          <h4 className="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
          <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
            Find us on any of these platforms, we respond 1-2 business days.
          </h5>
          <div className="mt-6 lg:mb-0 mb-6">
            <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              <i className="fab fa-twitter" /></button><button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              <i className="fab fa-facebook-square" /></button><button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              <i className="fab fa-dribbble" /></button><button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              <i className="fab fa-github" />
            </button>
          </div>
        </div>
        <div className="w-full lg:w-6/12 px-4">
          <div className="flex flex-wrap items-top mb-6">
            <div className="w-full lg:w-4/12 px-4 ml-auto">
              <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
              <ul className="list-unstyled">
              <li>
                  <NavLink className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/about">About Us</NavLink>
                </li>
                <li>
                  <NavLink className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/services">Services</NavLink>
                </li>
                <li>
                  <NavLink className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/protfolio">Protfolio</NavLink>
                </li>
                <li>
                  <NavLink className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/contact">Contact Me</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-blueGray-300" />
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="text-sm text-blueGray-500 font-semibold py-1">
            Copyright © <span id="get-current-year">2023</span> MD 
            Abdullah.
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>

        </div>
    )
}

export default Footer;