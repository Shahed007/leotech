"use client"
import { domainName, domains } from "@/utility/domain_checker_info";

const DomainChecker = () => {
  return (
    <div className="relative z-30 max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="font-jakarta font-bold text-white hero-title ">
          Find Your Perfect Domain Name
        </h1>
        <p className="text-base font-jakarta text-white">
          Web Hosting, Domain Name and Hosting Center Solutions
        </p>
      </div>
      <div className=" flex items-center mt-12 mb-10">
        <input
          className="block w-full focus:duration-200 transition-all border-[2px] focus-within:border-btn_hover_color border-transparent focus:outline-none px-3 py-3 rounded-l-md bg-white"
          type="text"
        />
        <div className="relative">
          <button className="p-[14px] bg-gray-200 flex gap-2 items-center">
            <span>.com</span>
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
          </button>
          <ul className="absolute shadow-sm border border-x-secondary_color min-w-[300px] z-30 top-14 right-0 flex  gap-3 rounded-md    bg-secondary_color/80 text-white">
            {domains.map((item, idx) => (
              <li
                key={idx}
                className="cursor-pointer hover:bg-white/40 p-2 duration-200"
              >
                {item}
              </li>
            ))}
          </ul>
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
