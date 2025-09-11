import React, { useState } from "react";
import { navLinks } from "../constants";

const NavItems = () => {
    return (
        <ul className="nav-ul">
            {navLinks.map(({id, title, href}) => (
                <li key={id} className="nav-li">
                    <a href= {href} className="nav-li_a" onClick={()=> {}}>
                        {title}
                    </a>
                </li>
            ))}
        </ul>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/30">
            <div className="max-w-9xl mx-auto">
                <div className="flex justify-between items-center mx-auto c-space">
                    <a href="/" className="text-neutral-400 font-bold text-2xl hover:text-white transition-colors p-5">
                        Emmanuel
                    </a>    

                    <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" aria-label="Toggle menu">
                        <img src={isOpen ? "../src/assets/close.svg" : "../src/assets/menu.svg"} alt="toggle" className="w-6 h-6" />
                    </button>

                    <nav className="sm:flex hidden">
                        <NavItems />
                    </nav>
                </div>
            </div>

            <div className={`${isOpen ? 'max-h-screen' : 'max-h-0 hidden'} sm:hidden center`}>
                <nav className="p-5">
                    <NavItems />
                </nav>
            </div>

        </header>
    )
}

export default Navbar
