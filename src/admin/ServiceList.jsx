import React, { useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { deleteService, getAllService } from "../redux/reducer/serviceSlice";
import { selectIsLoggedIn } from "../redux/reducer/auth/authSlice";

const ServiceList = () => {
  const dispatch = useDispatch();
  const { services, isError, message } = useSelector((state) => state.service);
  const isLoggedIn= useSelector(selectIsLoggedIn)

  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getAllService());
    }

    if (isError) {
      toast.error(message);
    }
  }, [isLoggedIn, isError, message, dispatch]);

  const handleDelete = async (e, id) => {
    const result = window.confirm("are you sure you want to delete");
    if (result) {
      await dispatch(deleteService(id));
    }
    await dispatch(getAllService());
  };

  return (
    <>
        <section className="relative overflow-x-auto">
          {/* {isLoading && <Loader />} */}
          {services?.length === 0 ? (
            <h1>No Service Found!</h1>
          ) : (
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Service Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Image
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {services?.map((service, index) => (
                  <tr className="bg-white border-b hover:bg-gray-50" key={index}>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {index + 1}
                    </th>
                    <td className="px-6 py-4">{service?.title?.slice(0, 80)}</td>
                    <td className="px-6 py-4">{service?.image ? <img src={service.image.filePath} alt={service.image.filename} className="object-cover w-14 h-10 rounded-lg" /> : <span>No Image</span>}</td>

                    <td className="px-6 py-4 flex justify-between items-center">
                      <button onClick={(e) => handleDelete(e, service._id)}>
                        <RiDeleteBin6Line size={20} className=" text-red-500" />
                      </button>
                      <NavLink to={`/edit-about/${service._id}`}>
                        <BiEditAlt size={20} className=" text-green-500" />
                      </NavLink>
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

export default ServiceList;
