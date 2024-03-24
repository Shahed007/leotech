import Hero from "@/components/hero/Hero";
import HostingSolutions from "@/ui/home/HostingSolutions/HostingSolutions";
import AllInWebsiteSolution from "@/ui/home/allInWebsiteSolution/AllInWebsiteSolution";
import HostingPlan from "@/ui/home/hostingPlan/HostingPlan";
import { hostingPlans } from "@/utility/fetchData";

export default async function Home() {
  const hosting = await hostingPlans(
    "https://raw.githubusercontent.com/Shahed007/asets/main/hosting_plan.json"
  );
  return (
    <>
      <Hero
        title="Find Your Perfect Domain Name"
        description="Web Hosting, Domain Name and Hosting Center Solutions"
      />
      <main className="font-inter">
        <HostingSolutions />
        <HostingPlan hosting={hosting} />
        <AllInWebsiteSolution />
      </main>
    </>
  );
}
