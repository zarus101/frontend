import React from "react";
import { SectionTitle, Subtitle } from "../ui/Design";
import { ServiceData } from "../assests/dummyData";
import { ServiceCard } from "../cards/Cards";

const Service = () => {
  return (
    <section className=" bg-white p-10 my-20  relative ">
      <div className="absolute top-0 left-0 h-full w-20 bg-service -z-[10]"></div>
      <div data-aos="fade-down" data-aos-duration="2000">
      <div className="subtitle w-full flex justify-center">
        <Subtitle text={"DIRECTLY FROM BLOG"} />
      </div>
      <div className="title my-10 w-full flex justify-center">
        <SectionTitle text1={"Our Services "} fontSize={"50px"} />
      </div>

      </div>
     
      <div className="grid grid-cols-4 gap-[3rem] md:grid-cols-1 mobile:grid-cols-1" >
        {ServiceData.map((service, index) => (
          <ServiceCard image={service.image} title={service.title} description={service.description}  key={index} path={`/service/${service.slug}`} />
        ))}
      </div>
    </section>
  );
};

export default Service;
