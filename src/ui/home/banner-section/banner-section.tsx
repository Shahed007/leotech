import CheckIcon from "@/components/icon/CheckIcon";
import Question from "@/components/icon/Question";
import ToolTip from "@/components/toolTip/ToolTip";
import { websiteSolution } from "@/utility/home";
import allInWebsiteImage from "@/assets/images/all-in-one-website-solution.jpg";
import Image, { StaticImageData } from "next/image";
import { bannerSection } from "@/utility/dataTypes";

const BannerSection = ({
  className = "lg:flex-row flex-col",
  title = "All in One Website Solution",
  image = allInWebsiteImage,
  data = websiteSolution,
}: {
  className?: string;
  title: string;
  image: StaticImageData;
  data: bannerSection[];
}) => {
  return (
    <section className="section-padding">
      <div
        className={`custom-container flex lg:items-center ${className}   gap-10`}
      >
        <div className="flex-1">
          <h2 className="section-title text-primary_color ">{title}</h2>
          <ul className="mt-8 flex flex-col gap-2 xl:text-lg text-sm sm:text-base">
            {data.map((item, idx) => (
              <li
                key={idx}
                className=" gap-2 sm:gap-1  flex justify-center items-center"
              >
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
            className="w-full sm:h-[400px] object-cover  "
            src={image}
            alt="all in one website image"
          />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
