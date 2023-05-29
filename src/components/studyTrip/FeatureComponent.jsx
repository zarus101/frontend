import React from "react";
import { GridComponent } from "../ui/Design";
import onlineLearning from "../assests/images/icons/online-learning.png";

const FeatureData = [
  { id: 1, title1: "Online", title2: "Certifications", image: onlineLearning },
  { id: 2, title1: "Top", title2: "Instructors", image: onlineLearning },
  { id: 3, title1: "Unlimited", title2: "Online Course", image: onlineLearning },
  { id: 4, title1: "experienced", title2: "Members", image: onlineLearning },
];
const FeatureComponent = () => {
  return (
    <>
      <section class="features-section relative my-10">
        <div class="auto-container">
          <GridComponent col={4} gap={3}>
            {FeatureData.map((feature, i) => (
              <SingleComponent title1={feature.title1} title2={feature.title2} image={feature.image} />
            ))}
          </GridComponent>
        </div>
      </section>
    </>
  );
};

export default FeatureComponent;

const SingleComponent = ({ title1, title2, image }) => {
  return (
    <div class="feature-block pl-20 " data-aos="fade-right">
      <div class="inner-box ">
        <i class="icon  text-white  flaticon-web-2">
          <img src={image} alt="img" className="h-[50px] text-white w-[60px]" />
        </i>
        <h5 class="title">
          {title1}
          <br /> {title2}
        </h5>
      </div>
    </div>
  );
};
