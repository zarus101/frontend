import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaqData } from "../assests/dummyData";

export const Faq = () => {
  const [open, setOpen] = useState(0);
  const toggle = (i) => {
    if (open === i) {
      return setOpen(null);
    }
    setOpen(i);
  };
  return (
    <>
<section className="faq mt-5">
  {FaqData.map((list, i) => (
    <div className=" bg-gray-200 border rounded-3xl mb-8" key={i}>
      <div className="title flex justify-between items-center px-5 py-2">
        <h2 className={open === i ? "text-lg text-primary font-semibold transition-all duration-500" : "text-lg font-semibold"}>{list.title}</h2>
        {open === i ? (
          <button onClick={() => toggle(i)} className="flex bg-primary justify-center items-center shadow-lg text-white w-12 h-12 rounded-2xl transition-all duration-500 ease-in-out rotate-90">
            <HiOutlineArrowNarrowRight />
          </button>
        ) : (
          <button onClick={() => toggle(i)} className="flex justify-center items-center  shadow-lg w-12 h-12 bg-white rounded-2xl transition-all duration-500 ease-in-out hover:rotate-90 hover:bg-white hover:text-indigo-500">
            <HiOutlineArrowNarrowRight />
          </button>
        )}
      </div>
      <div className={open === i ? "details px-7 pb-5 visible transition  ease-in-out duration-500 " : "details px-7 pb-5 ease-in-out hidden  overflow-hidden transition-all duration-500"}>
        <p className="leading-8">{list.description}</p>
      </div>
    </div>
  ))}
</section>

    </>
  );
};
