import React, { useEffect, useState } from "react";
import { Card } from "../components/ui/Design";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/reducer/auth/authSlice";
import { toast } from "react-toastify";
import { deleteCategory, getAllCategory } from "../redux/reducer/categorySlice";
const CategoryList = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();
  const { categories, isError, message } = useSelector((state) => state.category);

  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getAllCategory());
    }

    if (isError) {
      toast.error(message);
    }
  }, [isLoggedIn, isError, message, dispatch]);

  const handleDelete = async (e, id) => {
    const result = window.confirm("are you sure you want to delete");
    if (result) {
      await dispatch(deleteCategory(id));
    }
    await dispatch(getAllCategory());
  };
  return (
    <>
      <section className="relative overflow-x-auto">

        {categories?.length === 0 ? (
          <h1 className="mt-10">No categories Found!</h1>
        ) : (
          <table className="w-full text-sm mt-10 text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                  name
                </th>
                <th scope="col" className="px-6 py-3">
                  description
                </th>
               

                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {categories?.map((contact, index) => (
                <tr className="bg-white border-b hover:bg-gray-50" key={index}>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {index + 1}
                  </th>
                  <td className="px-6 py-4">{contact.name?.slice(0, 80)}</td>

                  <td className="px-6 py-4">{contact.description?.slice(0, 80)}</td>
                 

                  <td className="px-6 py-4 flex justify-between items-center">
                    <button onClick={(e) => handleDelete(e, contact._id)}>
                      <RiDeleteBin6Line size={20} className=" text-red-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </>
  );
};

export default CategoryList;
