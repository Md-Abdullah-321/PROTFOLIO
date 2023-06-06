import React from 'react';
import { NavLink } from 'react-router-dom';


const NavComponent = ({name, to}) => {
    return (
        <div>
            <li>
                <NavLink to={to} className="block py-1 mt-1 pl-3 pr-4 text-gray-900 rounded hover:bg-buttonColor md:border-0 md:hover:text-white md:px-2 md:py-0 md:hover:bg-buttonColor md:rounded-md hover:text-primary">{name}</NavLink>
             </li>
        </div>
    )
}

export default NavComponent;