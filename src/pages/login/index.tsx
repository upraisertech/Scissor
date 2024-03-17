import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ShowHidePassword from "@/shared/ShowHidePassword";
import { motion } from "framer-motion";
import Google from "@/assets/googleg.svg";
import Apple from "@/assets/apple.svg";
import HText from "@/shared/HText";
import Footer from "@/components/footer";

const Login = () => {
  const inputStyles = `mb-5 w-full rounded-lg border border-primary outline-none
  px-5 py-3 text-primary ring-primary focus-within:ring-1`;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPasswordToggle, setShowPasswordToggle] = useState(false);
  const [confirmPasswordToggle, setConfirmPasswordToggle] = useState(false);
  const navigate = useNavigate();

  const showPassword = () => {
    setShowPasswordToggle(!showPasswordToggle);
  };

  const confirmPassword = () => {
    setConfirmPasswordToggle(!confirmPasswordToggle);
  };
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
      className="flex-inline mx-auto mt-[6em] w-full items-center justify-center"
    >
      <div className="mb-3 text-center">Log in with:</div>
      <div className="flex items-center justify-center gap-3">
        <button
          type="submit"
          className="w- flex items-center justify-center gap-3 rounded-lg border-[1px] bg-primary px-6 py-2 text-white hover:border-primary hover:bg-white hover:text-primary"
          // onClick={}
        >
          <img src={Google} /> Google
        </button>
        <button
          type="submit"
          className="w- flex items-center justify-center gap-3 rounded-lg border-[1px] bg-primary px-6 py-2 text-white hover:bg-gray-400"
          // onClick={}
        >
          <img src={Apple} /> Apple
        </button>
      </div>

      <div className="mt-6 flex flex-row items-center justify-center gap-5 px-[15em]">
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

              <div className="border-primary flex h-[48px] mb-8 items-center justify-between rounded-[10px] border-[1px] pr-[12px] ring-primary focus-within:ring-1">
                <input
                  type={showPasswordToggle ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-none px-5 bg-transparent text-base outline-none"
                  name="password"
                  id="password"
                />
                <ShowHidePassword
                  onClick={showPassword}
                  showPasswordToggle={showPasswordToggle}
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full border-[1px] bg-primary px-10 py-2 text-white hover:border-primary hover:bg-white hover:text-primary"
                // onClick={}
              >
                Log in
              </button>
            </form>

            <div className="my-5 text-center">
              Don’t have an account?{" "}
              <button
                onClick={() => navigate("/sign-up")}
                className="font-bold text-primary"
              >
                Sign up
              </button>
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

export default Login;
