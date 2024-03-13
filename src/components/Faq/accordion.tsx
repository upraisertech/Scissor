import React from "react";
import open from "./faq.svg";
import { AnimatePresence, motion } from "framer-motion";
// import { SelectedPage } from "@/shared/types";
// import close from "../../assets/accordionclose.svg";

type Props = {
  accordionId: any;
  question: string;
  answer: string;
  isOpen: any;
  toggleAccordion: any;
  // setSelectedPage: (value: SelectedPage) => void;
};

const Accordion = ({
  accordionId,
  question,
  answer,
  isOpen,
  toggleAccordion,
}: Props) => {
  return (
    <div className='flex w-[70vw] lg:max-w-[40vw] duration-300 flex-col text-black pt-2 my-2 justify-center'>
      <div
        onClick={() => toggleAccordion(accordionId)}
        className='border-b border-b-stone-600 w-full cursor-pointer flex flex-row  p-3 space-x-3 justify-between items-center'
      >
        <p className={`text-[15px] md:text-[18.687px] font-bold`}>{question}</p>
        <div>
          {isOpen ? (
            <div className="font-bold text-[20px]">-</div>
          ) : (
            <div className="font-bold text-[20px]">+</div>
          )}
        </div>
      </div>
      {/* <div className='flex flex-col bord text-black justify-center items-center'> */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, scale: 0 }}
            animate={{ height: 100, opacity: 1, scale: 1 }}
            exit={{ height: 0, opacity: 0, scale: 0 }}
            transition={{ type: "tween", duration: 0.5 }}
            className='bg-stone-100 flex mt-2 flex-col  w-full bg-opacity-30 rounded-md justify-center items-center'
            id='content'
          >
            <p className='text-[15.29px] p-2 '>{isOpen ? answer : ""}</p>
          </motion.div>
        )}
      </AnimatePresence>
      {/* </div> */}
    </div>
  );
};

export default Accordion;
