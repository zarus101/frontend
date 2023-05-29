import React from "react";
import { GridComponent, PageHeadingPicture } from "../../components/ui/Design";
import { useParams } from "react-router-dom";
import { CountryData, IeltsData, NewsData } from "../../components/assests/dummyData";
import { SingleCourseRightCard } from "../../components/cards/Cards";

const SingleCountry = () => {
  const { slug } = useParams();

  const item = CountryData.filter((item) => item.slug === slug);
  console.log(item);

  return (
    <section className="">
      <PageHeadingPicture title={`${item[0]?.title}`} />
      <div className="containers mt-10 py-[100px] ">
        <GridComponent col={3} gap={4}>
          <div className="left_side col-span-2 ">
            <figure className="h-[500px] w-full">
              <img src={item[0].image} alt="img" className="h-full w-full" />
            </figure>
            <div className="content-container my-5">
              <h2 className="text-[20px] font-medium">{item[0].description}</h2>
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
