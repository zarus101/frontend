import React, { useEffect, useState } from "react";
import { PageHeadingPicture } from "../../components/ui/Design";
import { JobPost } from "../../components/studyTrip/jobPosts";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/reducer/categorySlice";

const Careers = () => {
  const { careers } = useSelector((state) => state.career);

  const { categories } = useSelector((state) => state.category);
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredCareers, setFilteredCareers] = useState(careers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  const filterItems = (category) => {
    setActiveCategory(category);
    const newItems = careers.filter((item) => item.category?.name === category);
    setFilteredCareers(newItems);

    // for all data show
    if (category === "all") {
      setFilteredCareers(careers);
      return;
    }
  };
  return (
    <>
      <PageHeadingPicture title="Careers" />
      <section className="carerr bg-gray-100 py-8">
        <div className="containers m-auto md:w-full md:px-8">
          <div className="category flex  gap-5 ">
            <div className={`p-5 bg-gray-200 rounded-2xl font-bold flex justify-center hover:bg-gray-600 duration-500 cursor-pointer hover:text-white hover:scale-100 ${activeCategory === "all" ? "bg-gray-600 text-white" : ""}`} onClick={() => filterItems("all")}>
              All
            </div>
            {categories.map((category, i) => (
              <div key={i} className={`p-5 bg-gray-200 rounded-2xl font-bold flex justify-center hover:bg-gray-600 duration-500 cursor-pointer hover:text-white hover:scale-100 ${activeCategory === category.name ? "bg-gray-600 text-white" : ""}`} onClick={() => filterItems(category.name)}>
                {category.name}
              </div>
            ))}
          </div>

          <div className="job-post mt-16">
            {filteredCareers.length <= 0 ? (
              <>no job application found</>
            ) : (
              <>
                {filteredCareers.map((career) => (
                  <JobPost key={career.id} title={career.title} salary={career.salary} desc={career.description} image={career.image} path={career.image?.filePath} name={""} />
                ))}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
