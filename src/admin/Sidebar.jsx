import React, { useState } from "react";
import { HiOutlineUserGroup, HiOutlineViewGrid } from "react-icons/hi";
import { GoDiffAdded } from "react-icons/go";
import { IoIosLogOut } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import { GrAddCircle } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineFileAdd, AiOutlineQuestionCircle } from "react-icons/ai";
import { SlHandbag } from "react-icons/sl";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/services/authService";
import { SET_LOGIN } from "../redux/reducer/auth/authSlice";

export const Sidebar = () => {
  const navigate = useNavigate();

  const logout = async () => {
    navigate("/login");
  };
  const data = [
    {
      id: 1,
      name: "dashboard",
      path: "/admin/dashboard",
      icon: <HiOutlineViewGrid />,
    },
    {
      id: 2,
      name: "about us",
      path: "/admin/add-about",
      icon: <GoDiffAdded />,
    },
    {
      id: 2,
      name: "courses",
      path: "/admin/add-courses",
      icon: <GoDiffAdded />,
    },
    {
      id: 2,
      name: "countries",
      path: "/admin/add-country",
      icon: <GoDiffAdded />,
    },
    {
      id: 3,
      name: "service",
      path: "/admin/add-service",
      icon: <GoDiffAdded />,
    },
    {
      id: 4,
      name: "blog",
      path: "/admin/add-blog",
      icon: <AiOutlineFileAdd />,
    },
    {
      id: 5,
      name: "career",
      path: "/admin/add-career",
      icon: <AiOutlineFileAdd />,
    },
    {
      id: 5,
      name: "team",
      path: "/admin/add-team",
      icon: <HiOutlineUserGroup />,
    },
    {
      id: 8,
      name: "faq",
      path: "/admin/add-faq",
      icon: <AiOutlineQuestionCircle />,
    },
    {
      id: 11,
      name: "contacts",
      path: "/admin/list-contact",
      icon: <FiPhoneCall />,
    },
  ];
  const [activeLink, setActiveLink] = useState();

  const dispatch = useDispatch();
  const handleLogout = async () => {
    await logoutUser();
    await dispatch(SET_LOGIN(false));
    navigate("/login");
  };

  return (
    <div className="adminsidebar w-1/4 bg-gray-700 text-white shadow-shadow2 pl-8 py-8 min-h-screen">
      <ul>
        {data.map((link) => (
          <li key={link.id} className="bb transition-all duration-5000">
            <NavLink to={link.path} activeClassName="border-orange-500 active bg-white text-orange-500" className={`flex items-center text-[20px] px-5 py-2 mb-1 capitalize }`} onClick={() => setActiveLink(link.path)}>
              <span className={`mr-2 icon p-2 rounded-full `}>{link.icon}</span>
              <span className={`transition-transform duration-500 }`}>{link.name}</span>
            </NavLink>
          </li>
        ))}
        <li>
          <button onClick={handleLogout} className="flex items-center text-md px-5 py-2 mb-1 capitalize border-l-4 border-transparent hover:bg-gray-600">
            <span className="mr-2">
              <IoIosLogOut />
            </span>
            <span>Logout</span>
          </button>
        </li>
      </ul>
    </div>
  );
};
