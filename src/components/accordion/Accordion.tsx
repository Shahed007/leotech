import { accordionDataTypes } from "@/utility/dataTypes";
import { Dispatch, SetStateAction } from "react";

type accordionFunctional = {
  id: number;
  title: string;
  description: string;
  isOpen: boolean;
  toggleAccordion: (id: number) => void;
};

const Accordion = ({
  id,
  title,
  description,
  isOpen,
  toggleAccordion,
}: accordionFunctional) => {
  return (
    <div>
      <div
        className="shadow-sm px-3 py-4 rounded-t-md cursor-pointer border flex items-center"
        onClick={() => toggleAccordion(id)}
      >
        <h3 className="w-[90%] font-jakarta font-bold text-black">{title}</h3>

        <span className="flex-1 flex justify-end text-primary_color">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          )}
        </span>
      </div>
      <div
        className={`shadow-sm border-b duration-700  border-l border-r ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        } overflow-hidden`}
      >
        <p className="p-2 text-base  font-inter font-normal text-text_color">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Accordion;
