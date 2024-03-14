import React from "react";

const MobileNavbar = ({
  isOpen,
  handleOpen,
}: {
  isOpen: boolean;
  handleOpen: () => void;
}) => {
  return (
    <>
      <aside
        className={`${
          isOpen ? "translate-x-0" : ""
        }  fixed translate-x-full duration-500 z-20 transition-transform top-0 right-0 min-h-dvh bg-primary_color border-l border-secondary_color shadow-md  w-[300px]`}
      >
        <div className="flex justify-start mb-4 p-2">
          <button
            onClick={handleOpen}
            className="text-white rounded active:scale-95 duration-300 p-2 bg-primary_color outline-none border border-secondary_color shadow-sm"
          >
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
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </aside>
      <div
        onClick={handleOpen}
        className={`z-10 bg-gray-700/50 cursor-pointer ease-in duration-300 transition-transform  h-dvh w-dvw fixed top-0 right-0 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      ></div>
    </>
  );
};

export default MobileNavbar;
