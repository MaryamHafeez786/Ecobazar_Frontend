import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import mail from "../../../assets/mail.svg";
import lock from "../../../assets/lock.svg";
import eye from "../../../assets/eye.svg";
import Navbar from "../../../components/Navbar/Navbar";
import Hero from "../../../components/Hero/Hero";
import Footer from "../../../components/Footer/Footer";
import Location from "../../../assets/location.svg";
import Toast, {
  showSuccessToast,
  showErrorToast,
} from "../../../components/Toast/Toast";
import Spinner from "../../../components/Spinner/Spinner"; // Import Spinner

const SignIn = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Add loading state

  const handleLogin = () => {
    setLoading(true); // Show spinner on login button click
    // Simulating login success and navigation
    const isLoginSuccessful = true; // Replace with actual login logic

    setTimeout(() => {
      if (isLoginSuccessful) {
        showSuccessToast("Login successful!");
        setTimeout(() => {
          setLoading(false); // Hide spinner
          navigate("/Home"); // Navigate to home page
        }, 1000); // Delay for toast
      } else {
        setLoading(false); // Hide spinner
        showErrorToast("Login failed. Please check your credentials.");
      }
    }, 2000); // Simulate a 2-second API call
  };

  return (
    <>
      <Navbar
        navLocation={"Store Location: Lincoln- 344, Illinois, Chicago, USA"}
        locationimg={Location}
        naveng={"Eng"}
        navusd={"Usd"}
      />
      <Hero />
      <Toast />
      <Spinner loading={loading} /> {/* Show Spinner */}
      <section className=" dark:bg-gray-900 ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold ml-36 leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign In
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div className="email">
                  <img src={mail} alt="" className=" ml-2" />
                  <div className="relative">
                    <input
                      type="text"
                      id="Email"
                      className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900  border-none border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="Email"
                      className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >
                      Email
                    </label>
                  </div>
                </div>
                <div className="password">
                  <img src={lock} alt="" className="ml-2 " />
                  <div className="relative">
                    <input
                      type="password"
                      id="Password"
                      className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900  border-none border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="Password"
                      className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >
                      Password
                    </label>
                  </div>
                  <img src={eye} alt="" className="ml-28" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <Link
                    to="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="button"
                  onClick={handleLogin}
                  className="w-full text-white bg-darkgreen hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  disabled={loading} // Disable button while loading
                >
                  Login
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400 ml-20">
                  Don't have an account yet?
                  <Link
                    to="/signup"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500 ml-2 "
                  >
                    Sign up
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

export default SignIn;
