import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
      id="home"
      className="bg-block mt-[10rem] w-full items-center justify-center gap-16 py-6 before:absolute before:-top-0 before:-left-0 md:h-full md:pb-0 md:before:content-heroBG"
    >
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto items-center justify-center px-[1rem] text-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-8 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-48"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="text-[40px] font-bold leading-[60px]">
                Optimize Your Online Experience with Our Advanced{" "}
                <span className="text-primary">URL Shortening </span>
                Solution
                <div className="before:-top-120 before:-left-420 text-[40px] font-bold leading-[60px] before:absolute before:z-[-1] before:content-scissortext"></div>
              </div>
            </div>

            <p className="mx-[3rem] mt-5 text-sm">
              Personalize your shortened URLs to align with your brand identity.
              Utilize custom slugs, branded links, and domain customization
              options to reinforce your brand presence and enhance user
              engagement.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center justify-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary hover:text-black"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
      </motion.div>

      <div className="relative mt-[-3em] ml-[-18em] flex mx-auto items-center justify-center">
        <div className="text-[40px] font-bold">
          <div className="before:-top-500 before:ml-[-4em] text-[40px] font-bold leading-[60px] before:absolute before:z-[1] md:before:content-triangle"></div>
          <div className="w-[500px] h-[260px] mr-[-13em] border-3-black border before:z-[5] rounded-md"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
