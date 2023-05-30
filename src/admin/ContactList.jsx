import React, { useEffect, useState } from "react";
import { Card } from "../components/ui/Design";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/reducer/auth/authSlice";
import { toast } from "react-toastify";
import { deleteContact, getAllContact } from "../redux/reducer/contactSlice";
const ContactList = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();
  const { contacts, isError, message } = useSelector((state) => state.contact);

  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getAllContact());
    }

    if (isError) {
      toast.error(message);
    }
  }, [isLoggedIn, isError, message, dispatch]);

  const handleDelete = async (e, id) => {
    const result = window.confirm("are you sure you want to delete");
    if (result) {
      await dispatch(deleteContact(id));
    }
    await dispatch(getAllContact());
  };
  return (
    <>
      <section className="relative overflow-x-auto">
        <Card>
          <div className="flex items-center text-center justify-center">
            <h1 className="text-3xl font-medium capitalize">
              Manage your <span className="text-orange-500 font-bold">Contact </span>{" "}
            </h1>
          </div>
        </Card>
        {contacts?.length === 0 ? (
          <h1 className="mt-10">No Contact Found!</h1>
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
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  Subject
                </th>
                <th scope="col" className="px-6 py-3">
                  Message
                </th>

                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr className="bg-white border-b hover:bg-gray-50" key={index}>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {index + 1}
                  </th>
                  <td className="px-6 py-4">{contact.name?.slice(0, 80)}</td>

                  <td className="px-6 py-4">{contact.email?.slice(0, 80)}</td>
                  <td className="px-6 py-4">{contact.phone}</td>
                  <td className="px-6 py-4">{contact.subject?.slice(0, 80)}</td>
                  <td className="px-6 py-4">{contact.message?.slice(0, 80)}</td>

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

export default ContactList;
