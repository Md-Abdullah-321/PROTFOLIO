import React from "react";
import NavComponent from "./navComponent";

const Navbar = () => {
    // Showing Hamburger 
    const showAndCloseHamburger = () =>{
        const Hamburger = document.getElementById('navbar-default');
        Hamburger.classList.toggle('hidden');
    }
    return (
    <div>
        
        
<nav className="border-gray-200 bg-primary">
  <div className="w-full flex flex-wrap items-center justify-between mx-auto p-2 container">

    <div className="flex justify-around w-56 items-center">
        
        {/* <img src={Me} alt="Profile" className="h-10 w-10 rounded-full p-1 hover:scale-125 cursor-pointer profilePicture"/>
        <h3 className="text-buttonColor text-2xl font-bold">MD Abdullah</h3> */}
    </div>

    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={showAndCloseHamburger}>
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>

    
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      
     <div className="md:flex justify-between">
     <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 md:border-none rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
        <NavComponent name='Home' to='/'/>
        <NavComponent name='About' to='/about'/>
        <NavComponent name='Services' to='/services'/>
        <NavComponent name='Protfolio' to='/protfolio'/>
        <NavComponent name='Contact' to='/contact'/>
      </ul>
      <div className="w-full md:text-end sm:text-center">
      <button className="bg-buttonColor py-1 rounded-md mt-1 
        hover:text-primary font-bold px-4 md:mt-4 outline-none 
        ">ADMIN LOGIN</button>
      </div>
     </div>
    </div>
  </div>
</nav>


    </div>
    )
}

export default Navbar;