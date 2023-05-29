import React, { useState } from "react";
import { Card, SubHeading, TitleSm, WhiteCard } from "../components/ui/Design";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import CourseList from "./CourseList";
import { useDispatch, useSelector } from "react-redux";
import { createCourse, getAllCourse, selectIsLoading } from "../redux/reducer/courseSlice";
import { Loader } from "../components/commons/Loader";
import { SimpleButton } from "../components/ui/Buttons";

export const AddCourse = () => {
  const dispatch = useDispatch();
  const [imagePreview, setIMagePreview] = useState(null);
  const [courseImage, setCourseImage] = useState("");
  const [description, setDescription] = useState("");
  const [description1, setDescription1] = useState("");
  const [description2, setDescription2] = useState("");
  const [title, setTitle] = useState("");
  const isLoading = useSelector(selectIsLoading);

  const handleImageChange = (e) => {
    setCourseImage(e.target.files[0]);
    setIMagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("description1", description1);
    formData.append("description2", description2);
    if (courseImage) {
      formData.append("image", courseImage);
    }

    await dispatch(createCourse(formData));
    await dispatch(getAllCourse());
  };

  return (
    <>
      <section className="add_about">
        {isLoading && <Loader />}

        <Card>
          <div className="flex items-center text-center justify-center">
            <h1 className="text-3xl font-medium capitalize">
              Manage your <span className="text-orange-500 font-bold">Course Section</span>{" "}
            </h1>
          </div>
        </Card>
        <form action="post" onSubmit={handleSubmit}>
          <div className="mt-10">
            <WhiteCard>
              <div>
                <SubHeading>Title</SubHeading>
                <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter course title" className="bg-gray-200 w-full  p-6  focus:ring-1 focus:ring-blue-500 focus:border-blue-500" required />
              </div>
              <div>
                <SubHeading>Image</SubHeading>
                <input type="file" name="image" onChange={(e) => handleImageChange(e)} className="bg-gray-200 w-full  p-6  focus:ring-1 focus:ring-blue-500 focus:border-blue-500" required />
                {imagePreview !== null ? (
                  <div className="mt-5">
                    <img src={imagePreview} alt="courseImg" width="100%" height="100%" className="mt-5 rounded-lg w-full h-48 object-cover" />
                  </div>
                ) : (
                  <TitleSm title="No Image set for this blog" />
                )}
              </div>
              <div className="mt-10">
                <SubHeading>Description</SubHeading>
                <ReactQuill placeholder="write something about your business" style={{ height: "200px" }} theme="snow" value={description || ""} onChange={setDescription} modules={AddCourse.modules} formats={AddCourse.formats} />
              </div>
              <div className="mt-20">
                <SubHeading>Why This Course? </SubHeading>
                <ReactQuill placeholder="write why this course?" theme="snow" style={{ height: "200px" }} value={description1 || ""} onChange={setDescription1} modules={AddCourse.modules} formats={AddCourse.formats} />
              </div>
              <div className="mt-20">
                <SubHeading>What is the importance of this course? </SubHeading>
                <ReactQuill placeholder="write importance of this course" theme="snow" style={{ height: "200px" }} value={description2 || ""} onChange={setDescription2} modules={AddCourse.modules} formats={AddCourse.formats} />
              </div>
              <div className="mt-10">
                <SimpleButton text="Submit" />
              </div>
            </WhiteCard>
          </div>
        </form>

        <div className="mt-10">
          <CourseList />
        </div>
      </section>
    </>
  );
};

AddCourse.modules = {
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
AddCourse.formats = ["header", "font", "size", "bold", "italic", "underline", "strike", "blockquote", "list", "bullet", "indent", "link", "image", "video"];
