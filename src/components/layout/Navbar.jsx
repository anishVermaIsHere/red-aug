import React from "react";
import { NavLink } from "react-router-dom";
import { APP_NAME, navLinks } from "../../utils/constants";
import { Icons } from "../common/Icons";

const Navbar = ({ setIsMenu }) => {
  return (
    <nav className="flex justify-between items-center w-full md:px-8">
      <div className="text-white">{APP_NAME}</div>
      <div className="hidden lg:block">
        <ul className="flex flex-col md:flex-row justify-between gap-8">
          {navLinks.map((nav) => (
            <li key={nav.label} className="">
              <NavLink
                to={nav.path}
                className={({ isActive }) =>
                  `p-2 ${
                    isActive ? "text-white font-semibold" : "text-gray-300"
                  }`
                }
              >
                {nav.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={() => setIsMenu(true)}
        className="block lg:hidden p-1.5 text-gray-300 rounded-full cursor-pointer"
      >
        <Icons.hambgMenu className="size-6" />
      </button>
    </nav>
  );
};

export default Navbar;
