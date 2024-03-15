import heroBg from "@/assets/home/hero-background-image.jpg";
import DomainChecker from "@/components/domainChecker/DomainChecker";
import Image from "next/image";
const Hero = () => {
  return (
    <header className="font-inter overflow-visible relative hero-section flex justify-center items-center">
      <Image
        src={heroBg}
        alt="hero bg image"
        className="absolute object-cover top-0 left-0 w-full h-full z-10"
      />
      <div className="bg-primary_color/85 z-20 absolute top-0 left-0 w-full h-full"></div>
      <div className="container">
        <div className="relative  z-30">
          <div className="text-center">
            <h1 className="font-jakarta font-bold text-white hero-title ">
              Find Your Perfect Domain Name
            </h1>
            <p className="text-base font-jakarta text-white">
              Web Hosting, Domain Name and Hosting Center Solutions
            </p>
          </div>
        </div>
        <DomainChecker />
      </div>
    </header>
  );
};

export default Hero;
