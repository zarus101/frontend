import React, { useState } from "react";
import bgImg from "../assests/images/header/1.jpg";
import mainImg from "../assests/images/header/image-1.png";
import iconBulb from "../assests/images/header/icon-bulb.png";
import iconArrow from "../assests/images/header/icon-arrow.png";
import iconCircle1 from "../assests/images/header/icon-circle-1.png";
import iconCircle2 from "../assests/images/header/icon-circle-2.png";
import iconCircle3 from "../assests/images/header/icon-circle-3.png";
import iconDots2 from "../assests/images/header/icon-dots-2.png";
// import iconStar from "../assests/images/header/icon-star.png";

import "../../style/Header.scss";
import { ButtonMain } from "../ui/Buttons";

const ImageSlide = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const style1 = {
    transform: `translate(${-(mousePosition.x - 500) / 200}px, ${-(mousePosition.y - 500) / 200}px)`,
  };

  const style2={
    transform: `translate(${-(mousePosition.x - 500) / 100}px, ${-(mousePosition.y - 500) / 100}px)`,


  }
  return (
    <>
      <section className="main-slider h-[790px] overflow-hidden mobile:hidden md:hidden" onMouseMove={handleMouseMove} >
        <div className="absolute bg_cover top-0 left-0 z-[-3px] w-full h-full visible opacity-100 duration-700 transform matrix-[1,0,0,1,0,0]">
          <img src={bgImg} alt="img" className="absolute top-0 left-0 z-0 w-full h-full visible opacity-100 duration-700 transform matrix-[1,0,0,1,0,0]" />
        </div>
        <div
          className="absolute bottom-0 flex z-20 right-[0px] top-[20%] transition-transform duration-100  "
          style={style1}
        >
          <figure>
            <img src={iconBulb} alt="icon_circle" />
          </figure>
        </div>
        <div
          className="absolute bottom-0 flex z-[-2px] right-[10%] top-[8%] transition-transform duration-100 "
          style={style1} 
        >
          <figure>
            <img src={iconDots2} alt="icondots2" />
          </figure>
        </div>
        <div
          className="absolute right-[5%] flex z-10 transition-transform duration-100  bottom-[-10%] "
          style={style2} 
        >
          <figure>
            <img src={iconCircle1} alt="iconCircle1" />
          </figure>
        </div>
        <div
          className="absolute right-[50%] flex top-[20%] transition-transform duration-100 "
          style={style1}
        >
          <figure>
            <img src={iconArrow} alt="icon_arrow" />
          </figure>
        </div>
        <div
          className="absolute bottom-0 flex right-[700px] transition-transform duration-100  "
          style={style2}
        >
          <figure>
            <img src={iconCircle2} alt="icon_circle" />
          </figure>
        </div>
        <div
          className="absolute top-[5%] flex right-[30%] z-20 transition-transform duration-100  "
          style={style2}
        >
          <figure>
            <img src={iconCircle3} alt="icon-circle" transition-transform duration-100 />
          </figure>
        </div>
        <div className="grid grid-cols-2 absolute w-full h-full gap-4">
          <div className=" grid mt-[1%] pl-[20%] gap-5 w-full place-content-center"  data-aos="fade-right" data-aos-duration="2000">
            <div className=" w-full my-5">
              <span className="title">START TO NEW JOURNEY</span>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex text-center">
                {/* <SectionTitle text1="Best" /> */}

                <h1 className=" text-[80px] text-black font-bold">
                  Best
                  <span className="style-font">online</span> <br />
                </h1>
              </div>
              <div>
                <h1 className=" text-[80px] leading-6 text-black font-bold">courses from vedu global</h1>
              </div>
            </div>
            <div className="my-5">
              <ButtonMain text="Find Courses" />
            </div>
          </div>
          <div className="w-full h-full z-[1000]">
            <div className="image absolute right-[10%]"  data-aos="slide-up" data-aos-duration="1000">
              <img  src={mainImg} alt="img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImageSlide;
