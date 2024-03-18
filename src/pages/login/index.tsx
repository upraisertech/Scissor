import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ShowHidePassword from "@/shared/ShowHidePassword";
import { motion } from "framer-motion";
import Google from "@/assets/googleg.svg";
import Apple from "@/assets/apple.svg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase";
import { toast } from "react-toastify";
import Footer from "@/components/footer";
import Loader from "@/shared/Loader";

const Login = () => {
  const inputStyles = `mb-5 w-full rounded-lg border border-primary outline-none
  px-5 py-3 text-black ring-primary focus-within:ring-1`;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPasswordToggle, setShowPasswordToggle] = useState(false);
  const navigate = useNavigate();

  const showPassword = () => {
    setShowPasswordToggle(!showPasswordToggle);
  };

  const login = async () => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
      setLoading(false);
      console.log(result);
    } catch (error) {
      console.log(error);
      setLoading(loading);
    }
  };

  return (
    <section
      id=""
      className="flex-inline mx-auto mt-[6em] px-[15em] w-full items-center justify-center"
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

      <div className="mt-6 flex flex-row items-center justify-center gap-5">
        <hr className="my-1.5 h-0.5 w-[25%] bg-gray-300" />
        <span className="font-medium text-black">OR</span>
        <hr className="my-1.5 h-[2px] w-[25%] bg-gray-300" />
      </div>

      <motion.div>
        {/* FORM */}
        <div className="items-center justify-center gap-8 pt-7 px-4 pb-[6em] flex">
          <motion.div
            className="mt-10 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div>
              <input
                className={inputStyles}
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                placeholder="Email address or username"
                required
              />
              {/* {errors.email && (
                <p className="mb-3 mt-[-12px] text-primary-500">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )} */}

              <div className="mb-8 flex h-[48px] items-center justify-between rounded-[10px] border-[1px] border-primary pr-[12px] ring-primary focus-within:ring-1">
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
              {!loading ? (
                <button
                  type="submit"
                  className="w-full rounded-full border-[1px] bg-primary px-10 py-2 text-white hover:border-primary hover:bg-white hover:text-primary"
                  onClick={login}
                >
                  Log in
                </button>
              ) : (
                <Loader />
              )}
            </div>

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
