import React from "react";
import { GridComponent, Subtitle } from "../ui/Design";
import about1 from "../assests/images/resource/about-1.png";
import about2 from "../assests/images/resource/about-2.jpg";
import { BsCheckLg } from "react-icons/bs";
import { ButtonMain } from "../ui/Buttons";
const AboutComponent = () => {
    const handleClick=()=>{
        
    }
  return (
    <>
      <section  className="about_section relative px-[20px] flex justify-center  h-[100vh] md:h-fit mobile:h-fit">
        <div>
          <GridComponent col={2} gap={3}>
            <div className="image-column  relative " data-aos="fade-right"  data-aos-duration="2000">
              <div className="anim-icons absolute w-full h-full">
                <span className="icon icon-dotted-map-2 absolute top-[20px] left-[-5px] bg-service w-full h-full"></span>
                <span className="icon icon-paper-plan absolute left-[100px] bottom-[0px] "></span>
                <span className="icon icon-dotted-line right-[100px] top-[300px]"></span>
              </div>
              <div className="inner-column w-full p-[50px] relative   flex">
                <figure className="image-1 w-full h-full overlay-anim  ">
                  <img src={about1} alt="" className="overlay-anim" />
                </figure>
                <figure className="image-2 overlay-anim  ">
                  <img src={about2} alt="" />
                </figure>
                <div className="experience bounce-y">
                  <span className=" count">16</span> Years of Experience
                </div>
              </div>
            </div>
            <div className="text-container  p-20" data-aos="fade-left" data-aos-duration="2000">
              <Subtitle text={"GET TO KNOW US"} />
              <div className="title flex justify-start w-full my-5">
                <h2 className="text-[50px] text-black font-bold">Grow your skills learn with us from anywhere</h2>
              </div>
              <div className="text">Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor incididunt labore dolore magna aliquaenim ad minim. Sed risus augue, commodo ornare felis non, eleifend molestie metus pharetra eleifend.</div>

              <ul className="list-style-one two-column my-5">
                <li>
                  <i className="icon">
                    <BsCheckLg size={25} />
                  </i>
                  Expert trainers
                </li>
                <li>
                  <i className="icon">
                    <BsCheckLg size={25} />
                  </i>
                  Online learning
                </li>
                <li>
                  <i className="icon">
                    <BsCheckLg size={25} />
                  </i>
                  Lifetime access
                </li>
                <li>
                  <i className="icon">
                    <BsCheckLg size={25} />
                  </i>
                  Great results
                </li>
              </ul>

              <div class="btn-box">
              <ButtonMain handleClick={handleClick} text={"Discover more"} />
         
              </div>
            </div>
          </GridComponent>
        </div>
      </section>
    </>
  );
};

export default AboutComponent;
