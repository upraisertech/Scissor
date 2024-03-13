import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  title: string;
  price: string;
  sub_title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Pricing = ({
  sub_title,
  title,
  price,
  description,
  setSelectedPage,
}: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="inline-flex w-[370px] flex-col items-start justify-start rounded-xl border border-blue-700 bg-white py-6 pl-[4em] shadow"
    >
      <div className="text-center font-['Gilroy-Medium'] text-2xl font-normal leading-loose text-neutral-900">
        {title}
      </div>
      <div className="inline-flex flex-col items-start justify-start gap-4 self-stretch">
        <div className="flex flex-col items-start justify-start gap-2">
          <div className="text-center font-['Gilroy-Bold'] text-[40px] font-normal leading-[48px] text-neutral-900">
            {sub_title}
          </div>
          <div className="text-center font-['Gilroy-Medium'] text-xl font-normal leading-loose text-neutral-900">
            {description}
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-6">
          <div className="inline-flex items-center justify-center gap-2">
            <div className="relative h-4 w-4"></div>
            <div className="text-center font-['Gilroy-Medium'] text-sm font-normal leading-normal text-neutral-900">
              Unlimited URL Shortening
            </div>
          </div>
          <div className="inline-flex items-center justify-center gap-2">
            <div className="relative h-4 w-4"></div>
            <div className="text-center font-['Gilroy-Medium'] text-sm font-normal leading-normal text-neutral-900">
              Basic Link Analytics
            </div>
          </div>
          <div className="inline-flex items-center justify-start gap-2">
            <div className="relative h-4 w-4"></div>
            <div className="text-center font-['Gilroy-Medium'] text-sm font-normal leading-normal text-black">
              Customizable Short Links
            </div>
          </div>
          <div className="inline-flex items-center justify-start gap-2">
            <div className="relative h-4 w-4"></div>
            <div className="text-center font-['Gilroy-Medium'] text-sm font-normal leading-normal text-black">
              Standard Support
            </div>
          </div>
          <div className="inline-flex items-center justify-start gap-2">
            <div className="relative h-4 w-4"></div>
            <div className="text-center font-['Gilroy-Medium'] text-sm font-normal leading-normal text-black">
              Ad-supported
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Pricing;
