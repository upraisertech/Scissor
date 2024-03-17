import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";
import Footer from "@/components/footer";

const ContactUs = () => {
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
      id=""
      className="flex-inline mx-auto mt-[8em] w-full items-center justify-center"
    >
      <div className="mb-3 text-center">Log in with:</div>
      <div className="flex items-center justify-center gap-3">
        <button
          type="submit"
          className="w- rounded-lg border-[1px] bg-primary px-10 py-2 text-white hover:border-primary hover:bg-white hover:text-primary"
          // onClick={}
        >
          Google
        </button>
        <button
          type="submit"
          className="w- rounded-lg border-[1px] bg-primary px-10 py-2 text-white hover:border-primary hover:bg-white hover:text-primary"
          // onClick={}
        >
          Apple
        </button>
      </div>

      <div className="mt-8 flex flex-row items-center justify-center gap-5 px-[15em]">
        <hr className="my-1.5 h-0.5 w-[25%] bg-gray-300" />
        <span className="font-medium text-black">OR</span>
        <hr className="my-1.5 h-[2px] w-[25%] bg-gray-300" />
      </div>

      <motion.div>
        {/* FORM */}
        <div className="items-center justify-center gap-8 rounded-lg bg-white px-[24em] px-4 py-8 pb-[6em] shadow md:flex">
          <motion.div
            className="mt-10 w-[40em] md:mt-0"
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
                placeholder="Email address or username"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mb-3 mt-[-12px] text-primary-500">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <div className="flex w-full flex-col">
                <input
                  className={`${inputStyles}`}
                  placeholder="Password"
                  type="password"
                  {...register("password", {
                    required: true,
                    maxLength: 2000,
                  })}
                />
                {errors.message && (
                  <p className="mb-3 mt-[-12px] text-primary-500">
                    {errors.message.type === "required" &&
                      "This field is required."}
                    {errors.message.type === "maxLength" &&
                      "Max length is 2000 char."}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full rounded-full border-[1px] bg-primary px-10 py-2 text-white hover:border-primary hover:bg-white hover:text-primary"
                // onClick={}
              >
                SUBMIT
              </button>
            </form>

            <div className="my-5 text-center">
              Don’t have an account? <span className="text-primary font-bold">Sign up</span>
            </div>
            <div className="mt-3 w-[25em] text-center">
              By signing in with an account, you agree to Sciccor's{" "}
              <b>Terms of Service, Privacy Policy </b>and{" "}
              <b> Acceptable Use Policy.</b>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </section>
  );
};

export default ContactUs;
