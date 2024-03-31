import { testimonialDataTypes } from "@/utility/dataTypes";
import Image from "next/image";
import quotationMark from "@/assets/icons/quote.png";

const TestimonialCard = ({
  name,
  position,
  description,
  image,
}: testimonialDataTypes) => {
  return (
    <div className="py-10 h-full  flex flex-col gap-3">
      <div className="p-7 card-shadow grow rounded-md">
        <Image
          className="h-8 w-8 mb-2"
          src={quotationMark}
          alt="quotation mark"
        />
        <p>{description}</p>
        <div className="flex justify-end mt-2">
          <Image
            className="h-8 w-8 mb-2 relative rotate-180"
            src={quotationMark}
            alt="quotation mark"
          />
        </div>
      </div>

      <div className="shadow-inner mt-4 bg-gray-50 p-3 rounded-md border flex items-center gap-3">
        <div className="h-14 w-14  rounded-full shadow-sm overflow-hidden">
          <Image
            className="h-full  w-full object-cover"
            src={image}
            alt={`image of ${name}`}
          />
        </div>

        <div>
          <h5 className="font-medium font-jakarta text-black">{name}</h5>
          <p className="text-sm">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
