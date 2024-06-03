import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import dropimg from "../../assets/vv.svg";
const Home = () => {
  return (
    <>
      <Navbar
        navLocation={"Store Location: Lincoln- 344, Illinois, Chicago, USA"}
        stylelocation={{ backgroundColor: "#DAE5DA" }}
        stylenav={{ color: "#2B572E" }}
        naveng={"Eng"}
        navusd={"Usd"}
        imgdown={dropimg}
        imgdrop={dropimg}
        styleEng={{ color: "#2B572E" }}
        styleUsd={{ color: "#2B572E" }}
      />
      <div>
        {/* <div className="flex gap-2">
          <img src={location} alt="" />
          <h5 className="text-gray-300">
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </h5>
        </div>
        <div className="flex gap-3">
          <h5 className="text-gray-300">Eng</h5>
          <img src={vv} alt="" className="text-gray-300" />
          <h5 className="text-gray-300">USD</h5>
          <img src={vv} alt="" className="text-gray-300" />
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default Home;
