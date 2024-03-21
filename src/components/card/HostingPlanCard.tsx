import { HostingPlanData } from "@/utility/dataTypes";
import Link from "next/link";

const HostingPlanCard = ({
  category,
  description,
  price,
  main_features,
}: HostingPlanData) => {
  const {
    storage = undefined,
    bandWidth = undefined,
    support = undefined,
    email = undefined,
    ssl = undefined,
    freeDomain = undefined,
    dataTransfer = undefined,
    security = undefined,
    dataBase = undefined,
    speed = undefined,
  } = main_features;
  return (
    <div
      className={`card-shadow   ${
        category === "Reseller Hosting" ? " rounded-t-none" : "rounded-b-md "
      } rounded-md min-h-[200px]  border-primary_color/30 border`}
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
      <div className="px-5 py-8 z-20">
        <div className="flex flex-col gap-3 ">
          <h2 className="font-jakarta text-3xl font-bold text-text_color">
            {category}
          </h2>
          <p className="font-inter text-sm font-normal">{description}</p>
        </div>
        <div className=" pt-4 pb-10 border-b border-b-secondary_color/30">
          <h1 className="text-4xl font-medium font-jakarta text-primary_color">
            <span className="text-base  text-text_color">TK</span>
            <span> {price}/</span>
            <span className="text-text_color text-base ">Month</span>
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
        <ul className="mt-10">
          <li className="flex items-center gap-1">
            <span className="text-primary_color">
              <CheckIcon />
            </span>
            <p className="text-base text-text_color">
              <span className="font-bold">{storage?.[0]} </span>
              {storage?.[1]}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  );
};

export default HostingPlanCard;
