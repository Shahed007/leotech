import TimeLineCard from "@/components/card/TimeLineCard";
import { timeLine } from "@/utility/timeLine";
import Link from "next/link";

const WhyChoseUs = () => {
  return (
    <section className="section-padding section-bg">
      <div className="custom-container flex lg:flex-row flex-col justify-center lg:gap-0 gap-10 lg:justify-between items-center mb-12">
        <div className="lg:block flex justify-center items-center flex-col">
          <h2 className="section-title">Why Chose Us</h2>
          <p className="font-inter text-base lg:text-start text-center text-text_color sm:w-[60%] mt-2">
            No matter which service you choose, you can expect the highest
            performance.
          </p>
        </div>
        <div>
          <Link
            href=""
            className="primary-btn btn px-6 py-3 bg-transparent hover:bg-primary_color hover:text-white text-primary_color"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="hidden custom-container lg:grid grid-cols-1 md:grid-cols-4">
        <div className="min-h-[2px] bg-primary_color/60 w-full flex items-center justify-center">
          <div className="flex justify-center items-center h-5 w-5 rounded-full bg-secondary_color -mb-[10px] -mt-[10px]">
            <span className="block h-2 w-2 bg-btn_hover_color rounded-full"></span>
          </div>
        </div>
        <div className="min-h-[2px] bg-primary_color/60 w-full flex items-center justify-center">
          <div className="flex justify-center items-center h-5 w-5 rounded-full bg-secondary_color -mb-[10px] -mt-[10px]">
            <span className="block h-2 w-2 bg-btn_hover_color rounded-full"></span>
          </div>
        </div>
        <div className="min-h-[2px] bg-primary_color/60 w-full flex items-center justify-center">
          <div className="flex justify-center items-center h-5 w-5 rounded-full bg-secondary_color -mb-[10px] -mt-[10px]">
            <span className="block h-2 w-2 bg-btn_hover_color rounded-full"></span>
          </div>
        </div>
        <div className="min-h-[2px] bg-primary_color/60 w-full flex items-center justify-center">
          <div className="flex justify-center items-center h-5 w-5 rounded-full bg-secondary_color -mb-[10px] -mt-[10px]">
            <span className="block h-2 w-2 bg-btn_hover_color rounded-full"></span>
          </div>
        </div>
      </div>
      <div className="custom-container flex gap-6 mt-12 lg:flex-row flex-col">
        <div className="lg:hidden grid grid-cols-2">
          <div className="min-h-[2px] bg-primary_color/60 w-full flex items-center justify-center">
            <div className="flex justify-center items-center h-5 w-5 rounded-full bg-secondary_color -mb-[10px] -mt-[10px]">
              <span className="block h-2 w-2 bg-btn_hover_color rounded-full"></span>
            </div>
          </div>
          <div className="min-h-[2px] bg-primary_color/60 w-full flex items-center justify-center">
            <div className="flex justify-center items-center h-5 w-5 rounded-full bg-secondary_color -mb-[10px] -mt-[10px]">
              <span className="block h-2 w-2 bg-btn_hover_color rounded-full"></span>
            </div>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          {timeLine.slice(0, 2).map((item, idx) => (
            <TimeLineCard key={idx} {...item} />
          ))}
        </div>
        <div className="hidden"></div>
        <div className="lg:hidden grid grid-cols-2">
          <div className="min-h-[2px] bg-primary_color/60 w-full flex items-center justify-center">
            <div className="flex justify-center items-center h-5 w-5 rounded-full bg-secondary_color -mb-[10px] -mt-[10px]">
              <span className="block h-2 w-2 bg-btn_hover_color rounded-full"></span>
            </div>
          </div>
          <div className="min-h-[2px] bg-primary_color/60 w-full flex items-center justify-center">
            <div className="flex justify-center items-center h-5 w-5 rounded-full bg-secondary_color -mb-[10px] -mt-[10px]">
              <span className="block h-2 w-2 bg-btn_hover_color rounded-full"></span>
            </div>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          {timeLine.slice(2).map((item, idx) => (
            <TimeLineCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoseUs;
