import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import shapeBg from "@/assets/icons/service-bg-shape.svg";

type serviceCardProps = {
  title: string;
  description: string;
  icon: StaticImageData;
  link: string;
};
const ServiceCard = ({ title, description, icon, link }: serviceCardProps) => {
  return (
    <div
      className="px-4 h-full overflow-hidden group py-8 card-shadow rounded-md relative "
    >
      <div className="flex sm:flex-row flex-col  gap-4 h-full relative z-20">
        <Image className="h-14" src={icon} alt={`icon of ${title}`} />
        <div className="flex flex-col  h-full">
          <h3 className="text-xl font-bold font-jakarta text-text_color group-hover:text-black ">
            {title}
          </h3>
          <p className="font-inter text-sm mt-2 group-hover:text-black text-gray-600 grow">
            {description}
          </p>

          <Link
            href={link}
            className="mt-12 group-hover:text-black  flex items-center gap-2 hover:gap-4 duration-300"
          >
            <span className="block">View Details</span>
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
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="card-gradient absolute z-10 bottom-0 left-0 w-full h-0 group-hover:h-full duration-500">
        <Image
          className="h-full w-full object-cover"
          src={shapeBg}
          alt="shape image"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
