import ServiceCard from "@/components/card/ServiceCard";
import { hostingSolutions } from "@/utility/hosting_solutions";
import Link from "next/link";

const SectionServices = () => {
  return (
    <section className="section-bg section-padding">
      <div className="custom-container gap-6 grid grid-cols-1 lg:grid-cols-3">
        {hostingSolutions.map((item, idx) => (
          <ServiceCard key={idx} {...item} />
        ))}
      </div>
      <div className="flex justify-center  items-center mt-8 max-w-xl mx-auto">
        <div className="px-4  sm:text-base text-sm font-normal lg:justify-start sm:flex-row flex-col flex items-center gap-2 py-3 text-black rounded-md bg-secondary_color/40 shadow-sm shadow-secondary_color/40 border border-secondary_color/40 backdrop-blur-md font-jakarta">
          <p className="  ">Looking for a hosting Services?</p>
          <div>
            <Link href="services" className="underline text-nowrap">
              Click Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionServices;
