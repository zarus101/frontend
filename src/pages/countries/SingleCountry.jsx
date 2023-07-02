import React, { useEffect } from "react";
import { GridComponent, PageHeadingPicture, SectionTitle } from "../../components/ui/Design";
import { useParams } from "react-router-dom";
import { CountryData, IeltsData, NewsData } from "../../components/assests/dummyData";
import { SingleCourseRightCard } from "../../components/cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { getCountryBySlug, selectCountry } from "../../redux/reducer/countrySlice";

const SingleCountry = () => {
  const { slug } = useParams();
  const item= useSelector(selectCountry);
  const dispatch= useDispatch()

  useEffect(() => {
    dispatch(getCountryBySlug(slug))
    
 
  }, [dispatch, slug])
  
  // const item = CountryData.filter((item) => item.slug === slug);
  console.log(item);

  return (
    <section className="">
      <PageHeadingPicture title={`${item?.name}`} />
      <div className="containers mt-10 py-[100px] ">
        <GridComponent col={3} gap={4}>
          <div className="left_side col-span-2 ">
            <figure className="h-[500px] w-full">
              <img src={item?.image?.filePath} alt="img" className="h-full w-full" />
            </figure>
            <div className="content-container my-5 text-justify" >
              <h2  className="text-[20px] font-medium" dangerouslySetInnerHTML={{ __html: item?.description }}></h2>
            </div>
            <div className="mt-5">
              <SectionTitle text1={`Why this country?`} fontSize={30} />
            </div>
            <div className="content-container my-5 text-justify">
            <h2  className="text-[20px] font-medium" dangerouslySetInnerHTML={{ __html: item?.description1 }}></h2>
            </div>
            <div className="mt-5">
              <SectionTitle text1={`What is the Process to ${item?.title}?`} fontSize={30} />
            </div>
            <div className="content-container my-5 text-justify">
            <h2  className="text-[20px] font-medium" dangerouslySetInnerHTML={{ __html: item?.description2 }}></h2>
            </div>
          </div>
          <div className="right-side flex flex-col gap-4  col-span-1 sidebar">
            <SingleCourseRightCard IeltsData={IeltsData} />
            <SingleCourseRightCard CountryData={CountryData} />
            <SingleCourseRightCard NewsData={NewsData} />
          </div>
        </GridComponent>
      </div>
    </section>
  );
};

export default SingleCountry;
