'use client';

import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaSearch,
  FaRegHeart,
  FaRegUserCircle,
} from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Hook to get the current route

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current route

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getLinkClass = (href) => {
    return `navLink ${pathname === href ? 'active' : ''}`;
  };

  return (
    <div className="navbarMain">
      <div className="navbarContainer">
        <nav className="navbar">
          {/* Logo Section */}
          <div className="navIcons">
            <div className="logo">
              <Link href="/">
                <img
                  src="/image/logo.png"
                  alt="Logo"
              
                />
              </Link>
            </div>

            {/* Hamburger and Close Icons */}
            <div className="menuToggle" onClick={toggleMenu}>
              {!isMenuOpen ? (
                <FaBars className="icon" />
              ) : (
                <FaTimes className="icon" />
              )}
            </div>

            {/* Navigation Items */}
            <ul className={`navItems ${isMenuOpen ? 'active' : ''}`}>
              <li>
                <Link href="/" className={getLinkClass('/')}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/pages/Pets" className={getLinkClass('/')}>
                Pets
                </Link>
              </li>
              <li>
                <Link href="/pages/Products" className={getLinkClass('/')}>
                Products
                </Link>
              </li>
              <li>
                <Link href="/pages/Shop" className={getLinkClass('/')}>
                Shops
                </Link>
              </li>
              <li>
                <Link href="/pages/Blog" className={getLinkClass('/')}>
                Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Side Icons and Text */}
          <div className="rightMenu">
            <Link href="/pages/Notification" className="iconLink">
              <FaRegBell className="icon" />
            </Link>
            <Link href="/pages/Cardpage" className="iconLink">
              <FaRegHeart className="icon" />
            </Link>
            <Link href="/component/ProfilePage" className="iconLink">
              <FiShoppingCart className="icon" />
            </Link>
            <span className="helloText">Hello, Sign In</span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
