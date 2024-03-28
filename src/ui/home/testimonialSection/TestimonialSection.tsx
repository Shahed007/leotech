import TestimonialSlider from "@/components/testimonialSlider/TestimonialSlider";

const TestimonialSection = () => {
  return (
    <section className="section-padding">
      <div className="custom-container mb-12 flex justify-center items-center text-center">
        <h2 className="section-title">Featured Client Stories</h2>
      </div>
      <TestimonialSlider />
      
    </section>
  );
};

export default TestimonialSection;
