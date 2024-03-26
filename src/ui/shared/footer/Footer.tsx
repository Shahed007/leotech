import { company, information, legal } from "@/utility/footerLink";
import {
  HelpCenter,
  domainDropDown,
  hostingMegaMenu,
} from "@/utility/navar_menu";
import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import CopyRight from "./CopyRight";
import payment1 from "@/assets/payment-support/visa.png";
import payment2 from "@/assets/payment-support/paypal.png";
import payment3 from "@/assets/payment-support/master-card.png";
import payment4 from "@/assets/payment-support/american-express.png";
import payment5 from "@/assets/payment-support/BKash-Icon-Logo.wine.svg";
import payment6 from "@/assets/payment-support/Nagad-Vertical-Logo.wine.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" bg-primary_color text-white">
      <div className="custom-container py-20 grid gap-10 grid-cols-1  lg:grid-cols-6">
        <div className="lg:col-span-2 col-span-1">
          <h1 className="text-4xl font-bold text-white">Logo.</h1>
          <p className="py-5 border-b border-white/40">
            Your Path to Online Success. Enjoy lightning-fast hosting, expert
            support, and effortless site creation. Join us and elevate your
            online presence!
          </p>
          <ul className="mt-5 font-medium text-lg flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <span className="h-8 w-8 bg-secondary_color shadow-sm shadow-secondary_color  flex justify-center items-center rounded-md">
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
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </span>
              ruvu@sabmog.sx
            </li>
            <li className="flex items-center gap-2">
              <span className="h-8 w-8 bg-secondary_color shadow-sm shadow-secondary_color  flex justify-center items-center rounded-md">
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
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </span>
              (733) 772-5133
            </li>
          </ul>
        </div>
        <div>
          <FooterTitle>Hosting</FooterTitle>
          <ul className="mt-3 flex flex-col gap-1 text-base font-medium">
            {hostingMegaMenu.map((item, idx) => (
              <FooterLink key={idx} path={item.path} name={item.name} />
            ))}
          </ul>
        </div>
        <div>
          <FooterTitle>Domain</FooterTitle>
          <ul className="mt-3 flex flex-col gap-1 text-base font-medium">
            {domainDropDown.map((item, idx) => (
              <FooterLink key={idx} path={item.path} name={item.name} />
            ))}
            <FooterLink name="Cheap Domain Names" path="cheap-domain-names" />
            <FooterLink
              name="Domain Name Extension"
              path="domain-name-extension"
            />
            <FooterLink
              name="Free SSL Certificate"
              path="free-ssl-certificate"
            />
          </ul>
        </div>
        <div>
          <FooterTitle>Information</FooterTitle>
          <ul className="mt-3 flex flex-col gap-1 text-base font-medium">
            {information.map((item, idx) => (
              <FooterLink key={idx} path={item.path} name={item.name} />
            ))}
          </ul>
          <div className="mt-7">
            <FooterTitle>Legal</FooterTitle>
            <ul className="mt-3 flex flex-col gap-1 text-base font-medium">
              {legal.map((item, idx) => (
                <FooterLink key={idx} path={item.path} name={item.name} />
              ))}
            </ul>
          </div>
        </div>
        <div>
          <FooterTitle>Company</FooterTitle>
          <ul className="mt-3 flex flex-col gap-1 text-base font-medium">
            {company.map((item, idx) => (
              <FooterLink key={idx} path={item.path} name={item.name} />
            ))}
          </ul>
          <div className="mt-7">
            <FooterTitle>Help</FooterTitle>
            <ul className="mt-3 flex flex-col gap-1 text-base font-medium">
              {HelpCenter.map((item, idx) => (
                <FooterLink key={idx} path={item.path} name={item.name} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="pb-10 max-w-sm w-full mx-auto sm:px-0 px-3 ">
        <div className="text-center">
          <h2 className="font-bold text-xl sm:text-3xl font-jakarta">
            Join Our Newsletter
          </h2>
          <p>We’ll send you news and offers.</p>
          <form className="flex items-center  relative w-full my-5">
            <span className="text-white absolute left-2">
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
                  d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
                />
              </svg>
            </span>

            <input
              className="bg-secondary_color flex  duration-200 px-10 focus:outline-none shadow-sm shadow-secondary_color border border-secondary_color   focus:border-white text-white py-1 gap-1 rounded-full w-full h-[45px] "
              type="email"
              placeholder="Enter your email"
            />
            <div className="absolute  right-1">
              <button className=" shadow-sm shadow-primary_color border border-secondary_color h-[40px] w-[40px] rounded-full flex justify-center items-center bg-primary_color text-white">
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
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </button>
            </div>
          </form>
          <ul className="flex justify-center gap-2 text-lg">
            <li className="h-10 w-10 hover:bg-white/10 duration-150 flex rounded-md justify-center items-center text-white bg-secondary_color shadow-sm shadow-secondary_color border border-secondary_color">
              <Link href="#">
                <FaFacebook />
              </Link>
            </li>
            <li className="h-10 w-10 hover:bg-white/10 duration-150 flex rounded-md justify-center items-center text-white bg-secondary_color shadow-sm shadow-secondary_color border border-secondary_color">
              <Link href="#">
                <AiFillInstagram />
              </Link>
            </li>
            <li className="h-10 w-10 hover:bg-white/10 duration-150 flex rounded-md justify-center items-center text-white bg-secondary_color shadow-sm shadow-secondary_color border border-secondary_color">
              <Link href="#">
                <FaYoutube />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-4  bg-white border-t-2 border-t-secondary_color  ">
        <div className="custom-container text-text_color flex flex-col xl:gap-0 gap-6 xl:flex-row  justify-between items-center">
          <CopyRight />
          <div className="grid grid-cols-6 gap-4">
            <Image
              className="xl:h-12 xl:w-12  sm:h-8 object-cover"
              src={payment1}
              alt="visa"
            />
            <Image
              className="xl:h-12 xl:w-12  sm:h-8 object-cover"
              src={payment2}
              alt="visa"
            />
            <Image
              className="xl:h-12 xl:w-12  sm:h-8 object-cover"
              src={payment3}
              alt="visa"
            />
            <Image
              className="xl:h-12 xl:w-12  sm:h-8 object-cover"
              src={payment4}
              alt="visa"
            />
            <Image
              className="xl:h-12 xl:w-12  sm:h-8 object-cover"
              src={payment5}
              alt="visa"
            />
            <Image
              className="xlh-12 xl:w-12  sm:h-8 object-cover"
              src={payment6}
              alt="visa"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="text-white font-jakarta font-semibold text-2xl tracking-wider">
      {children}
    </h3>
  );
};

const FooterLink = ({ path, name }: { path: string; name: string }) => {
  return (
    <li>
      <Link className="hover:text-[#CCFFFF] duration-150" href={path}>
        {name}
      </Link>
    </li>
  );
};

export default Footer;
