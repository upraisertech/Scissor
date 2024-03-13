import { BenefitType, SelectedPage } from "@/shared/types";
import { UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Pricing_ from "./Pricing";

const prices: Array<BenefitType> = [
  {
    title: "Basic",
    price: "",
    sub_title: "Free",
    description: "Free plan for all users",
  },
  {
    title: "Professional",
    price: "",
    sub_title: "$15/month",
    description: "Ideal for business creators",
  },
  {
    title: "Teams",
    price: "",
    sub_title: "$25/month",
    description: "Share with up to 10 users",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Pricing = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="pricing"
      className="mx-auto w-full items-center justify-center py-[1em]"
    >
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Pricing)}>
        {/* HEADER */}
        <div className="mx-auto w-full items-center justify-center text-center">
          <div className="text-[35px] font-bold">
            A <span className="text-primary">price perfect</span> for your
            needs.
          </div>
          <div className="mx-[29em] text-sm">
            From catering for your personal, business, event, socials needs, you
            can be rest assured we have you in mind in our pricing.
          </div>
        </div>

        {/* Pricing */}
        <motion.div
          className="mx-12 mt-9 items-center justify-between gap-3 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {prices.map((pricing: BenefitType) => (
            <Pricing_
              key={pricing.title}
              title={pricing.title}
              price={pricing.price}
              sub_title={pricing.sub_title}
              description={pricing.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        <div className="mt-12 flex items-center justify-center gap-3">
          <button
            className="w-[15em] rounded-full border-[1px] border-primary bg-white px-10 py-2 text-primary hover:bg-primary hover:text-white"
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
          >
            Get Custom Pricing
          </button>
          <button
            className="w-[15em] rounded-full border-[1px] bg-primary px-10 py-2 text-white hover:border-primary hover:bg-white hover:text-primary"
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
          >
            Select Pricing
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Pricing;
