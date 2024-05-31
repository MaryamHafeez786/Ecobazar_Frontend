import React from "react";
import Breadcrumbs from "../../assets/Breadcrumbs.svg";
import home from "../../assets/home.svg";
import vector from "../../assets/Vector.svg";

const Hero = () => {
  const myStyle = {
    backgroundImage: `url(${Breadcrumbs})`,
    width: "209px",
    height: "402px",
  };

  return (
    <>
      <div className="">
        <div className="flex gap-3 mb-5">
          <img src={home} alt="" />
          <img src={vector} alt="" />
          <h5>Account</h5>
          <img src={vector} alt="" />
          <h5 className="text-green-500">Login</h5>
        </div>
      </div>
    </>
  );
};

export default Hero;
