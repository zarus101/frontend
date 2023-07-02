import React, { useEffect } from "react";
import { SectionTitle, Subtitle } from "../ui/Design";
import { ServiceData } from "../assests/dummyData";
import { ServiceCard } from "../cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { getAllService } from "../../redux/reducer/serviceSlice";
import { toast } from "react-toastify";

const Service = () => {
  const dispatch= useDispatch()
  const {services, isError, message}= useSelector((state)=> state.service)
  useEffect(() => {
    dispatch(getAllService())
    if(isError){
      toast.error(message)
    }

  }, [dispatch, isError, message])
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
        {services?.map((service, index) => (
          <ServiceCard image={service?.image?.filePath} title={service?.title} description={service?.description}  key={index} path={`/service/${service.slug}`} />
        ))}
      </div>
    </section>
  );
};

export default Service;
