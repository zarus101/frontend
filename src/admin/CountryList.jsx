import React, { useEffect } from "react";
import { Card } from "../components/ui/Design";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/reducer/auth/authSlice";
import { deleteCountry, getAllCountry } from "../redux/reducer/countrySlice";
import { toast } from "react-toastify";
const CountryList = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();
  const { countries, isError, message } = useSelector((state) => state.country);

  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getAllCountry());
    }

    if (isError) {
      toast.error(message);
    }
  }, [isLoggedIn, isError, message, dispatch]);

  const handleDelete = async (e, id) => {
    const result = window.confirm("are you sure you want to delete");
    if (result) {
      await dispatch(deleteCountry(id));
    }
    await dispatch(getAllCountry());
  };

  return (
    <>
      <Card>
        <section className="relative overflow-x-auto">
          {/* {isLoading && <Loader />} */}
          {countries?.length === 0 ? (
            <h1>No Country Found!</h1>
          ) : (
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    description
                  </th>
                  <th scope="col" className="px-6 py-3">
                    why this country?
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Process to apply
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {countries?.map((country, index) => (
                  <tr className="bg-white border-b hover:bg-gray-50" key={index}>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {index + 1}
                    </th>
                    <td className="px-6 py-4">{country?.name?.slice(0, 80)}</td>
                    <td className="px-6 py-4">{country?.image ? <img src={country.image.filePath} alt={country.image.filename} className="object-cover w-14 h-10 rounded-lg" /> : <span>No Image</span>}</td>
                    <td className="px-6 py-4">{country.description?.slice(0, 80)}</td>
                    <td className="px-6 py-4">{country.description1?.slice(0, 80)}</td>

                    <td className="px-6 py-4">{country.description2?.slice(0, 80)}</td>

                    <td className="px-6 py-4 flex justify-between items-center">
                      <button onClick={(e) => handleDelete(e, country._id)}>
                        <RiDeleteBin6Line size={20} className=" text-red-500" />
                      </button>
                      <NavLink to={`/edit-about/${country._id}`}>
                        <BiEditAlt size={20} className=" text-green-500" />
                      </NavLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </Card>
    </>
  );
};

export default CountryList;
