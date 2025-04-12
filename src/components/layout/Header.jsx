import React, { useState } from "react";
import Navbar from "./Navbar";
import Container from "../Container";
import { navLinks } from "../../utils/constants";
import { NavLink } from "react-router-dom";
import { Icons } from "../common/Icons";

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <header className="px-2 py-5">
      <Container>
        <Navbar setIsMenu={setIsMenu}/>
        {isMenu && <div className="fixed z-[999] h-full w-full sm:w-[350px] left-0 top-0 bottom-0">
          <div className="relative p-2 h-full bg-radial" style={{
            backgroundImage: 'linear-gradient(to left top, var(--bg-primary), var(--bg-secondary))'
          }}>
            <div className="text-white font-semibold px-4 py-2 mb-5">
              Red Augment
            </div>
            <button onClick={()=>setIsMenu(false)} className="p-1.5 bg-gray-300 rounded-full absolute right-[8px] top-2 cursor-pointer">
              <Icons.cancel className="size-6" />
            </button>
            <ul className="">
              {navLinks.map((nav) => (
                <li key={nav.label} className="mb-2 rounded-xl">
                  <NavLink
                    to={nav.path}
                    className="p-2 inline-block w-full text-white transition-all ease-in duration-100 hover:bg-gray-500 hover:ps-4 rounded-xl"
                  >
                    {nav.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>}
      </Container>
    </header>
  );
};

export default Header;
