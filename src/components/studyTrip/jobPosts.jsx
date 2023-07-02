import React, { useState } from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import DOMPurify from "dompurify";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { ButtonMain, ButtonRound } from "../ui/Buttons";

export const JobPost = ({ title, salary, desc, path, name, image }) => {
  // popup
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      <div className="bg-gray-50 p-8 shadow-shadow2 rounded-2xl border-[6px] border-white mb-8">
        <div className="top flex justify-between items-center mobile:flex-col">
          <div className="top-left flex items-center">
            <span>
              <IoBagHandleOutline size={22} />
            </span>
            <h3 className="text-lg font-medium ml-5">{title}</h3>
          </div>
          {salary && (
            <div className="top-right flex items-center mobile:w-full">
              <span className="mr-3 text-indigo-500">Rs</span>
              <span>
                {salary} / <label className="text-gray-400">Month</label>
              </span>
            </div>
          )}
        </div>
        <div className="bottom-left flex items-center mobile:flex-wrap my-5">
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(desc.slice(0, 50)),
            }}
          ></div>
        </div>
        <div className="bottom flex justify-between items-center md:flex-wrap mobile:flex-col">
          <button onClick={toggleModal} className="mt-5 bg-gray-500 px-8 py-2.5 text-white text-sm font-medium rounded-[5px] uppercase mr-5 mobile:mb-2">
            Show More
          </button>
          <div className="bottom-right flex items-center md:mt-5 mobile:mt-5">
            <ButtonRound text="Apply Now" color="bg-indigo-500" />
          </div>
        </div>
      </div>

      {modal && (
        <div className="modal p-8">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content flex justify-between">
            <div className="modal-img flex justify-center items-center w-1/2">
              <div className="h-auto">
                {image ? (
                  <img src={path} alt={name} className="object-fit w-full h-full rounded-3xl" />
                ) : (
                  <div className="bg-indigo-500 h-full w-full rounded-3xl flex justify-center items-center">
                    <h1 className="text-img-none font-bold">FA</h1>
                  </div>
                )}
              </div>
            </div>
            <div className="modal-text right w-1/2">
              <h1 className="capitalize text-indigo-500 font-medium">{title}</h1>
              {salary && (
                <div className="top-right flex items-center mobile:w-full mb-3">
                  <span className="mr-3 text-secondary text-2xl font-medium">Rs {salary}</span>
                  <span>
                    / <label className="text-gray-400">Month</label>
                  </span>
                </div>
              )}
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(desc),
                }}
              ></div>

              <button className="close-modal text-red-500" onClick={toggleModal}>
                <AiOutlineCloseCircle size={30} />
              </button>

              <NavLink to="/gmail:raz.thapaliya600@gmail.com" className="bottom-right text-black flex items-center md:mt-5 mobile:mt-5">
                <button onClick={toggleModal} className="mt-5 bg-gray-500 px-8 py-2.5 text-white text-sm font-medium rounded-[5px] uppercase mr-5 mobile:mb-2">
                  Apply Now
                </button>{" "}
              </NavLink>
              <br />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
