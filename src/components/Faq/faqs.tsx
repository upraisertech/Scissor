import React, { useState } from "react";
import Accordion from "./accordion";
import { faqdata } from "./faqdata";

const FAQs = () => {
  const [openAccordionId, setOpenAccordionId] = useState(null);

  const toggleAccordion = (accordionId: null) => {
    setOpenAccordionId((prevId) =>
      prevId === accordionId ? null : accordionId
    );
  };

  return (
    <div className='flex flex-col p-10 lg:p-40  relative md:flex-row gap-3 justify-center  items-center w-full'>
      <div className=' self-center'>
        <div className='text-2xl md:text-4xl font-bold tracking-wide'>
          FAQ’S
        </div>
        <div className='flex self-center  w-full flex-col items-center mt-3'>
          {faqdata.map((faq) => (
            <div key={faq.id} className=''>
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
