import React, { useEffect } from "react";
import { SectionTitle, Subtitle } from "../ui/Design";
import { CountryCard } from "../cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountry } from "../../redux/reducer/countrySlice";
import { toast } from "react-toastify";

const Countries = () => {
  const dispatch= useDispatch()
  const {countries, isError, message}= useSelector((state)=> state.country)
  useEffect(() => {
    dispatch(getAllCountry())
    if(isError){
      toast.error(message)
    }

  }, [dispatch, isError, message])
  
  return (
    <section className="p-10 my-20 relative ">
      <div className="absolute top-0 left-0 h-full w-full bg-service -z-[10]"></div>
      <div  data-aos="fade-down" data-aos-duration="2000">
      <div className="subtitle w-full flex justify-center">
        <Subtitle text={"Select Your Dream Destination We are partnered with 600+ Institutions all over the world"} />
      </div>
      <div className="title mt-5 w-full my-10 flex justify-center">
        <SectionTitle text1={"Country we offer"} fontSize={"50px"} />
      </div>

      </div>
     
        <div className="grid grid-cols-4 gap-[1rem] md:grid-cols-1 mobile:grid-cols-1">
          {countries.map((item) => (
            <CountryCard image={item?.image?.filePath} title={item.title} description={item?.description} path={`/country/${item.slug}`} />
          ))}
        </div>
    </section>
  );
};

export default Countries;
