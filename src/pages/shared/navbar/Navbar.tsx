"use client";
import Link from "next/link";
import NavLink from "./NavLink";
import NavLinkIcon from "./NavLinkIcon";
import DropDownMenu from "./DropDownMenu";
import MegaMenu from "./MegaMenu";
import MegaMenu2 from "./MegaMenu2";
import {
  HelpCenter,
  domainDropDown,
  hostingMegaMenu,
  othersMegaMenu,
  technologyDropDown,
} from "@/utility/navar_menu";
import MobileNavbar from "./MobileNavbar";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className=" text-white py-3   font-inter z-[200] absolute top-0 left-0 w-full">
        <div className="custom-container flex justify-between items-center">
          <Link href="/" className="font-semibold text-3xl">
            Logo
          </Link>

          <ul className="lg:flex hidden items-center gap-7 text-base font-medium">
            <li className="flex items-center gap-2 group">
              <NavLink text="Home" path="/" />
            </li>
            <li className="flex  items-center gap-1 group relative">
              <NavLink text="Hosting" path="#" />
              <NavLinkIcon />
              <MegaMenu mega={hostingMegaMenu} />
            </li>
            <li className="flex items-center gap-1 group relative">
              <NavLink text="Domain" path="#" />
              <NavLinkIcon />
              <DropDownMenu menu={domainDropDown} />
            </li>
            <li className="flex items-center gap-1 group relative">
              <NavLink text="Technology" path="#" />
              <NavLinkIcon />
              <DropDownMenu menu={technologyDropDown} />
            </li>
            <li className="flex items-center gap-1 group relative">
              <NavLink text="Help Center" path="#" />
              <NavLinkIcon />
              <DropDownMenu menu={HelpCenter} />
            </li>
            <li className="flex items-center gap-1 group relative">
              <NavLink text="Others" path="#" />
              <NavLinkIcon />
              <MegaMenu2 mega={othersMegaMenu} />
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
            <button className="btn-outline xl:block hidden">Get Started</button>
            <button
              onClick={handleOpen}
              className="p-2 lg:hidden block duration-300 active:scale-95 bg-primary_color shadow-sm border rounded-md border-secondary_color"
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
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <MobileNavbar isOpen={isOpen} handleOpen={handleOpen} />
    </>
  );
};

export default Navbar;
