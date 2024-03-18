import {
  HelpCenter,
  domainDropDown,
  hostingMegaMenu,
  othersMegaMenu,
  technologyDropDown,
} from "@/utility/navar_menu";
import Link from "next/link";
import React, { useState } from "react";
import MobileDropDown from "./MobileDropDown";
import MobileDropDown2 from "./MobileDropDown2";

const MobileNavbar = ({
  isOpen,
  handleOpen,
}: {
  isOpen: boolean;
  handleOpen: () => void;
}) => {
  const [open, setOpen] = useState<null | number>(null);

  const handleDropDown = (idx: number) => {
    setOpen((prev) => (prev === idx ? null : idx));
  };

  return (
    <>
      <aside
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        }  fixed  duration-500 z-[300] font-inter transition-transform top-0 right-0 min-h-dvh bg-primary_color border-l border-secondary_color shadow-md  w-[300px]`}
      >
        <div className="flex justify-start mb-10 p-2">
          <button
            onClick={handleOpen}
            className="text-white rounded active:scale-95 duration-300 p-2 bg-primary_color outline-none border border-secondary_color shadow-sm"
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
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="text-white text-base font-medium px-4 gap-4 flex flex-col ">
          <li className="border-b border-gray-400 pb-1">
            <Link href="/">Home</Link>
          </li>
          <MobileDropDown
            title="Hosting"
            menuNumber={1}
            item={hostingMegaMenu}
            open={open}
            handleDropDown={handleDropDown}
          />
          <MobileDropDown2
            title="Domain"
            menuNumber={2}
            item={domainDropDown}
            open={open}
            handleDropDown={handleDropDown}
          />
          <MobileDropDown2
            title="Technology"
            menuNumber={3}
            item={technologyDropDown}
            open={open}
            handleDropDown={handleDropDown}
          />
          <MobileDropDown2
            title="Help Center"
            menuNumber={4}
            item={HelpCenter}
            open={open}
            handleDropDown={handleDropDown}
          />
          <MobileDropDown
            title="Others"
            menuNumber={5}
            item={othersMegaMenu}
            open={open}
            handleDropDown={handleDropDown}
          />
        </ul>
      </aside>
      <div
        onClick={handleOpen}
        className={`z-[200] bg-gray-700/50 cursor-pointer ease-in duration-300 transition-transform  h-dvh w-dvw fixed top-0 right-0 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      ></div>
    </>
  );
};

export default MobileNavbar;
