import React, { useState } from "react";
import { Card, SubHeading, TitleSm, WhiteCard } from "../components/ui/Design";
import CourseList from "./CourseList";
import { useDispatch, useSelector } from "react-redux";
import { createTeam, getAllTeam, selectIsLoading } from "../redux/reducer/teamSlice";
import { SimpleButton } from "../components/ui/Buttons";
import { Loader } from "../components/commons/Loader";
import TeamList from "./TeamList";

export const AddTeam = () => {
  const dispatch = useDispatch();
  const [imagePreview, setIMagePreview] = useState(null);
  const [teamImage, setTeamImage] = useState("");
  const [position, setPosition] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const isLoading = useSelector(selectIsLoading);

  const handleImageChange = (e) => {
    setTeamImage(e.target.files[0]);
    setIMagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("position", position);
    if (teamImage) {
      formData.append("image", teamImage);
    }

    await dispatch(createTeam(formData));
    await dispatch(getAllTeam());
  };

  return (
    <>
      <section className="add_about">
        {isLoading && <Loader/>}
        <Card>
          <div className="flex items-center text-center justify-center">
            <h1 className="text-3xl font-medium capitalize">
              Manage your <span className="text-orange-500 font-bold">Team Section</span>{" "}
            </h1>
          </div>{" "}
        </Card>
        <form action="post" onSubmit={handleSubmit}>
          <div className="mt-10">
            <WhiteCard>
              <div>
                <SubHeading>Full Name</SubHeading>
                <input type="text" name="fullname" placeholder="Enter Full Name" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-200 w-full  p-6  focus:ring-1 focus:ring-blue-500 focus:border-blue-500" required />
              </div>
              <div>
                <SubHeading>Email</SubHeading>
                <input type="email" name="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-200 w-full  p-6  focus:ring-1 focus:ring-blue-500 focus:border-blue-500" required />
              </div>
              <div>
                <SubHeading>Position</SubHeading>
                <input type="text" name="position" placeholder="Enter Position" value={position} onChange={(e) => setPosition(e.target.value)} className="bg-gray-200 w-full  p-6  focus:ring-1 focus:ring-blue-500 focus:border-blue-500" required />
              </div>
              <div>
                <SubHeading>Image</SubHeading>
                <input type="file" name="image" onChange={(e) => handleImageChange(e)} className="bg-gray-200 w-full  p-6  focus:ring-1 focus:ring-blue-500 focus:border-blue-500" required />
                {imagePreview !== null ? (
                  <div className="mt-5">
                    <img src={imagePreview} alt="aboutImg" width="100%" height="100%" className="mt-5 rounded-lg w-full h-48 object-cover" />
                  </div>
                ) : (
                  <TitleSm title="No Image set this member" />
                )}
              </div>
              <div className="mt-10">
                <SimpleButton text="Submit" />
              </div>
            </WhiteCard>
          </div>
        </form>

        <div className="mt-10">
          <TeamList />
        </div>
      </section>
    </>
  );
};
