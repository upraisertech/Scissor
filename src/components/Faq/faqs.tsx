import React, { useState } from "react";
import Accordion from "./accordion";
import { faqdata } from "./faqdata";
import Line from "@/assets/Line.svg";

const FAQs = () => {
  const [openAccordionId, setOpenAccordionId] = useState(null);

  const toggleAccordion = (accordionId: null) => {
    setOpenAccordionId((prevId) =>
      prevId === accordionId ? null : accordionId
    );
  };

  return (
    <div className="lg:p-40 relative flex w-full  flex-col items-center justify-center gap-3  p-10 md:flex-row">
      <div className=" self-center">
        <div className="flex justify-center text-center text-[35px] font-bold">
          <img alt="logo" className="h-10 w-6" src={Line} />FAQ’S
        </div>
        <div className="mt-3 flex  w-full flex-col items-center self-center">
          {faqdata.map((faq) => (
            <div key={faq.id} className="">
              <Accordion
                accordionId={faq.id}
                answer={faq.answer}
                question={faq.question}
                isOpen={openAccordionId === faq.id}
                toggleAccordion={toggleAccordion}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
