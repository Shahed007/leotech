"use client";

import { accordionDataTypes } from "@/utility/dataTypes";
import { useState } from "react";
import Accordion from "./Accordion";

const AccordionContainer = ({
  accordion,
}: {
  accordion: accordionDataTypes[];
}) => {
  // Manage open/close state for each accordion item
  const [openStates, setOpenStates] = useState<null | number>(null);

  const toggleAccordion = (id: number) => {
    setOpenStates((prevState) => (prevState === id ? null : id));
  };

  // console.log(openStates);

  return (
    <div>
      {accordion?.map(({ id, title, description }) => (
        <Accordion
          key={id}
          id={id}
          title={title}
          description={description}
          isOpen={openStates === id}
          toggleAccordion={toggleAccordion}
        />
      ))}
    </div>
  );
};

export default AccordionContainer;
