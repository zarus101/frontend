import React from "react";
import { NewsCard } from "../components/news/News";
import { DistantSection, Hero } from "../components/studyTrip/Hero";
import Service from "../components/studyTrip/Services";
import Countries from "../components/studyTrip/Countries";
import Teams from "../components/studyTrip/Teams";
import Ielts from "../components/studyTrip/Ielts";
import ImageSlide from "../components/studyTrip/ImageSlide";
import AboutComponent from "../components/studyTrip/AboutComponent";
import FeatureComponent from "../components/studyTrip/FeatureComponent";

const Home = () => {
  return (
    <>
      <ImageSlide/>
      <AboutComponent/>
      <Ielts />
      <FeatureComponent/>
      <Countries />
      <Service />
      <DistantSection />
      <Hero />
      <Teams />
      <NewsCard />
    </>
  );
};

export default Home;
