import Hero from "@/components/hero/Hero";
import HostingSolutions from "@/ui/home/HostingSolutions/HostingSolutions";
import BannerSection from "@/ui/home/banner-section/banner-section";
import HostingPlan from "@/ui/home/hostingPlan/HostingPlan";
import SectionServices from "@/ui/home/section-services/SectionServices";
import { hostingPlans } from "@/utility/fetchData";
import { websiteSolution, websiteSpeed } from "@/utility/home";
import allInWebsiteSolution from "@/assets/images/all-in-one-website-solution.jpg";
import websiteSpeedImage from "@/assets/images/website-speed.png";
import WhyChoseUs from "@/ui/home/whayChoseUs/WhyChoseUs";
import TestimonialSection from "@/ui/home/testimonialSection/TestimonialSection";
import FaqSection from "@/ui/home/faq-section/FaqSection";

export default async function Home() {
  const hosting = await hostingPlans(
    "https://raw.githubusercontent.com/Shahed007/asets/main/hosting_plan.json"
  );
  return (
    <>
      {/* Home Hero section */}
      <Hero
        title="Find Your Perfect Domain Name"
        description="Web Hosting, Domain Name and Hosting Center Solutions"
      />
      <main className="font-inter">
        {/* Home Hosting Solution Section */}
        <HostingSolutions />
        {/* Home Hosting Plan Section */}
        <HostingPlan hosting={hosting} />
        {/* Home all in one website solution section */}
        <BannerSection
          image={allInWebsiteSolution}
          title="All in One Website Solution"
          data={websiteSolution}
        />
        {/* Home services section */}
        <SectionServices />
        {/* Home Maximize website speed section */}
        <BannerSection
          className="lg:flex-row-reverse flex-col-reverse"
          title="Maximize Website Speed"
          data={websiteSpeed}
          image={websiteSpeedImage}
        />
        {/* Home Why Chose Us Section  */}
        <WhyChoseUs />
        {/* Home Testimonial section */}
        <TestimonialSection />
        {/* FAQ Section */}
        <FaqSection />
      </main>
    </>
  );
}
