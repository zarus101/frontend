import React, { useState } from "react";
import { Card, SubHeading, TitleSm, WhiteCard } from "../components/ui/Design";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { createService, selectIsLoading } from "../redux/reducer/serviceSlice";
import { SimpleButton } from "../components/ui/Buttons";
import { Loader } from "../components/commons/Loader";
import ServiceList from "./ServiceList";

export const AddService = () => {
  const [imagePreview, setIMagePreview] = useState(null);
  const [serviceImage, setServiceImage] = useState("");
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleImageChange = (e) => {
    setServiceImage(e.target.files[0]);
    setIMagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if(serviceImage){
      formData.append("image", serviceImage)
    }

    await dispatch(createService(formData));
  };

  return (
    <>
      <section className="add_about">
        {isLoading && <Loader/>}
        <Card>
          <div className="flex items-center text-center justify-center">
            <h1 className="text-3xl font-medium capitalize">
              Manage your <span className="text-orange-500 font-bold">Service Section</span>{" "}
            </h1>
          </div>
        </Card>
        <form action="post" onSubmit={handleSubmit}>
          <div className="mt-10">
            <WhiteCard>
              <div>
                <SubHeading>Title</SubHeading>
                <input type="text" name="title" placeholder="Enter Name" value={title} onChange={(e) => setTitle(e.target.value)} className="bg-gray-200 w-full  p-6  focus:ring-1 focus:ring-orange-500 focus:border-orange-500" required />
              </div>
              <div>
                <SubHeading>Image</SubHeading>
                <input type="file" name="image" onChange={(e) => handleImageChange(e)} className="bg-gray-200 w-full  p-6   focus:ring-1 focus:ring-orange-500 focus:border-orange-500" required />
                {imagePreview !== null ? (
                  <div className="mt-5">
                    <img src={imagePreview} alt="serviceImage" width="100%" height="100%" className="mt-5 rounded-lg w-full h-48 object-cover" />
                  </div>
                ) : (
                  <TitleSm title="No Image set for this blog" />
                )}
              </div>
              <div>
                <SubHeading>Description</SubHeading>
                <ReactQuill placeholder="write something about your service" style={{height: "200px"}} theme="snow" value={description} onChange={setDescription} modules={AddService.modules} formats={AddService.formats} />
              </div>
              <div className="mt-10">
                <SimpleButton text="Submit" />
              </div>
            </WhiteCard>
          </div>
        </form>

        <div className="mt-10">
          <ServiceList />
        </div>
      </section>
    </>
  );
};

AddService.modules = {
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
AddService.formats = ["header", "font", "size", "bold", "italic", "underline", "strike", "blockquote", "list", "bullet", "indent", "link", "image", "video"];
