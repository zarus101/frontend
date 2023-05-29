import React from "react";
import LogoImg from "../assests/images/vedu-logo.png";
import { footer1, footer2, icons } from "../assests/dummyData";
import { NavLink } from "react-router-dom";
import { AiTwotonePhone } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";
import { IoLocation } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className="main-footer h-200 w-full overflow-hidden  relative">
        <div className="bg-image zoom_out w-full h-full absolute top-0 left-0 bg-no-repeat bg-center bg-cover"></div>

        <div className="widgets-section">
          <div className="containers py-16">
            <div className=" text-white grid grid-cols-4 gap-5 md:grid-cols-2 mobile:grid-cols-1">
              <div className="box">
                <img src={LogoImg} alt="logo" className="text-white w-[100px]" />
                <p className=" text-white text-[23px] font-semibold my-10">Get 26,000+ best online courses from us</p>
                <div className="right flex items-center">
                  {icons.map((icons, i) => (
                    <NavLink key={i} to={"/null"} className="w-12 h-12 flex items-center justify-center text-lg bg-[rgba(255,255,255,0.1)] rounded-full mr-3 transition duration-700 ease-in-out hover:bg-primary">
                      {icons.icon}
                    </NavLink>
                  ))}
                </div>
              </div>
              <div className="box">
                <h3 className="text-[25px] font-semibold my-3">Explore</h3>

                <ul className="mt-8">
                  {footer1.map((item, ind) => (
                    <li key={ind} className="mb-3 transition ease-in-out duration-700  hover:cursor-pointer">
                      <NavLink to={item.path} className="">
                        <span className="hover-text text-white font-extralight text-[20px]">{item.text}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="box">
                <h3 className="text-[25px] font-semibold my-3">Other Pages</h3>
                <ul className="mt-8">
                  {footer2.map((item, index) => (
                    <li key={index} className="mb-3 transition ease-in-out duration-700  hover:cursor-pointer">
                      <NavLink to={item.path} className="">
                        <span className=" hover-text text-white font-extralight text-[20px]">{item.text}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="box">
                <h3 className="text-[25px] font-semibold my-3">Contact</h3>
                <ul className="mt-8">
                  <li className="mb-3 transition ease-in-out duration-700 hover:text-indigo-500 hover:cursor-pointer">
                    <div className="flex  ">
                      <i className="hh text-orange-500">
                        <AiTwotonePhone size={22} />
                      </i>
                      <span className="ml-3 font-extralight text-gray-300 text-[15px]">01-5915617, 9801256265, 9801256266</span>
                    </div>
                  </li>
                  <li className="mb-3 transition ease-in-out duration-700 hover:text-indigo-500 hover:cursor-pointer">
                    <div className="flex  ">
                      <i className="hh text-orange-500">
                        <AiTwotoneMail size={22} />
                      </i>
                      <span className="ml-3 font-extralight text-gray-300 text-[15px]">vedu.globalinstitute@gmail.com</span>
                    </div>
                  </li>
                  <li className="mb-3 transition ease-in-out duration-700 hover:text-indigo-500 hover:cursor-pointer">
                    <div className="flex  ">
                      <i className="hh text-orange-500">
                        <IoLocation size={22} />
                      </i>
                      <span className="ml-3 font-extralight text-gray-300 text-[15px]">2nd Floor Global IME Bank Kumaripati, Lalitpur, Nepal</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
