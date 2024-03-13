import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `mb-5 w-full rounded-lg border border-primary
  px-5 py-3 placeholder-primary text-primary`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section
      id="revolutionizing"
      className="before:-top-120 before:-left-420 mx-auto mt-[12em] flex w-full items-center justify-center pb-32 before:absolute before:z-[-1] before:content-Revolutionizing"
    >
      <motion.div
      className=""
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <div className="text-[27px] font-bold text-white">
          Revolutionizing Link Optimization
        </div>

        <button
          type="submit"
          className="mt-5 w-[12em] rounded-full bg-primary px-10 py-2 text-white hover:border-[1px] hover:border-primary hover:bg-white hover:text-primary"
          onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        >
          Get Started
        </button>
      </motion.div>
    </section>
  );
};

export default ContactUs;
