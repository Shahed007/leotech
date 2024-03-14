import heroBg from "@/assets/home/hero-background-image.jpg";
import Image from "next/image";
const Hero = () => {
  return (
    <header className="font-inter relative hero-section flex justify-center items-center">
      <Image
        src={heroBg}
        alt="hero bg image"
        className="absolute object-cover top-0 left-0 w-full h-full z-10"
      />
      <div className="bg-primary_color/85 z-20 absolute top-0 left-0 w-full h-full"></div>
      <div className="relative z-30">
        <div className="text-center">
          <h1 className="font-jakarta font-bold text-white text-[55px] ">
            Find Your Perfect Domain Name
          </h1>
          <p className="text-base font-jakarta text-white">
            Web Hosting, Domain Name and Hosting Center Solutions
          </p>
        </div>
        <div className=" flex items-center mt-12 mb-10">
          <input
            className="block w-full px-3 py-3 rounded-l-md bg-white"
            type="text"
          />
          <button className="p-3 bg-gray-200">.com</button>
          <button className="px-4 py-[10px] text-lg rounded-r-md duration-300 hover:bg-secondary_color font-medium text-white bg-text_color border-0">
            Search
          </button>
        </div>
        <div className="font-jakarta text-white flex items-center gap-3 justify-center">
          <h4 className="font-medium">Popular Domain:</h4>
          <div className="flex gap-3 flex-wrap">
            {domainName.map((item, idx) => (
              <p key={idx} className="bg-white/10 backdrop-blur-sm border border-gray-300 flex gap-1 py-1 rounded-lg px-3">
                <span className="font-bold">{item.name}</span>
                <span className="font-medium">{item.price}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

const domainName = [
  {
    name: ".com",
    price: 6.19,
  },
  {
    name: ".net",
    price: 6.19,
  },
  {
    name: ".info",
    price: 6.19,
  },
  {
    name: ".org",
    price: 6.19,
  },
  {
    name: ".store",
    price: 6.19,
  },
];

export default Hero;
