import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ButtonMain } from "../ui/Buttons";

const NotAuthorized = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };
  return (
    <section className="flex items-center h-[100vh] px-16 bg-gray-50">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
            <span className=" text-red-600 ">Error</span>401
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">Not Authorized.Plaese login first</p>
          <div className="flex w-full justify-center my-10">
          <ButtonMain handleClick={handleClick} text={"login"} />


          </div>
        </div>
      </div>
    </section>
  );
};

export default NotAuthorized;
