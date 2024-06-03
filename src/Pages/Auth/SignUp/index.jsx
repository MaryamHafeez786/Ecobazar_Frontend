import React from "react";
import mail from "../../../assets/mail.svg";
import lock from "../../../assets/lock.svg";
import eye from "../../../assets/eye.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";
import Hero from "../../../components/Hero/Hero";
import Footer from "../../../components/Footer/Footer";
const SignUp = () => {
  const navigate = useNavigate();
  const handleHomePage = () => {
    navigate("/Home");
  };
  return (
    <>
      <Navbar
        navLocation={"Store Location: Lincoln- 344, Illinois, Chicago, USA"}
      />
      <Hero />
      <section class=" dark:bg-gray-900 ">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg  shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold ml-36 leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign Up
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div className="email">
                  <img src={mail} alt="" className=" ml-2" />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class=" sm:text-sm    p-2.5 border-none  dark:text-white"
                    placeholder="Email"
                    required=""
                  />
                </div>
                <div className="password">
                  <img src={lock} alt="" className="ml-2 " />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    class="   sm:text-sm    p-2.5 border-none  dark:text-white"
                    required=""
                  />
                  <img src={eye} alt="" className="ml-28" />
                </div>
                <div className="password1">
                  <img src={lock} alt="" className="ml-2 " />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Confirm Password"
                    class="   sm:text-sm    p-2.5 border-none  dark:text-white"
                    required=""
                  />
                  <img src={eye} alt="" className="ml-28" />
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label
                        for="remember"
                        class="text-gray-500 dark:text-gray-300"
                      >
                        Accept all terms & Conditions
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleHomePage()}
                  className="w-full text-white bg-darkgreen hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create Account
                </button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400 ml-20">
                  Already have account
                  <Link
                    to="/"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500 ml-2 "
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SignUp;
