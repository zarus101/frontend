import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { createCareer, selectIsLoading } from "../redux/reducer/careerSlice";
import { Card, SubHeading, TitleSm, WhiteCard } from "../components/ui/Design";
import { Loader } from "../components/commons/Loader";
import { SimpleButton } from "../components/ui/Buttons";
import { createCategory, getAllCategory } from "../redux/reducer/categorySlice";
import CareerList from "./CareerList";
import { GrAdd } from "react-icons/gr";
import DOMPurify from "dompurify";
import { AiOutlineCloseCircle } from "react-icons/ai";
import CategoryList from "./CategoryList";

const initialState = {
  title: "",
  salary: "",
};

export const AddCareer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categories } = useSelector((state) => state.category);

  const [career, setCareer] = useState(initialState);
  const [careerImg, setCareerImg] = useState("");
  const [imagePreview, setimagePreview] = useState(null);
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState(null);
  // popup
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const isLoading = useSelector(selectIsLoading);

  const { title, salary } = career;

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCareer({ ...career, [name]: value });
  };

  const handleImageChange = (e) => {
    setCareerImg(e.target.files[0]);
    setimagePreview(URL.createObjectURL(e.target.files[0]));
  };
  const saveBlog = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("salary", salary);
    formData.append("description", description);

    formData.append("categoryId", categoryId);
    if (careerImg) {
      formData.append("image", careerImg);
    }
    console.log(formData.get("image"));

    await dispatch(createCareer(formData));
  };


  ////for categories
  const [categoryName,  setCategoryName]= useState()
  const [categoryDescription, setCategoryDescription]= useState()


  const handleCategorySubmit=async(e)=>{
    e.preventDefault()


    const data={
      name: categoryName,
      description: categoryDescription
    }
    await dispatch(createCategory(data))
    setModal(false)
  }
  return (
    <>
      <section className="add_about">
        {isLoading && <Loader />}
        <Card>
          <div className="flex items-center text-center justify-center">
            <h1 className="text-3xl font-medium capitalize">
              Manage your <span className="text-orange-500 font-bold">Career Section</span>{" "}
            </h1>
          </div>
        </Card>
        <form action="post" onSubmit={saveBlog}>
          <div className="mt-10">
            <WhiteCard>
              <div className="flex w-full gap-2">
                <div className="w-[90%]">

                  <SubHeading>Job Category</SubHeading>
                  <select name="categoryId" onChange={(e) => setCategoryId(e.target.value)} className="bg-gray-100 text-gray-900 text-sm rounded-md focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 block w-full p-3 outline-0">
                    <option value="">Select a category</option>
                    {categories.map((category, i) => (
                      <option className="py-3" value={category._id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className=" flex align-bottom">
                  <button className=" rounded-2xl p-4 text-white h-[60%] mt-[30px]   bg-gray-300" onClick={toggleModal}>
                    <GrAdd size={20} color="white" />
                  </button>
                </div>
              </div>
              <div>
                <SubHeading>Job Title</SubHeading>
                <input type="text" name="title" value={career?.title} onChange={handleInputChange} className="bg-gray-100 text-gray-900 text-sm rounded-md focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 block w-full p-3 outline-0" />
              </div>
              <div>
                <SubHeading>Salary</SubHeading>
                <input type="text" name="salary" value={career?.salary} onChange={handleInputChange} className="bg-gray-100 text-gray-900 text-sm rounded-md focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 block w-full p-3 outline-0" />
              </div>

              <div>
                <SubHeading>Image</SubHeading>
                <input type="file" name="image" onChange={(e) => handleImageChange(e)} className="bg-gray-200 w-full  p-6  focus:ring-1 focus:ring-orange-500 focus:border-orange-500" required />
                {imagePreview !== null ? (
                  <div className="mt-5">
                    <img src={imagePreview} alt="aboutImg" width="100%" height="100%" className="mt-5 rounded-lg w-full h-48 object-cover" />
                  </div>
                ) : (
                  <TitleSm title="No Image set for this blog" />
                )}
              </div>
              <div>
                <SubHeading>Description</SubHeading>
                <ReactQuill placeholder="write something about your business" theme="snow" style={{ height: "200px" }} value={description} onChange={setDescription} modules={AddCareer.modules} formats={AddCareer.formats} />
              </div>
              <div className="mt-10">
                <SimpleButton text="Submit" />
              </div>
            </WhiteCard>
          </div>
        </form>
        {modal && (
          <div className="modal p-8">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content flex justify-between">
              <div className="form_container p-10 w-[50%]">
                <div className="title mb-5">
                  <h1 className="text-3xl font-medium capitalize">
                    Add Job <span className="text-orange-500 font-bold">Category</span>{" "}
                  </h1>
                </div>
                <form action="post" onSubmit={handleCategorySubmit}>
                <div>
                  <SubHeading>Category Name</SubHeading>
                  <input type="text" placeholder="name" name="categoryName" value={categoryName} onChange={(e)=> setCategoryName(e.target.value)} className="bg-gray-200 text-gray-900 text-sm rounded-md focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 block w-full p-3 outline-0" />
                </div>
                <div>
                  <SubHeading>Description</SubHeading>
                  <input type="text" placeholder="description" name="categoryDescription" value={categoryDescription} onChange={(e)=> setCategoryDescription(e.target.value)} className="bg-gray-200 text-gray-900 text-sm rounded-md focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 block w-full p-3 outline-0" />
                </div>

                <div className="mt-5">
                  <SimpleButton text="Submit" />
                </div>

                </form>
                
              </div>

              <div className="categories_container w-[50%] pt-10 px-4">
              <CategoryList/>
              </div>
              <button className="absolute right-2 top-2 text-red-500" onClick={toggleModal}>
                <AiOutlineCloseCircle size={30} />
              </button>
            </div>
          </div>
        )}

        <div className="mt-10">
          {" "}
          <CareerList />
        </div>
      </section>
    </>
  );
};

AddCareer.modules = {
  toolbar: [[{ header: "1" }, { header: "2" }, { font: [] }], [{ size: [] }], ["bold", "italic", "underline", "strike", "blockquote"], [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }], ["link", "image", "video"], ["clean"]],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
AddCareer.formats = ["header", "font", "size", "bold", "italic", "underline", "strike", "blockquote", "list", "bullet", "indent", "link", "image", "video"];
