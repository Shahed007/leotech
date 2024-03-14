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
import DropDownMenu from "./DropDownMenu";
import MegaMenu from "./MegaMenu";
import MegaMenu2 from "./MegaMenu2";
import other1 from "@/assets/outherMegaMenu/01-1.svg";
import other2 from "@/assets/outherMegaMenu/08.svg";
import other3 from "@/assets/outherMegaMenu/16.svg";
import other4 from "@/assets/outherMegaMenu/21.svg";

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
          <button className="btn-outline">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const hostingMegaMenu: {
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
const othersMegaMenu: {
  name: string;
  path: string;
  icon: string;
  tag: string;
}[] = [
  {
    name: "About Us",
    tag: "Get Know About Leo Technology",
    path: "about-us",
    icon: other1,
  },
  {
    name: "Support",
    tag: "Provide detailed explain",
    path: "support",
    icon: other2,
  },
  {
    name: "Contact",
    tag: "Contact with Leo Technology",
    path: "contact",
    icon: other3,
  },
  {
    name: "Maintenance",
    tag: "We will be soon",
    path: "maintenance",
    icon: other4,
  },
];

const domainDropDown: { name: string; path: string }[] = [
  {
    name: "Domain Checker",
    path: "domain-checker",
  },
  {
    name: "Domain Transfer",
    path: "domain-transfer",
  },
  {
    name: "Domain Register",
    path: "domain-register",
  },
  {
    name: "Whois",
    path: "whois",
  },
];

const technologyDropDown: { name: string; path: string }[] = [
  {
    name: "Technology",
    path: "technology",
  },
  {
    name: "Data Center",
    path: "data-center",
  },
];
const HelpCenter: { name: string; path: string }[] = [
  {
    name: "FAQ",
    path: "faq",
  },
  {
    name: "Support",
    path: "support",
  },
  {
    name: "Contact",
    path: "contact",
  },
  {
    name: "Knowledgebase",
    path: "Knowledgebase",
  },
];
