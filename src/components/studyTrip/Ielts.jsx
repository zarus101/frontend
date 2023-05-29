import React from "react";
import { SectionTitle, Subtitle } from "../ui/Design";
import { CountryCard } from "../cards/Cards";
import { IeltsData } from "../assests/dummyData";

const Ielts = () => {
  return (
    <section className="p-10 my-20 relative  md:h-fit mobile:h-fit ">
      <div data-aos="fade-down" data-aos-duration="2000">
      <div className="subtitle flex md:w-[100%] mobile:w-[100%] justify-center" >
        <Subtitle text={"Take Advantage of Our Top-Notch Student Services from Highly Qualified Education Counselors and Visa Expert Teams"} />
      </div>

      <div className="title flex justify-center w-full my-5">
        <SectionTitle text1="Test Preparation" />
      </div>

      </div>
     
      <div className="grid grid-cols-4 gap-[1rem] md:grid-cols-1 mobile:grid-cols-1" >
        {IeltsData.map((item) => (
          <CountryCard image={item.image} title={item.title} description={item.description} path={`/testpreparation/${item.slug}`} />
        ))}
      </div>
    </section>
  );
};

export default Ielts;
