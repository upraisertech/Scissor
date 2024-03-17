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
      id="myurls"
      className="mx-auto flex w-full mt-[12em] items-center justify-center pb-32 before:-top-120 before:-left-420 before:absolute before:z-[-1] before:content-PasteURL"
    >
      <motion.div
        // onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* FORM */}
        <div className="px-4 py-8 bg-white items-center justify-center justify-between gap-8 md:flex rounded-lg shadow">
          <motion.div
            className="mt-10 md:mt-0 w-[40em]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e"
              method="POST"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="Paste URL here..."
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}

              <div className="flex mt-3 gap-3 w-full">
                <select className={`${inputStyles} w-[50%]`}>
                  <option>Choose Domain</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
                <div className="flex flex-col w-[50%]">
                  <input
                    className={`${inputStyles}`}
                    placeholder="Type Alias here"
                    {...register("message", {
                      required: true,
                      maxLength: 2000,
                    })}
                  />
                  {errors.message && (
                    <p className="mt-1 text-primary-500">
                      {errors.message.type === "required" &&
                        "This field is required."}
                      {errors.message.type === "maxLength" &&
                        "Max length is 2000 char."}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-full border-[1px] bg-primary px-10 py-2 text-white hover:border-primary hover:bg-white hover:text-primary"
                // onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              >
                SUBMIT
              </button>
            </form>
            <div className="mt-3 text-primary w-[25em]">By clicking TrimURL, I agree to the Terms of Service, Privacy Policy and Use of Cookies.</div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
