import Button from "@mui/icons-material";
import Link from "next/link";
import Question from "../icon/Question";
import CheckIcon from "../icon/CheckIcon";
const JoinNow = () => {
  return (
    <section className="pb-[120px]">
      <div className="custom-container flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h2 className="section-title text-primary_color text-center">
            Join 2,002,312 Website Owners
          </h2>
          <button className="btn primary-btn px-7 py-3 mt-8 mb-2">Get Started</button>
          <div className="flex items-center gap-1 text-sm justify-center">
            <CheckIcon />
            <p>30-Day Money-Back Guarantee</p>
            <Question />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinNow;
