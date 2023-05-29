import React from "react";
import { GridComponent, Heading, Subtitle } from "../ui/Design";
import img from "../assests/images/hero/about-3.jpg";
import { Faq } from "../faq/Faq";
import "../../style/Animatio.scss";

export const Hero = () => {
  return (
    <>
      <div className="hero_section  h-[60vh] w-full pt-[60px] relative ">
        <div className="background_image hero_zoom  h-full w-full absolute bg-no-repeat bg-center bg-cover"></div>
        <div className="" data-aos="fade-down" data-aos-duration="1500">
          <div className="subtitle w-full flex uppercase mt-10  justify-center">
            <Subtitle text={"Book your seat now"} uppercase="uppercase" />
          </div>
          <div className="title text-primary text-[50px] capitalize flex justify-center font-bold">
            <h1>Upcoming study trip</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export const DistantSection = () => {
  return (
    <>
      <div className="relative  w-full ">
        <div className="image_conatiners w-full absolute h-full -z-10">
          <span className="distant_icon_1 absolute"></span>
          <span className="distant_icon_2 bounce-x absolute bottom-[70px] "></span>
        </div>

        <GridComponent col={2} gap={3}>
          <div className="j grid place-content-center pr-10  py-10" data-aos="fade-right" data-aos-duration="1500">
            <div className="image overlay-anim">
              <img alt="img" src={img} className="rounded-2xl w-full h-full" />
            </div>
          </div>
          <div className="p-10 text-justify" data-aos="fade-left" data-aos-duration="1500">
            <Heading title="FAQS" fontSize="text-[50px]" fontWeight="font-bold" color="text-primary" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem labore quo suscipit repudiandae? Cupiditate in necessitatibus suscipit cumque quo ipsam pariatur quas accusantium aut explicabo, rerum iure, sapiente reiciendis odit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quis doloribus nemo dolor, beatae velit dolores a, eum, exercitationem quo sapiente quia sit voluptate praesentium quod dolore adipisci magnam voluptates. !</p>

            <div className="w-full">
              <Faq />
            </div>
          </div>
        </GridComponent>
      </div>
    </>
  );
};
