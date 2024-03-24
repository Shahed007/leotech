import { HostingPlanData } from "@/utility/dataTypes";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";
import CheckIcon from "../icon/CheckIcon";

const HostingPlanCard = ({
  category,
  description,
  price,
  main_features,
  isClicked,
}: HostingPlanData) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`card-shadow   ${
        category === "Reseller Hosting" ? " rounded-t-none " : "rounded-b-md "
      } rounded-md h-full hover:-translate-y-5 hover:bg-primary_color/20 duration-500 relative  border-primary_color/30 border`}
    >
      {category === "Reseller Hosting" ? (
        <div className="bg-primary_color pt-[3px] leading-10 overflow-hidden z-10 relative h-[40px] text-center flex items-center justify-center  -mt-10 card-shadow border-primary_color/30 border-t border-r border-l rounded-t-md">
          <h2 className="text-white uppercase tracking-widest font-bold font-jakarta ">
            Make Money
          </h2>
        </div>
      ) : (
        <div></div>
      )}
      <div className="px-5 py-8 z-20 h-full  flex flex-col ">
        <div className="flex flex-col gap-3 grow h-full ">
          <h2 className="font-jakarta text-2xl sm:text-3xl font-bold text-text_color">
            {category}
          </h2>
          <p className="font-inter text-sm font-normal">{description}</p>
        </div>
        <div className=" h-full pt-4 pb-10 border-b border-b-secondary_color/30">
          <h1 className="text-4xl font-medium font-jakarta text-primary_color">
            <span className="text-base  text-text_color">TK</span>
            {isClicked ? (
              <>
                <span> {(price * 12 * 0.8).toFixed(0)}/</span>
                <span className="text-text_color text-base ">Yearly</span>
              </>
            ) : (
              <>
                <span> {price}/</span>
                <span className="text-text_color text-base ">Month</span>
              </>
            )}
          </h1>

          <div className="w-full mt-8">
            <Link
              href="/"
              className={`w-full flex justify-center btn ${
                category === "Reseller Hosting"
                  ? "primary-btn"
                  : "secondary-btn"
              } p-2`}
            >
              Get Started
            </Link>
          </div>
        </div>
        <ul className="mt-10  h-full  text-base text-text_color flex flex-col gap-3  ">
          {isOpen
            ? main_features?.map((item, idx) => (
                <li
                  style={{ borderBottom: "1px dashed black" }}
                  key={idx}
                  className="flex items-center gap-1 text-base text-text_color"
                >
                  <CheckIcon /> <Markdown>{item}</Markdown>
                </li>
              ))
            : main_features?.slice(0, 6).map((item, idx) => (
                <li
                  style={{ borderBottom: "1px dashed black" }}
                  key={idx}
                  className="flex items-center gap-1 text-base text-text_color"
                >
                  <CheckIcon /> <Markdown>{item}</Markdown>
                </li>
              ))}
        </ul>
        <div className="text-center pt-4  text-base font-medium ">
          <button
            className="hover:text-primary_color duration-150 text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            More Fetuses
          </button>
        </div>
      </div>
    </div>
  );
};

export default HostingPlanCard;
