"use client";

import { FaArrowDown, FaArrowUp, FaCode } from "react-icons/fa6";
import React, { useState } from "react";

export default function Services() {
  const accordionData = [
    {
      title: "Panel 1",
      content: "Content for Panel 1",
    },
    {
      title: "Panel 2",
      content: "Content for Panel 2",
    },
    {
      title: "Panel 3",
      content: "Content for Panel 3",
    },
  ];
  return (
    <section className="services">
      <div className="bg-clrBlack rounded-lg p-8 flex flex-row justify-between mt-12">
        <h3 className="font-normal text-xl text-clrManhattan">SERVICES</h3>
        <FaCode />
      </div>

      <div>
        <Accordion panels={accordionData} />
      </div>
    </section>
  );
}

interface AccordionProps {
  panels: { title: string; content: React.ReactNode }[];
}

const Accordion: React.FC<AccordionProps> = ({ panels }) => {
  const [activePanel, setActivePanel] = useState<number | null>(null);

  const togglePanel = (index: number) => {
    setActivePanel(activePanel === index ? null : index);
  };

  return (
    <div>
      {panels.map((panel, index) => (
        <div key={index}
        className="bg-clrBlack rounded-lg p-8 mt-1"
        >
          <div
            onClick={() => togglePanel(index)}
            className="flex flex-row justify-between font-light text-lg"
          >
            {panel.title}
            {activePanel === index? <FaArrowUp />:<FaArrowDown/>}
          </div>
          {activePanel === index && <div className="pt-6 font-extralight text-md">{panel.content}</div>}
        </div>
      ))}
    </div>
  );
};
