import React from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";
import { NewsData } from "../assests/dummyData";
import { SectionTitle, Subtitle } from "../ui/Design";
export const News = () => {
  return <div>News</div>;
};

export const NewsCard = () => {
  return (
    <>
      <div data-aos="fade-down" data-aos-duration="1500">
        <div className="subtitle w-full flex justify-center mt-10">
          <Subtitle text={"DIRECTLY FROM BLOG"} />
        </div>
        <div className="title mt-5 w-full flex justify-center">
          <SectionTitle text1={"Our latest news & "} text2={"upcoming blog posts"} fontSize={"50px"} />
        </div>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-1 mobile:grid-cols-1">
        {NewsData.slice(0, 3).map((item, i) => (
          <>
            <div className="box w-full" style={{ minHeight: 600 }}>
              <div className="news-container block h-[50%]">
                <div className="h-full overflow-hidden overlay-anim image-box m-10 relative rounded ">
                  <div className="absolute top-0 h-[60px] text-white text-[20px] p-10 w-[50px] grid place-content-center font-semibold  bg-primary z-10 right-10 rounded-b-full">
                    <b className="font-bold text-[25px]">20</b>
                    SEP
                  </div>
                  <img className="h-full image-hover bg-contain  bg-center rounded-[20px] w-full" src={item.cover} alt="img" />
                </div>
                <div className="content-box mr-20 rounded-[20px] cursor-pointer  mb-10 ml-20 mt-[-150px] relative pt-10  bg-white shadows">
                  <div className="flex pl-10 post-detail cursor-pointer">
                    <i className="text-[#0a9ae8] cursor-pointer">
                      <BsFillPersonFill size={22} />
                    </i>
                    <h2 className="mx-2">By Admin</h2>
                  </div>
                  <div className="mt-1 mb-2 px-10 post-title ">
                    <SectionTitle text1={item.title} fontSize={20} />
                  </div>
                  <hr />
                  <div className="mt-2 flex w-full justify-between  px-10 py-5 align-middle h-full button-sec hover:text-orange-400 transition">
                    <h1 className="hover-text">read more</h1>
                    <i>
                      <HiOutlineArrowSmRight size={22} />
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
