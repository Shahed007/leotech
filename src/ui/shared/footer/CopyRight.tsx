"use client";
import moment from "moment";

const CopyRight = () => {
  return (
    <p className="text-sm font-semibold text-primary_color md:text-start text-center">
      {" "}
      &copy;2004 - {moment().format("yyyy")} LeoTech.com - Premium Web Hosting,
      Cloud, VPS & Domain Registration Services.
    </p>
  );
};

export default CopyRight;
