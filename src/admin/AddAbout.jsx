import React, { useState } from "react";
import { Card, SubHeading, Title, TitleSm, WhiteCard } from "../components/ui/Design";
import "react-quill/dist/quill.snow.css";
import AboutList from "./AboutList";
import ReactQuill from "react-quill";

export const AddAbout = () => {
  const [imagePreview, setIMagePreview] = useState(null);
  const [aboutImage, setAboutImage] = useState("");

  return (
    <>
      <section className="add_about">
        <form action="">
          <Card>
            <div className="flex items-center text-center justify-center">
              <h1 className="text-3xl font-medium capitalize">Manage your <span className="text-orange-500 font-bold">About Section</span> </h1>
            </div>
          </Card>
          <div className="mt-10">
            <WhiteCard>
              <div>
                <SubHeading>Title</SubHeading>
                <input type="text" name="fullname" placeholder="Enter Name" className="bg-gray-200 w-full  p-6  focus:ring-1 focus:ring-blue-500 focus:border-blue-500" required />
              </div>
              <div>
                <SubHeading>Image</SubHeading>
                <input type="file" name="fullname" placeholder="Enter Name" className="bg-gray-200 w-full  p-6  focus:ring-1 focus:ring-blue-500 focus:border-blue-500" required />
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
                <ReactQuill
                  placeholder="write something about your business"
                  theme="snow"
                  // value={description}
                  // onChange={setDescription}
                  modules={AddAbout.modules}
                  formats={AddAbout.formats}
                />
              </div>
            </WhiteCard>
          </div>
        </form>

        <div className="mt-10">
          <AboutList />
        </div>
      </section>
    </>
  );
};

AddAbout.modules = {
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
AddAbout.formats = ["header", "font", "size", "bold", "italic", "underline", "strike", "blockquote", "list", "bullet", "indent", "link", "image", "video"];
