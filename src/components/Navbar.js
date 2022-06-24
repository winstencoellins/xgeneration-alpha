import { useState } from 'react';
import Logo from '../assets/img/chigen-logo-full.png';
import { Link } from 'react-router-dom';

function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <header id="header">
      <nav id="navbar" className="bg-chigen-primary w-full py-4 fixed z-50 top-0 shadow-sm">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-5 md:px-10">
          <div className="brand">
          <span className="sr-only">Chi-Generation</span>
            <Link to="/">
              <img src={Logo} alt="chi generation" className="w-32 md:w-40 object-contain"/>
            </Link>
          </div>
          <div className={`${active ? "active" : null} md:hidden hamburger cursor-pointer`} onClick={() => setActive(!active)}>
            <span className="sr-only">Hamburger Menu</span>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <div className={`${active ? "active" : null} nav-list hidden md:block`}>
            <ul className="text-white font-primary font-bold text-md flex justify-center items-center">
              <li className="mx-3 block hover:bg-gray-500 hover:bg-opacity-50 p-2 rounded-md"><Link to="/learn">Learn</Link></li>
              <li className="mx-3 block hover:bg-gray-500 hover:bg-opacity-50 p-2 rounded-md"><Link to="/about">About</Link></li>
              <li className="mx-3 block hover:bg-gray-500 hover:bg-opacity-50 p-2 rounded-md"><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
