import CheckIcon from "@/components/icon/CheckIcon";
import Question from "@/components/icon/Question";
import ToolTip from "@/components/toolTip/ToolTip";
import { websiteSolution } from "@/utility/home";
import allInWebsiteImage from "@/assets/images/all-in-one-website-solution.jpg";
import Image from "next/image";

const AllInWebsiteSolution = () => {
  return (
    <section className="section-padding">
      <div className="custom-container flex lg:items-center lg:flex-row flex-col gap-10">
        <div className="flex-1">
          <h2 className="section-title text-primary_color ">
            All in One Website Solution
          </h2>
          <ul className="mt-8 flex flex-col gap-2 xl:text-lg text-sm sm:text-base">
            {websiteSolution.map((item, idx) => (
              <li key={idx} className=" gap-2 sm:gap-1  flex justify-center items-center">
                <div className="w-[5%]">
                  <CheckIcon />
                </div>
                <div className="flex-1 flex items-center">
                  {item.list}
                  {item.tolTip ? (
                    <div className="cursor-pointer group relative ">
                      <Question />
                      <ToolTip text={item.tolTip} />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 ">
          <Image
            className="w-full sm:h-[400px] object-cover"
            src={allInWebsiteImage}
            alt="all in one website image"
          />
        </div>
      </div>
    </section>
  );
};

export default AllInWebsiteSolution;
