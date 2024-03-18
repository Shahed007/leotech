import heroBg from "@/assets/home/hero-background-image.jpg";
import DomainChecker from "@/components/domainChecker/DomainChecker";
import Image from "next/image";
const Hero = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <header className="font-inter overflow-visible relative hero-section flex justify-center items-center">
      <Image
        src={heroBg}
        alt="hero bg image"
        className="absolute object-cover top-0 left-0 w-full h-full z-10"
      />
      <div className="bg-primary_color/85 z-20 absolute top-0 left-0 w-full h-full"></div>
      <div className="custom-container">
        <div className="relative  z-30">
          <div className="text-center">
            <h1 className="font-jakarta font-bold text-white hero-title ">
              {title}
            </h1>
            <p className="text-base font-jakarta text-white">{description}</p>
          </div>
        </div>
        <DomainChecker />
      </div>
    </header>
  );
};

export default Hero;
