import React from "react";
import Breadcrumbs from "../../assets/Breadcrumbs.svg";
import home from "../../assets/home.svg";
import vector from "../../assets/Vector.svg";

const Hero = () => {
  const myStyle = {
    backgroundImage: `url(${Breadcrumbs})`,
    width: "1920px",
    height: "120px",
  };

  return (
    <>
      <div style={myStyle}>
        <div className="flex gap-3 mt-5">
          <div className="flex gap-3 ml-48 mt-10 ">
            <img src={home} alt="" />
            <img src={vector} alt="" />
            <h5 className="text-gray-400">Account</h5>
            <img src={vector} alt="" />
            <h5 className="text-green-500">Login</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
