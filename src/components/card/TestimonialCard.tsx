import { testimonialDataTypes } from "@/utility/dataTypes";

const TestimonialCard = ({
  name,
  position,
  description,
  image,
}: testimonialDataTypes) => {
  return (
    <div className="py-10 h-full  flex flex-col gap-3">
      <div className="p-7 card-shadow grow rounded-md">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
