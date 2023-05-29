import React from "react";
import { Card, CardOne, GridComponent, Heading, TitleMd } from "../components/ui/Design";
import { TiMessages } from "react-icons/ti";
import {AiOutlineTeam} from "react-icons/ai";
import {GrServices} from "react-icons/gr";
import {BiWorld} from "react-icons/bi";
import {FaQuestion} from "react-icons/fa"


const AdminDashboard = () => {
  return (
    <>
      <section className="dashboard ">
        <Card>
          <div className="flex items-center text-center justify-center">
            <h1 className="text-3xl font-medium capitalize">
              Welcome
              <span className=" text-orange-500"> suraj ✋</span>
            </h1>
          </div>
        </Card>
        <br />
        <GridComponent col={3} gap={4}>
          <CardOne fontSize="text-[25px]" colorcss="text-green-700" title="Total Blog Post" fontWeight="font-bold" number={5} icon={<TiMessages size={30} />} />
          <CardOne fontSize="text-[25px]" colorcss="text-purple-700" title="Total Teams" fontWeight="font-bold" number={5} icon={<AiOutlineTeam size={30} />} />
          <CardOne fontSize="text-[25px]" colorcss="text-red-700" title="Total Services Post" fontWeight="font-bold" number={5} icon={<GrServices size={30} />} />
          <CardOne fontSize="text-[25px]" colorcss="text-green-700" title="Total Courses" fontWeight="font-bold" number={5} icon={<TiMessages size={30} />} />
          <CardOne fontSize="text-[25px]" colorcss="text-green-700" title="Total Countries" fontWeight="font-bold" number={5} icon={<BiWorld size={30} />} />
          <CardOne fontSize="text-[25px]" colorcss="text-green-700" title="Total Inquiry" fontWeight="font-bold" number={5} icon={<TiMessages size={30} />} />
          <CardOne fontSize="text-[25px]" colorcss="text-green-700" title="Total Faq" fontWeight="font-bold" number={5} icon={<FaQuestion size={30} />} />
        </GridComponent>
      </section>
    </>
  );
};

export default AdminDashboard;
