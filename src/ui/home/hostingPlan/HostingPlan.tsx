import HostingPlanCard from "@/components/card/HostingPlanCard";
import { HostingPlanData } from "@/utility/dataTypes";
import Link from "next/link";

const getData = async () => {
  try {
    const res = await fetch(
      "https://raw.githubusercontent.com/Shahed007/asets/main/hosting_plan.json",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const HostingPlan = async () => {
  const hostingPlans: HostingPlanData[] = await getData();

  // console.log(hostingPlans);
  return (
    <section className="py-[120px] bg-gradient-to-r from-gray-50 to-primary_color/20">
      <div className="custom-container">
        <div className="text-center flex flex-col justify-center items-center gap-2">
          <h2 className="section-title">Choose Hosting Plan</h2>
          <p className="w-[40%]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, esse
            illum neque beatae at mollitia.
          </p>
        </div>
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-6 items-center">
          {hostingPlans.map((item, idx) => (
            <HostingPlanCard key={idx} {...item} />
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
