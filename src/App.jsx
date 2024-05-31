import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/Auth/SignIn";
import SignUp from "./Pages/Auth/SignUp";
import Navbar from "./components/Navbar/Navbar";
import Lottie from "lottie-react";
import LoaderMain from ".././src/assets/Loadermain.json";
import Hero from "./components/Hero/Hero";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 3 seconds

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-[100vh] ">
          <Lottie animationData={LoaderMain} style={{ width: 300 }} />
        </div>
      ) : (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Hero />
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
