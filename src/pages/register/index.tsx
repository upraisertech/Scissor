import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ShowHidePassword, { ConfirmPassword } from "@/shared/ShowHidePassword";
import { motion } from "framer-motion";
import Google from "@/assets/googleg.svg";
import Apple from "@/assets/apple.svg";
import HText from "@/shared/HText";
import Footer from "@/components/footer";

const Register = () => {
  const inputStyles = `mb-5 w-full rounded-lg border border-primary outline-none
  px-5 py-3 text-primary ring-primary focus-within:ring-1`;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
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
      className="flex-inline mx-auto mt-[4em] w-full items-center justify-center"
    >
      <div className="mb-3 text-center">Sign up with:</div>
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

      {/* FORM */}
      <div className="items-center justify-center gap-8 rounded-lg bg-white px-[24em] px-4 py-8 pb-[6em] shadow md:flex">
        <div className="mt-10 w-[40em] md:mt-0">
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e"
            method="POST"
          >
            <input
              className={inputStyles}
              type="text"
              placeholder="Username"
              {...register("username", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="mt-1 text-primary-500">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            <input
              className={inputStyles}
              type="text"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="mb-3 mt-[-12px] text-primary-500">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <div className="mb-5 flex h-[48px] items-center justify-between rounded-[10px] border-[1px] border-primary pr-[12px] ring-primary focus-within:ring-1">
              <input
                type={showPasswordToggle ? "text" : "password"}
                placeholder="Password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                className="border-none bg-transparent px-5 text-base outline-none"
                name="password"
                id="password"
              />
              <ShowHidePassword
                onClick={showPassword}
                showPasswordToggle={showPasswordToggle}
              />
            </div>

            <div className="flex h-[48px] items-center justify-between rounded-[10px] border-[1px] border-primary pr-[12px] ring-primary focus-within:ring-1">
              <input
                type={confirmPasswordToggle ? "text" : "password"}
                value={confirm_password}
                className="border-none bg-transparent px-5 text-base outline-none"
                required
                onChange={(e) => setConfirm_password(e.target.value)}
                placeholder="Confirm password"
              />
              <ConfirmPassword
                onClick={confirmPassword}
                confirmPasswordToggle={confirmPasswordToggle}
              />
            </div>
            <p className="mb-8 text-[14px] text-gray-300">
              6 or more characters, one number, one uppercase & one lower case.
            </p>

            <button
              type="submit"
              className="w-full rounded-full border-[1px] bg-primary px-10 py-2 text-white hover:border-primary hover:bg-white hover:text-primary"
              // onClick={}
            >
              Sign up with Email
            </button>
          </form>

          <div className="my-5 text-center">
            Already have an account? {" "}
            <button
              onClick={() => navigate("/sign-in")}
              className="font-bold text-primary"
            >
              Log in
            </button>
          </div>
          <div className="mt-3 w-[25em] text-center">
            By signing in with an account, you agree to Sciccor's{" "}
            <b>Terms of Service, Privacy Policy </b>and{" "}
            <b> Acceptable Use Policy.</b>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Register;
