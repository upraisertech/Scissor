import { SelectedPage, ClassType } from "@/shared/types";
import { motion } from "framer-motion";


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Features = ({ setSelectedPage }: Props) => {
  return (
    <section id="features" className="w-full bg-[#F9FBFD] pb-[5em] pt-[10em]">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Features)}
      >
        <div className="relative mx-auto mt-[14em] flex items-center justify-center">
          <div className="text-[40px] font-bold w-[12em]">
            One Stop. Four <span className="text-primary">Possibilities</span>.
          </div>
          <div className="flex flex-row gap-6">
            <div className="">
              <div className="text-[35px] font-bold">5M</div>
              <div>Active users</div>
            </div>
            <div className="">
              <div className="text-[35px] font-bold">60M</div>
              <div className="w-[7em]">Links & QR codes created</div>
            </div>
            <div className="">
              <div className="text-[35px] font-bold">1B</div>
              <div className="w-[12em]">Clicked & Scanned connections</div>
            </div>
            <div className="">
              <div className="text-[35px] font-bold">300K</div>
              <div>App Integrations</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Features;
