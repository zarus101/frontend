import React from "react";
import { SectionTitle, Subtitle } from "../ui/Design";
import { TeamCard } from "../cards/Cards";
import { TeamData } from "../assests/dummyData";

const Teams = () => {
  return (
    <section className="my-10 min-h-[100vh] relative ">
      <div className="absolute top-0 left-0 h-full w-full bg-service -z-[10]"></div>
      <div data-aos="fade-down" data-aos-duration="1500">
        <div className="subtitle w-full flex my-5 justify-center">
          <Subtitle text={"Select Your Dream Destination We are partnered with 600+ Institutions all over the world"} />
        </div>
        <div className="title my-5 w-full flex justify-center">
          <SectionTitle text1={"Our team"} fontSize={"50px"} />
        </div>
      </div>

      <div className="grid my-[10vh] grid-cols-4 gap-1 md:grid-cols-1 mobile:grid-cols-1">
        {TeamData.map((item) => (
          <TeamCard image={item.image} name={item.name} position={item.position} />
        ))}
      </div>
    </section>
  );
};

export default Teams;
