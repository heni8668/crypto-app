import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {
  IconBrandDiscord,
  IconBrandTwitter,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [mobile, setMobile] = useState(false);


    const handleScroll = () => {
        if (window.scrollY > 100) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      
    }
    window.addEventListener('scroll', handleScroll);


     const openMobile = () => {
       setMobile(!mobile);
     };


  return (
    <>
      <nav className={sticky ? "sticky-nav" : ""}>
        <div className="navbar">
          <Link to="/">
            <p>Crypto</p>
          </Link>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/market">Market</Link>
            </li>
            <li>
              <Link to="/choose-us">Choose Us</Link>
            </li>
            <li>
              <Link to="/trade">Trade</Link>
            </li>
            <li>
              <Link to="/login">Sign up</Link>
            </li>
          </ul>
          <span>
            <IconBrandTwitter />
            <IconBrandDiscord />
            {/* mobile */}
            <IconMenu2 onClick={openMobile} className="hamburger-menu" />
          </span>
        </div>
      </nav>

      {/* mobile nav */}
      <div className={`mobile-nav ${mobile ? "mobile-up" : ""}`}>
        <IconX onClick={openMobile} className="close-mobile" />
        <ul>
          <li onClick={openMobile}>
            <Link to="#home">Home</Link>
          </li>
          <li onClick={openMobile}>
            <Link to="/market">Market</Link>
          </li>
          <li onClick={openMobile}>
            <Link to="/choose-us">Choose Us</Link>
          </li>
          <li>
            <Link to="/trade">Trade</Link>
          </li>
          <li>
            <Link to="/login">Sign up</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar