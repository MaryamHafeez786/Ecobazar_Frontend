import React from "react";
import plant from "../../assets/plant.svg";
import heart from "../../assets/Heart.svg";
import bagCart from "../../assets/bagCart.svg";
import devider from "../../assets/Devider.svg";
import { CiMail } from "react-icons/ci";
import chevrondown from "../../assets/ChevronDown.svg";
import phone from "../../assets/Phone.svg";
import { Link } from "react-router-dom";
const Navbar = ({
  navLocation,
  stylelocation,
  stylenav,
  locationimg,
  naveng,
  navusd,
  imgdrop,
  imgdown,
  styleEng,
  styleUsd,
}) => {
  return (
    <>
      <div
        className="h-42 bg-gray-800 flex justify-around"
        style={stylelocation}
      >
        <div className="flex gap-2">
          <img src={locationimg} alt="" />
          <h5 className="text-gray-300" style={stylenav}>
            {navLocation}
          </h5>
        </div>
        <div className="flex gap-3">
          <h5 className="text-gray-300" style={styleEng}>
            {naveng}
          </h5>
          <img src={imgdrop} alt="" className="text-gray-300" />
          <h5 className="text-gray-300" style={styleUsd}>
            {navusd}
          </h5>
          <img src={imgdown} alt="" className="text-gray-300" />
          <h5 className="text-gray-300">|</h5>

          <Link to="/">
            <p className="text-gray-300">Sign In</p>
          </Link>
          <p className="text-gray-300">/</p>
          <Link to="/signup">
            <p className="text-gray-300">Sign Up </p>
          </Link>
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
                <button className="p-2 pl-5 ">Search</button>
              </div>
            </div>
          </form>
        </div>
        <div className="flex mr-52">
          <div className="flex gap-2">
            <img src={heart} alt="" width={32} height={33} />
            <img src={devider} alt="" width={1} height={25} />
            <img src={bagCart} alt="" width={32} height={33} />
          </div>
          <div className="flex flex-col mt-10 ml-3">
            <h6>Shopping cart:</h6>
            <h6>$57.00</h6>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <ul className="mt-6 flex flex-row gap-10 ml-48">
          <ul className="flex gap-1">
            <li>Home</li>
            <img src={chevrondown} alt="" />
          </ul>
          <ul className="flex gap-1">
            <li>Shop</li>
            <img src={chevrondown} alt="" />
          </ul>
          <ul className="flex gap-1">
            <li>Pages</li>
            <img src={chevrondown} alt="" />
          </ul>
          <ul className="flex gap-1">
            <li>Blog</li>
            <img src={chevrondown} alt="" />
          </ul>
          <ul className="flex gap-10">
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
          <div className="flex gap-2 ml-96 ">
            <img src={phone} alt="" />
            <h6>(219) 555-0114 </h6>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
