import TestimonialSlider from "@/components/testimonialSlider/TestimonialSlider";
import Link from "next/link";

const TestimonialSection = () => {
  return (
    <section className="section-padding">
      <div className="custom-container mb-12 flex justify-center items-center text-center">
        <h2 className="section-title">Featured Client Stories</h2>
      </div>
      <TestimonialSlider />

      <div className="custom-container flex justify-center mt-6">
        <Link
          href="/"
          className="font-jakarta underline text-lg font-medium text-primary_color"
        >
          See More
        </Link>
      </div>
    </section>
  );
};

export default TestimonialSection;
