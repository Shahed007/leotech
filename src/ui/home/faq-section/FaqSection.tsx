import faqImage from "@/assets/gif-image/FAQs.gif";
import AccordionContainer from "@/components/accordion/AccordionContainer";
import { accordion } from "@/utility/accordion";
import Image from "next/image";
const FaqSection = () => {
  return (
    <section className="pb-[120px] ">
      <div className="custom-container flex lg:gap-0 gap-8 md:flex-row flex-col">
        <div className="flex-1 ">
          <h2 className="section-title leading-10 mb-5">
            Got questions? Well, <br /> we&apos;ve got answers.
          </h2>
          <p className="lg:w-[60%] mb-10">
            From 24/7 support that acts as your extended team to incredibly fast
            website performance
          </p>
          <Image
            className="h-[350px] object-cover "
            src={faqImage}
            alt="faq image"
          />
        </div>
        <div className="flex-1 flex items-center">
          <AccordionContainer accordion={accordion} />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
