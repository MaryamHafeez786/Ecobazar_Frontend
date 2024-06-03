import React from "react";
import { CiMail } from "react-icons/ci";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import pp from "../../assets/pp.svg";
import insta from "../../assets/insta.svg";
import plant from "../../assets/plant.svg";
import ApplePay from "../../assets/ApplePay.svg";
import Visa from "../../assets/Visa.svg";
import Discover from "../../assets/Discover.svg";
import Mastercard from "../../assets/Mastercard.svg";
import secureCart from "../../assets/secureCart.svg";
const Footer = () => {
  return (
    <>
      <div className="h-44 bg-grayl flex ">
        <div className="pt-14">
          <h2 class="text-lg font-bold ml-36 leading-tight tracking-tight  text-gray-900 md:text-2xl dark:text-white">
            Subcribe our Newsletter
          </h2>
          <h5 className="text-gray-400 ml-36 w-96 mt-1">
            Pellentesque eu nibh eget mauris congue mattis mattis nec
            tellus.Phasellus imperdiet elit eu magna.
          </h5>
        </div>
        <div className="pt-14 ml-28">
          <div className="form-common1">
            <CiMail size={20} style={{ marginLeft: 20 }} />
            <input
              type="email"
              placeholder="your email address"
              required
              style={{
                border: "none",
                paddingLeft: "10px",
              }}
            />
            {/* <div className="ml-4"> */}
            <span>
              {" "}
              <button className="bg-darkgreen rounded-3xl h-12 w-36 ml-7">
                Subscribe
              </button>
            </span>

            {/* </div> */}
          </div>
        </div>
        <div className="flex gap-2 ml-32">
          <img src={facebook} alt="" width={32} height={33} />
          <img src={twitter} alt="" width={32} height={33} />
          <img src={pp} alt="" width={32} height={33} />
          <img src={insta} alt="" width={32} height={33} />
        </div>
      </div>

      <div className="bg-gray-900 h-96">
        <div className="flex justify-around">
          <div className="flex flex-col mt-8 ">
            <div className="flex gap-2 ml-24">
              <img src={plant} alt="" />
              <h2 className="text-4xl font-Poppins font-bold text-white mt-3">
                Ecobazar
              </h2>
            </div>
            <p className="w-72 text-gray-500 mt-3 ml-24">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magna congue nec.
            </p>
            <div className="flex gap-3 mt-3 ml-24">
              <div
                style={{
                  borderBottom: "2px solid darkgreen",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                }}
              >
                <h5 className="text-white">(219) 555-0114</h5>
              </div>
              <h5 className="text-gray-500">or</h5>
              <div
                style={{
                  borderBottom: "2px solid darkgreen",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                }}
              >
                <h5 className="text-white">Proxy@gmail.com</h5>
              </div>
            </div>
          </div>
          <div className="flex gap-32 mt-12 mr-28">
            <div>
              <ul className="">
                <li className=" text-white mt-2 font-bold">My Account</li>
                <li className="  text-gray-500 mt-2 font-bold">My Account</li>
                <li className="  text-gray-500 mt-2 font-bold ">
                  Order History
                </li>
                <li className="  text-gray-500 mt-2 font-bold ">
                  Shopping Card
                </li>
                <li className="  text-gray-500 mt-2 font-bold ">Wishlist</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className=" text-white font-bold mt-2">Helps</li>
                <li className="  text-gray-500 font-bold mt-2">Contact</li>
                <li className="  text-gray-500 font-bold mt-2">Faqs</li>
                <li className="  text-gray-500 font-bold mt-2">
                  Terms & Condition
                </li>
                <li className="  text-gray-500 mt-2 font-bold ">
                  Privacy Policy
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className=" text-white mt-2 font-bold ">Proxy</li>
                <li className="  text-gray-500 mt-2 font-bold ">About</li>
                <li className="  text-gray-500 mt-2 font-bold ">Shop</li>
                <li className="  text-gray-500 mt-2 font-bold ">Product</li>
                <li className="  text-gray-500  mt-2 font-bold ">
                  Track Order
                </li>
              </ul>
            </div>
            <div>
              <ul className="">
                <li className=" text-white font-bold mt-2 ">Categories</li>
                <li className="  text-gray-500 font-bold mt-2">
                  Fruit & Vegetables
                </li>
                <li className="  text-gray-500 font-bold mt-2">Meat & Fish</li>
                <li className="  text-gray-500 font-bold  mt-2">
                  Bread & Bakery
                </li>
                <li className="  text-gray-500 font-bold mt-2">
                  Beauty & Health
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              borderBottom: "2px solid darkgreen",
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none",
              width: "1200px",
              marginTop: "75px",
              marginLeft: "150px",
            }}
          ></div>
          <div className="flex justify-around">
            <h5 className="text-gray-500  mt-7 mr-48">
              Ecobazar eCommerce © 2021 Ecobazar. All rights reserved.
            </h5>
            <div className="flex gap-4 mt-6">
              <img src={ApplePay} alt="" />
              <img src={Visa} alt="" />
              <img src={Discover} alt="" />
              <img src={Mastercard} alt="" />
              <img src={secureCart} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
