import React, { useEffect } from "react";
import { Card } from "../components/ui/Design";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { deleteCourse, getAllCourse } from "../redux/reducer/courseSlice";
import { selectIsLoggedIn } from "../redux/reducer/auth/authSlice";
const CourseList = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();
  const { courses, isError, message } = useSelector((state) => state.course);

  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getAllCourse());
    }

    if (isError) {
      toast.error(message);
    }
  }, [isLoggedIn, isError, message, dispatch]);

  const handleDelete =async (e, id) => {
    const result = window.confirm("are you sure you want to delete");
    if (result) {
      await dispatch(deleteCourse(id));
    }
    await dispatch(getAllCourse());
  };

  return (
    <>
      <Card>
        <section className="relative overflow-x-auto">
          {/* {isLoading && <Loader />} */}
          {courses?.length === 0 ? (
            <h1>No Course Found!</h1>
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
                    why this course?
                  </th>

                  <th scope="col" className="px-6 py-3">
                    importance
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {courses?.map((course, index) => (
                  <tr className="bg-white border-b hover:bg-gray-50" key={index}>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {index + 1}
                    </th>
                    <td className="px-6 py-4">{course.title?.slice(0, 80)}</td>
                    <td className="px-6 py-4">{course?.image ? <img src={course.image.filePath} alt={course.image.filename} className="object-cover w-14 h-10 rounded-lg" /> : <span>No Image</span>}</td>
                    <td className="px-6 py-4">{course.description?.slice(0, 80)}</td>
                    <td className="px-6 py-4">{course.description1?.slice(0, 80)}</td>

                    <td className="px-6 py-4">{course.description2?.slice(0, 80)}</td>

                    <td className="px-6 py-4 flex justify-between items-center">
                      <button onClick={(e) => handleDelete(e, course._id)}>
                        <RiDeleteBin6Line size={20} className=" text-red-500" />
                      </button>
                      <NavLink to={`/edit-about/${course._id}`}>
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

export default CourseList;
