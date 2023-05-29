import { TbArrowNarrowRight } from "react-icons/tb";
import { NavLink } from "react-router-dom";
export const GridComponent = ({ children, col, gap }) => {
  return <div className={`grid grid-cols-${col} gap-${gap} md:grid-cols-1 mobile:grid-cols-1`}>{children}</div>;
};

export const Subtitle = ({ text, uppercase }) => {
  return <h3 className={`text-[20px] font-bold ${uppercase}  text-[#0a9ae8]`}>{text}</h3>;
};

export const SectionTitle = ({ text1, text2, fontSize }) => {
  const style = {
    fontSize: fontSize,
  };
  return (
    <h2 className="font-bold">
      <span style={style} className={` text-[50px] text-black font-bold`}>
        {text1} <br /> {text2}
      </span>
    </h2>
  );
};

export const Title = ({ children }) => {
  return <h1 className="text-xl font-semibold capitalize text-secondary mb-5">{children}</h1>;
};

export const Heading = ({ title, fontSize, fontWeight, color }) => {
  return <h2 className={` ${fontWeight}  ${fontSize} ${color} capitalize mb-5`}>{title}</h2>;
};

export const SubHeading = ({ children }) => {
  return <h2 className="text-md font-bold capitalize my-2">{children}</h2>;
};

export const Card = ({ children }) => {
  return <div className="bg-gray-300 p-8 rounded-lg shadow-shadow2 ">{children}</div>;
};

export const WhiteCard=({children})=>{
  return <div className="bg-white rounded-lg border shadow-lg p-10 cursor-pointer transition-all duration-500">{children}</div>
}
export const CardOne = ({ fontSize, fontWeight, colorcss, title, number, icon }) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-10 cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:bg-${colorcss}-200`}>
      <div className="flex items-center  text-center">
        <Heading title={title} fontSize={fontSize} fontWeight={fontWeight} />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <TitleMd title={number} colorcss={colorcss} />

        {/* <h2 className={`text-${fontSize} font-bold`}>{number}</h2> */}
        <div className={`${colorcss}`}>{icon}</div>
      </div>
    </div>
  );
};

export const TitleMd = ({ title, colorcss }) => {
  return (
    <>
      <div className={`heading-md ${colorcss} capitalize`}>
        <h1 className="text-4xl font-semibold relative z-10">{title}</h1>
      </div>
    </>
  );
};
export const TitleSm = ({ title }) => {
  return (
    <>
      <div className="heading-sm text-orange-600 capitalize mt-5">
        <h1 className="text-md font-medium relative z-10">{title}</h1>
      </div>
    </>
  );
};

export const PageHeadingPicture = ({ title }) => {
  return (
    <>
      <div className="heading-xl  capitalize relative h-96 mobile:h-48 w-full text-white">
        <div className="containers pt-[7%] w-full ">
          <h1 className="text-6xl font-semibold relative z-10 ">{title}</h1>
          <div className="flex relative justify-start items-start z-[10] mt-5 cursor-pointer">
            <NavLink to={"/"}>
              <b className="hover-text active">Home</b>
            </NavLink>
            <TbArrowNarrowRight size={25} className="mx-2" />
            <b>{title}</b>
          </div>
        </div>
      </div>
    </>
  );
};
