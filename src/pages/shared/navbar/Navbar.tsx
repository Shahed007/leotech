"use client";
import Link from "next/link";
import NavLink from "./NavLink";
import NavLinkIcon from "./NavLinkIcon";
import hostingIcon1 from "@/assets/hostingDropDown/22.svg";
import hostingIcon2 from "@/assets/hostingDropDown/23.svg";
import hostingIcon3 from "@/assets/hostingDropDown/24.svg";
import hostingIcon4 from "@/assets/hostingDropDown/26.svg";
import hostingIcon5 from "@/assets/hostingDropDown/25.svg";
import hostingIcon6 from "@/assets/hostingDropDown/27.svg";
import Image from "next/image";

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
          <li className="flex  items-center gap-1 group relative">
            <NavLink text="Hosting" path="#" />
            <NavLinkIcon />
            <div className="absolute top-6 duration-500 h-0 overflow-hidden  group-hover:h-auto group-hover:overflow-auto left-0 w-[770px] bg-transparent transition-all ease-in-out">
              <div className="p-4 text-black grid grid-cols-2 h-0 group-hover:h-auto duration-1000 bg-white rounded-md mt-7 shadow border">
                {hostingDropDown.map((item, idx) => (
                  <Link href={item.path} key={idx}>
                    <div className="flex items-center gap-3 p-4 duration-500 transition-all hover:shadow-sm rounded-md border border-transparent hover:border-gray-300">
                      <div className="w-[12%]">
                        <Image
                          className="h-full w-full"
                          src={item.icon}
                          alt={item.name}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-base text-black">
                          {item.name}
                        </h3>
                        <p className="font-normal text-sm text-gray-500">
                          {item.tag}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
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

const hostingDropDown: {
  name: string;
  path: string;
  icon: string;
  tag: string;
}[] = [
  {
    name: "Shared Hosting",
    tag: "Manage Shared Hosting",
    path: "shared-hosting",
    icon: hostingIcon1,
  },
  {
    name: "Dedicated Hosting",
    tag: "Hosting that gives you tools",
    path: "dedicated-hosting",
    icon: hostingIcon5,
  },
  {
    name: "Reseller Hosting",
    tag: "Manage Shared Hosting",
    path: "reseller-hosting",
    icon: hostingIcon3,
  },
  {
    name: "Vps Hosting",
    tag: "Dedicated resources",
    path: "vps-hosting",
    icon: hostingIcon4,
  },
  {
    name: "WordPress Hosting",
    tag: "WordPress Hosting speed",
    path: "wordPress-hosting",
    icon: hostingIcon2,
  },
  {
    name: "Cloud Hosting",
    tag: "Manage Cloud Hosting",
    path: "cloud-hosting",
    icon: hostingIcon6,
  },
];
