import React, { useState } from "react";
import { Card, SubHeading, TitleSm, WhiteCard } from "../components/ui/Design";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { createCountry, getAllCountry, selectIsLoading } from "../redux/reducer/countrySlice";
import { Loader } from "../components/commons/Loader";
import { SimpleButton } from "../components/ui/Buttons";
import CountryList from "./CountryList";

export const AddCountry = () => {
  const dispatch = useDispatch();
  const [imagePreview, setIMagePreview] = useState(null);
  const [countryImage, setCountryImage] = useState("");
  const [description, setDescription] = useState("");
  const [description1, setDescription1] = useState("");
  const [description2, setDescription2] = useState("");
  const [name, setName] = useState("");
  const isLoading = useSelector(selectIsLoading);

  const handleImageChange = (e) => {
    setCountryImage(e.target.files[0]);
    setIMagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("description1", description1);
    formData.append("description2", description2);
    if (countryImage) {
      formData.append("image", countryImage);
    }

    await dispatch(createCountry(formData));
    await dispatch(getAllCountry());
  };

  return (
    <>
      <section className="add_about">
        {isLoading && <Loader />}
        <Card>
          <div className="flex items-center text-center justify-center">
            <h1 className="text-3xl font-medium capitalize">
              Manage your <span className="text-orange-500 font-bold">Country Section</span>{" "}
            </h1>
          </div>{" "}
        </Card>
        <form action="post" onSubmit={handleSubmit}>
          <div className="mt-10">
            <WhiteCard>
              <div>
                <SubHeading>Country Name</SubHeading>
                <input type="text" name="name" placeholder="Enter Country  Name" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-200 w-full  p-6  focus:ring-1 focus:ring-orange-500 focus:border-orange-500" required />
              </div>
              <div>
                <SubHeading>Country Image</SubHeading>
                <input type="file" name="image" onChange={(e) => handleImageChange(e)} className="bg-gray-200 w-full  p-6  focus:ring-1 focus:ring-orange-500 focus:border-orange-500" required />
                {imagePreview !== null ? (
                  <div className="mt-5">
                    <img src={imagePreview} alt="aboutImg" width="100%" height="100%" className="mt-5 rounded-lg w-full h-48 object-cover" />
                  </div>
                ) : (
                  <TitleSm title="No Image set for this blog" />
                )}
              </div>
              <div className="mt-10">
                <SubHeading>Description</SubHeading>
                <ReactQuill placeholder="write something about your business" style={{ height: "200px" }} theme="snow" value={description || ""} onChange={setDescription} modules={AddCountry.modules} formats={AddCountry.formats} />
              </div>
              <div className="mt-20">
                <SubHeading>Why This Country? </SubHeading>
                <ReactQuill placeholder="write why this course?" style={{ height: "200px" }} theme="snow" value={description1 || ""} onChange={setDescription1} modules={AddCountry.modules} formats={AddCountry.formats} />
              </div>
              <div className="mt-20">
                <SubHeading>What is the process to apply? </SubHeading>
                <ReactQuill placeholder="write importance of this course" style={{ height: "200px" }} theme="snow" value={description2 || ""} onChange={setDescription2} modules={AddCountry.modules} formats={AddCountry.formats} />
              </div>
              <div className="mt-10">
                <SimpleButton text="Submit" />
              </div>
            </WhiteCard>
          </div>
        </form>

        <div className="mt-10">
          <CountryList />
        </div>
      </section>
    </>
  );
};

AddCountry.modules = {
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
AddCountry.formats = ["header", "font", "size", "bold", "italic", "underline", "strike", "blockquote", "list", "bullet", "indent", "link", "image", "video"];
