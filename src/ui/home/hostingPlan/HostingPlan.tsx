"use client";
import HostingPlanCard from "@/components/card/HostingPlanCard";
import { HostingPlanData } from "@/utility/dataTypes";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import hostingLine from "@/assets/icons/hosting-plan-icon.svg";
import Image from "next/image";

type Props = {
  hosting: HostingPlanData[];
};

const HostingPlan = ({ hosting }: Props) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const variants = {
    left: { left: "0px", x: "5%", y: "5%" },
    right: { right: "2px", x: "95%" }, // Adjusted to move to the right
  };

  return (
    <section className="py-[120px] bg-gradient-to-r from-gray-50 to-primary_color/20">
      <div className="custom-container">
        <div className="text-center flex flex-col justify-center items-center gap-2">
          <h2 className="section-title">Choose Hosting Plan</h2>
          <p className="sm:w-[40%] w-full">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, esse
            illum neque beatae at mollitia.
          </p>
        </div>
        <div className="flex justify-center sm:flex-row flex-col  items-center  mt-12 ">
          <div className="bg-white overflow-hidden relative gap-14 rounded-md px-5 text-base shadow-sm shadow-gray-400 text-primary_color h-[45px] flex justify-between">
            <button
              className={`${
                isClicked ? "text-primary_color" : "text-white"
              } z-20`}
              onClick={() => setIsClicked(false)}
            >
              Month
            </button>
            <motion.div
              variants={variants}
              initial="left"
              animate={isClicked ? "right" : "left"}
              transition={{ duration: 0.5, type: "spring" }}
              className="block absolute rounded-lg z-10   bg-primary_color h-[40px] w-1/2"
            ></motion.div>
            <button
              className={`${
                isClicked ? "text-white" : "text-primary_color"
              } z-20`}
              onClick={() => setIsClicked(true)}
            >
              Yearly
            </button>
          </div>
          <div className="flex sm:justify-start justify-end  w-[70%] sm:w-auto ">
            <div>
              <Image
                className="-mt-5 sm:block hidden"
                src={hostingLine}
                alt="hosting line"
              />
            </div>
            <h2 className="text-primary_color font-medium sm:text-left text-right">
              20%
            </h2>
          </div>
        </div>
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-6 items-center">
          {hosting?.map((item, idx) => (
            <HostingPlanCard isClicked={isClicked} key={idx} {...item} />
          ))}
        </div>
        <div className="mt-8 flex justify-center items-center">
          <Link
            className="text-primary_color font-semibold text-lg"
            href="/pay-trams"
          >
            Pay Trams
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HostingPlan;
