"use client"; // for nextjs 13.4 users
import Link from "next/link";
import React, { useState } from "react";
import AheadLogo from "../../../public/Images/AheadLogo.jpg"
import Image from "next/image";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };


    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/education", label: "Education" },
        { href: "/sports", label: "Sports" },
        { href: "/contact", label: "Contact Us" },
      ];


  return (
    <>
 <div>
 <nav className="bg-[#fffff2]  fixed w-full z-10 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                  className="w-16"
                  src={AheadLogo}
                  alt="Ahead"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">

                {navLinks.map(({ href, label }) => (
                    <Link
                        
                        key={`${href}${label}`}
                        href={href}
                        className="hover:bg-[#BA274A] hover:text-white font-semibold text-[#BA274A] px-3 py-2 rounded-md text-sm"
                    >
                        {label}
                    </Link>
                    ))}

                
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                className="bg-white inline-flex items-center justify-center p-2 rounded-md text-blue-700 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map(({ href, label }) => (
                    <Link
                        key={`${href}${label}`}
                        href={href}
                        className="hover:bg-[#BA274A] hover:text-white  text-[#BA274A] block px-3 py-2 rounded-md text-base font-medium"
                        onClick={toggleMobileMenu}
                    >
                        {label}
                    </Link>
                    ))}
          </div>
        </div>
      </nav>
    </div>

      
    </>
  );
};
export default Navbar;