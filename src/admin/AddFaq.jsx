import React, { useState } from "react";
import { Card, SubHeading, Title, WhiteCard } from "../components/ui/Design";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import FaqList from "./FaqList";
import { useDispatch, useSelector } from "react-redux";
import { createFaq, getAllFaq, selectIsLoading } from "../redux/reducer/FaqSlice";
import { SimpleButton } from "../components/ui/Buttons";
import { Loader } from "../components/commons/Loader";

export const AddFaq = () => {
  const dispatch = useDispatch();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const faqData = {
      question: question,
      answer: answer,
    };
    console.log(faqData)

    await dispatch(createFaq(faqData));
    await dispatch(getAllFaq());
  };
  return (
    <>
      <section className="add_about">
        {isLoading && <Loader/>}
        <Card>
          <div className="flex items-center text-center justify-center">
            <h1 className="text-3xl font-medium capitalize">
              Manage your <span className="text-orange-500 font-bold">faq Section</span>{" "}
            </h1>
          </div>{" "}
        </Card>
        <form action="post" onSubmit={handleSubmit}>
          <div className="mt-10">
            <WhiteCard>
              <div>
                <SubHeading>Question</SubHeading>
                <input type="text" name="question" placeholder="Enter question" value={question} onChange={(e)=> setQuestion(e.target.value)} className="bg-gray-200 w-full  p-6  focus:ring-1 focus:ring-blue-500 focus:border-blue-500" required />
              </div>

              <div>
                <SubHeading>Answer</SubHeading>
                <ReactQuill placeholder="write anser fro above" theme="snow" value={answer} style={{ height: "200px" }} onChange={setAnswer} modules={AddFaq.modules} formats={AddFaq.formats} />
              </div>
              <div className="mt-10">
                <SimpleButton text="Submit" />
              </div>
            </WhiteCard>
          </div>
        </form>

        <div className="mt-10">
          <FaqList />
        </div>
      </section>
    </>
  );
};

AddFaq.modules = {
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
AddFaq.formats = ["header", "font", "size", "bold", "italic", "underline", "strike", "blockquote", "list", "bullet", "indent", "link", "image", "video"];
