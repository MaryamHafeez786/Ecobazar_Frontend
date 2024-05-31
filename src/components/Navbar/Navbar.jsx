import React from "react";
import location from "../../assets/location.svg";
import vv from "../../assets/vv.svg";
import plant from "../../assets/plant.svg";
import heart from "../../assets/Heart.svg";
import bagCart from "../../assets/bagCart.svg";
import devider from "../../assets/Devider.svg";
import { IoSearchOutline } from "react-icons/io5";
import { CiMail, CiLock } from "react-icons/ci";
const Navbar = () => {
  return (
    <>
      <div className="h-42 bg-gray-800 flex justify-around ">
        <div className="flex gap-2">
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
          <h5 className="text-gray-300">|</h5>
          <h5 className="text-gray-300">Sign In / Sign Up</h5>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="mt-10 flex ml-48">
          <div className="flex gap-2">
            <img src={plant} alt="" className="mb-8" />
            <h2 className="text-4xl font-Poppins font-bold">Ecobazar</h2>
          </div>
        </div>
        <div className="md-box card-body flex ml-32">
          <form>
            <div className="form-common">
              <CiMail size={20} style={{ marginLeft: 20 }} />
              <input
                type="email"
                placeholder="Enter your email"
                required
                style={{
                  border: "none",
                  padding: "0px",
                  paddingLeft: "10px",
                }}
              />
              <div className="button">
                <button className="p-3 pl-6 ">Search</button>
              </div>
            </div>
          </form>
        </div>
        <div className="flex mr-52">
          <div className="flex gap-2">
            <img src={heart} alt="" />
            <img src={devider} alt="" />
            <img src={bagCart} alt="" />
          </div>
          <div className="flex flex-col mt-10 ml-3">
            <h6>Shopping cart:</h6>
            <h6>$57.00</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
