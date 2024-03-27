import { timeLineDataType } from "@/utility/dataTypes";
import Image from "next/image";
import shapeBg from "@/assets/icons/service-bg-shape.svg";

const TimeLineCard = ({ title, description, icon }: timeLineDataType) => {
  return (
    <div className="card-shadow p-3 xl:p-5 rounded-md relative group">
      <div className="flex justify-center items-center z-20 relative">
        <Image src={icon} alt={title} />
      </div>
      <div className="pt-8 pb-5 z-20 relative">
        <h3 className="font-bold text-base xl:text-lg text-black mb-3 font-jakarta">
          {title}
        </h3>
        <p className="text-base group-hover:text-black font-normal font-inter ">
          {description}
        </p>
      </div>
      <div className="absolute top-0 left-0 w-full h-full opacity-0 duration-300 group-hover:opacity-100 rounded-md overflow-hidden card-gradient z-10">
        <Image className="h-full w-full" src={shapeBg} alt="card shape bg" />
      </div>
    </div>
  );
};

export default TimeLineCard;
