import Hero from "@/components/hero/Hero";
import HostingSolutions from "@/ui/home/HostingSolutions/HostingSolutions";
import HostingPlan from "@/ui/home/hostingPlan/HostingPlan";

export default function Home() {
  return (
    <>
      <Hero
        title="Find Your Perfect Domain Name"
        description="Web Hosting, Domain Name and Hosting Center Solutions"
      />
      <main className="font-inter">
        <HostingSolutions />
        <HostingPlan />
      </main>
    </>
  );
}
