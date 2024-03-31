import commonHero from "@/assets/images/comon-hero.jpg";
import Image from "next/image";
import commonHeroIntroImage from "@/assets/images/common-hero-intro-image1.png";
import CheckIcon from "../icon/CheckIcon";
import { sharedHosting } from "@/utility/sharedHosting";
const CommonHero = (
  {
    title = 'Shared',
    secondTitle = 'Hosting',
    list = sharedHosting,
    price = 4.99
  } : {title: string, secondTitle: string, list: string[], price: number}
) => {
  return (
    <section className="h-dvh relative font-inter text-white">
      <div className="z-10 absolute top-0 left-0 right-0 w-full h-full">
        <Image
          className="w-full h-full object-cover"
          src={commonHero}
          alt="common hero bg"
        />
      </div>
      <div className="absolute top-0 left-0 w-full z-20 bg-primary_color/20 h-full"></div>
      <div className="custom-container lg:gap-0 gap-10 flex items-center relative z-30 h-full ">
        <div className="flex-1 hidden md:flex items-end h-full relative justify-center ">
          <Image
            className="lg:w-[55%]  h-[440px]  -ml-16"
            src={commonHeroIntroImage}
            alt="shared hosting"
          />
          <div className="top-[34%] left-[50%] absolute h-32 w-32  ">
            <div className="animate-ping rounded-full  absolute top-0 left-0 h-full w-full bg-primary_color/50"></div>
            <div className="h-32 w-32 flex flex-col absolute top-0 left-0 font-jakarta justify-center  items-center bg-secondary_color/50 backdrop-blur-sm rounded-full  ">
              <h3>Starting At</h3>
              <h1 className="text-lg font-bold">${price}</h1>
              <p>/mo</p>
            </div>
          </div>
        </div>
        <div className="flex-1 lg:text-start text-center flex flex-col lg:items-start items-center">
          <div className="mb-2 relative h-8 w-48 bg-primary_color/80 rounded-md backdrop-blur-md flex items-center justify-center">
    
            <p className=" ">Starting at <span className="text-lg font-bold text-white">$4.99</span>/mo</p>
          </div>
          <h1 className="lg:text-7xl text-3xl sm:text-5xl  mb-5 font-bold ">
            {title} <span className="text-btn_hover_color">{secondTitle}</span>
          </h1>
          <ul className="space-y-2 mb-7">
            {list.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-1 font-medium font-jakarta"
              >
                <CheckIcon className="text-white" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
          <div>
            <button className="btn hover:text-white primary-btn px-7 md:px-12 py-2  text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonHero;
