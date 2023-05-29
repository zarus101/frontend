import { HiOutlineArrowSmRight } from "react-icons/hi";
import { BsFillShareFill } from "react-icons/bs";
import "../../style/Card.scss";
import { FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Heading } from "../ui/Design";

export const ServiceCard = ({ image, title, description, path }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  };
  return (
    <div className="course_block   fadeInUp cursor-pointer p-[15px] relative mb-[15px] z-10">
      <div className="inner_block shadow-main_shadow relative hover:shadow-hover_shadow hover:translate-y-[-5px] block bg-white transition-all duration-300 ">
        <div className="image_box mb-1 ">
          <div className="image w-full overlay-anim h-[225px] rounded-2xl">
            <img src={image} alt="" className="w-full h-full" />
          </div>
        </div>
        <div className="content_section flex flex-col gap-3 px-5">
          <h2 className="font-bold text-[20px]  capitalize">{title}</h2>
          <p>{description?.length > 100 ? description.slice(0, 100) + "..." : description}</p>
        </div>
        <div className="mt-2 flex w-full justify-between  px-5 py-5 align-middle h-full button-sec hover:text-orange-400 transition" onClick={()=> handleClick()}>
          <h1 className="hover-text">read more</h1>
          <i>
            <HiOutlineArrowSmRight size={22} />
          </i>
        </div>
      </div>
    </div>
  );
};

export const CountryCard = ({ image, title, description, path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };
  return (
    <>
      <div className="course_block fadeInUp cursor-pointer p-[15px] relative mb-[15px] z-10" data-aos="fade-up" data-aos-duration="1500">
        <div className="inner_block shadow-main_shadow  hover:shadow-hover_shadow hover:translate-y-[-5px] relative block bg-white transition-all duration-300 ">
          <div className="image_box ">
            <div className="image w-full overlay-anim h-[225px] rounded-2xl">
              <img src={image} alt="" className="w-full h-full" />
            </div>
          </div>
          <div className="content_section px-10">
            <h2 className="font-bold text-[20px] my-3 capitalize">{title}</h2>
            <p>{description.length > 100 ? description.slice(0, 100) + "..." : description}</p>
          </div>
          <div className="mt-2 flex w-full justify-between  px-10 py-5 align-middle h-full button-sec hover:text-orange-400 transition" onClick={() => handleClick()}>
            <h1 className="hover-text">read more</h1>
            <i>
              <HiOutlineArrowSmRight size={22} />
            </i>
          </div>
        </div>
      </div>
    </>
  );
};

export const TeamCard = ({ image, name, position }) => {
  return (
    <>
      <div className="team-block" data-aos="fade-up" data-aos-duration="1500">
        <div className="inner-box relative">
          <div className="image-box">
            <div className="image">
              <img src={image} alt="team-img" />
            </div>
            <div className="share-icon">
              <i className="w-full h-full flex justify-center mt-3">
                <BsFillShareFill />
              </i>
            </div>
            <div className="social-links">
              <i className="mt-2">
                <FaFacebookF />
              </i>
              <i>
                <FaFacebookF />
              </i>
              <i>
                <FaFacebookF />
              </i>
            </div>
          </div>
          <div className="info-box relative text-center">
            <h3 className="name text-[23px] font-bold">{name}</h3>
            <span className="designation relative text-gray-500 text-[20px] font-medium">{position}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export const SingleCourseRightCard = ({ IeltsData, CountryData, NewsData }) => {
  const style = {
    display: "flex",
    alignItems: "center",
    padding: "16px 20px 17px",
    transition: "all 500ms ease",
    minHeight: "100px",
  };
  console.log(IeltsData);
  return (
    <>
      <div className="card rounded-md p-5 bg-indigo-100 w-full" data-aos="fade-left" data-aos-duration="1500">
        <div className="title px-5">
          <Heading title={IeltsData ? "Courses" : CountryData ? "Countries" : "Latest News"} fontSize="text-[25px]" fontWeight="font-bold" />
        </div>
        <ul>
          {IeltsData && (
            <>
              {IeltsData.map((item, i) => (
                <>
                  <li style={style} className="bb hover:bg-slate-50 rounded-2xl cursor-pointer">
                    <figure className="">
                      <img src={item.image} alt="img" className="h-full w-[80px] rounded-2xl bg-center bg-no-repeat" />
                    </figure>
                    <div className="info align-middle mt-4 ml-10">
                      <Heading title={`${item.title}`} fontSize="text-[20px]" fontWeight="font-semibold" />
                    </div>
                  </li>
                </>
              ))}
            </>
          )}
          {CountryData && (
            <>
              {CountryData.map((item, i) => (
                <>
                  <li style={style} className="bb hover:bg-slate-50 rounded-2xl cursor-pointer">
                    <figure className="">
                      <img src={item.image} alt="img" className="h-full w-[80px] rounded-2xl bg-center bg-no-repeat" />
                    </figure>
                    <div className="info align-middle mt-4 ml-10">
                      <Heading title={`${item.title}`} fontSize="text-[20px]" fontWeight="font-semibold" />
                    </div>
                  </li>
                </>
              ))}
            </>
          )}
          {NewsData && (
            <>
              {NewsData.map((item, i) => (
                <>
                  <li style={style} className="bb hover:bg-slate-50 rounded-2xl cursor-pointer">
                    <figure className="">
                      <img src={item.cover} alt="img" className="h-full w-[80px] rounded-2xl bg-center bg-no-repeat" />
                    </figure>
                    <div className="info align-middle mt-4 ml-10">
                      <Heading title={`${item.title}`} fontSize="text-[20px]" fontWeight="font-semibold" />
                    </div>
                  </li>
                </>
              ))}
            </>
          )}
        </ul>
      </div>
    </>
  );
};
