"use client";
import { domainName, domains } from "@/utility/domain_checker_info";
import { useState } from "react";
import { motion } from "framer-motion";

const DomainChecker = () => {
  const [name, setName] = useState<string>(".com");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleCheckDomain = (item: string) => {
    setName(item);
    setIsOpen(false);
  };

  const variant = {
    open: {
      opacity: 1,
      scale: 1,
    },
    close: {
      opacity: 0,
      scale: 0,
    },
  };
  return (
    <div className="relative z-30 max-w-4xl mx-auto">
      <div className=" flex items-center mt-12 mb-10">
        <input
          className="block w-full focus:duration-200 transition-all border-[2px] focus-within:border-btn_hover_color border-transparent focus:outline-none px-3 py-3 rounded-l-md bg-white"
          type="text"
        />
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-[14px] bg-gray-200 flex gap-2 items-center"
          >
            <span>{name}</span>
            <div
              className={`${
                isOpen ? "rotate-180" : "rotate-0"
              } duration-300 transition-transform`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </button>
          <motion.ul
            variants={variant}
            initial="close"
            animate={isOpen ? "open" : "close"}
            transition={{ duration: 0.2 }}
            className={`absolute duration-500 transition-all shadow-sm border border-x-secondary_color min-w-[300px] z-30 top-14 right-0 flex  gap-3 rounded-md  bg-secondary_color/80 text-white `}
          >
            {domains.map((item, idx) => (
              <li
                onClick={() => handleCheckDomain(item)}
                key={idx}
                className={`cursor-pointer ${
                  item === name ? "bg-white/40" : "hover:bg-white/40"
                } p-2 duration-200`}
              >
                {item}
              </li>
            ))}
          </motion.ul>
        </div>
        <button className="px-4 py-[12px]  duration-300 text-lg rounded-r-md  bg-secondary_color font-medium text-white hover:bg-btn_hover_color hover:text-text_color border-0">
          Search
        </button>
      </div>
      <div className="font-jakarta text-white flex items-center gap-3 justify-center">
        <h4 className="font-medium">Popular Domain:</h4>
        <div className="flex gap-3 flex-wrap">
          {domainName.map((item, idx) => (
            <p
              key={idx}
              className="bg-white/10 backdrop-blur-sm border border-gray-300 flex gap-1 py-1 rounded-lg px-3"
            >
              <span className="font-bold">{item.name}</span>
              <span className="font-medium">${item.price}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DomainChecker;
