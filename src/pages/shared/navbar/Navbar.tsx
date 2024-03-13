"use client";
import Link from "next/link";
import NavLink from "./NavLink";
import NavLinkIcon from "./NavLinkIcon";

const Navbar = () => {
  return (
    <nav className="bg-primary_color text-white py-3">
      <div className="container flex justify-between items-center">
        <Link href="/" className="font-semibold text-3xl">
          Logo
        </Link>

        <ul className="flex items-center gap-7 text-base font-medium">
          <li className="flex items-center gap-2 group">
            <NavLink text="Home" path="/" />
          </li>
          <li className="flex items-center gap-1 group">
            <NavLink text="Hosting" path="#" />
            <NavLinkIcon />
          </li>
          <li className="flex items-center gap-1 group">
            <NavLink text="Domain" path="#" />
            <NavLinkIcon />
          </li>
          <li className="flex items-center gap-1 group">
            <NavLink text="Technology" path="#" />
            <NavLinkIcon />
          </li>
          <li className="flex items-center gap-1 group">
            <NavLink text="Help Center" path="#" />
            <NavLinkIcon />
          </li>
          <li className="flex items-center gap-1 group">
            <NavLink text="Others" path="#" />
            <NavLinkIcon />
          </li>
        </ul>

        <div className="flex items-center gap-8">
          <Link
            href="/Login"
            className="flex items-center font-medium text-base gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <span>Login</span>
          </Link>
          <button className="btn-outline">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

/* 
About Us
Hosting
Domain
Technology
Help Center
*/
